import {lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {DataController} from '../controllers';
import {DbDataSource} from '../datasources';
import {DataRepository} from '../repositories';

/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
@lifeCycleObserver('')
export class ControllerObserver implements LifeCycleObserver {
  /*
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE) private app: Application,
  ) {}
  */

  /**
   * This method will be invoked when the application starts
   */
  async start(): Promise<void> {
    // Add your logic for start

    var cron = require('node-cron');

    cron.schedule('* * * * *', () => {
      let base = new DbDataSource();
      let data = new DataRepository(base);
      let x = new DataController(data);
      x.find1();
      console.log('running a task every minute');
    });
  }

  /**
   * This method will be invoked when the application stops
   */
  async stop(): Promise<void> {
    // Add your logic for stop
  }
}
