import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, post, requestBody} from '@loopback/rest';
import {CountDigits} from '../editData/countDigits';
import {Data, RawData} from '../models';
import {DataRepository} from '../repositories';

export class DataController {
  DataRepository: any;
  //rawDataRepository: any;
  constructor(
    @repository(DataRepository)
    public dataRepository: DataRepository,
  ) {}

  @post('/raw-data', {
    responses: {
      '200': {
        description: 'RawData model instance',
        content: {'application/json': {schema: getModelSchemaRef(RawData)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RawData, {
            //title: 'NewRawData',

          }),
        },
      },
    })
    rawData: RawData,
  ): Promise<Data> {

    console.log(rawData.data);

    const digits = new CountDigits();

    let isOk = true;
    let bars = [];
    let ar = [rawData.data[0], rawData.data[1], rawData.data[2], rawData.data[3], rawData.data[4], rawData.data[5], rawData.data[6], rawData.data[7], rawData.data[8]];
    bars.push(digits.bar(ar));
    ar = [rawData.data[9], rawData.data[10], rawData.data[11], rawData.data[12], rawData.data[13], rawData.data[14], rawData.data[15], rawData.data[16]];
    bars.push(digits.bar(ar));
    ar = [rawData.data[17], rawData.data[18], rawData.data[19], rawData.data[20], rawData.data[21], rawData.data[22], rawData.data[23], rawData.data[24]];
    bars.push(digits.bar(ar));
    ar = [rawData.data[25], rawData.data[26], rawData.data[27], rawData.data[28], rawData.data[29], rawData.data[30], rawData.data[31], rawData.data[32]];
    bars.push(digits.bar(ar));
    //console.log("bars = ", bars);
    for (let i = 0; i < bars.length; i++) {
      if (bars[i] == -1) {
        isOk = false;
      }
    }

    let upperINT: any[];
    upperINT = [rawData.data[33], rawData.data[34], rawData.data[35], rawData.data[36]];
    //console.log("upperInt = ", upperINT);
    for (let i = 0; i < upperINT.length; i++) {
      if (upperINT[i] !== false && upperINT[i] !== true) {
        isOk = false;
        upperINT[i] = -1;
      }
    }

    let sevenSegmentArray = [];
    ar = [rawData.data[37], rawData.data[38], rawData.data[39], rawData.data[40], rawData.data[41], rawData.data[42], rawData.data[43]];
    sevenSegmentArray.push(digits.sevenSegment(ar));
    ar = [rawData.data[44], rawData.data[45], rawData.data[46], rawData.data[47], rawData.data[48], rawData.data[49], rawData.data[50]];
    sevenSegmentArray.push(digits.sevenSegment(ar));
    ar = [rawData.data[51], rawData.data[52], rawData.data[53], rawData.data[54], rawData.data[55], rawData.data[56], rawData.data[57]];
    sevenSegmentArray.push(digits.sevenSegment(ar));
    ar = [rawData.data[58], rawData.data[59], rawData.data[60], rawData.data[61], rawData.data[62], rawData.data[63], rawData.data[64]];
    sevenSegmentArray.push(digits.sevenSegment(ar));
    ar = [rawData.data[65], rawData.data[66], rawData.data[67], rawData.data[68], rawData.data[69], rawData.data[70], rawData.data[71]];
    sevenSegmentArray.push(digits.sevenSegment(ar));

    let hours = -1;
    let flag = 0;
    for (let i = 0; i < sevenSegmentArray.length; i++) {
      if (sevenSegmentArray[i] == -1) {
        flag = 1;
        isOk = false;
      }
    }
    if (flag == 0) {
      hours = digits.hours(sevenSegmentArray);
    }
    //console.log("hours = ", hours);

    let timer: any;
    timer = rawData.data[72];
    if (timer !== false && timer !== true) {
      isOk = false;
      timer = -1;
    }
    //console.log("timer = ", timer);
    let lowIND: any[];
    lowIND = [rawData.data[73], rawData.data[74], rawData.data[75], rawData.data[76],
    rawData.data[77], rawData.data[78], rawData.data[79], rawData.data[80],
    rawData.data[81], rawData.data[82], rawData.data[83], rawData.data[84],
    rawData.data[85], rawData.data[86], rawData.data[87], rawData.data[88]];
    for (let i = 0; i < lowIND.length; i++) {
      if (lowIND[i] !== true && lowIND[i] !== false) {
        isOk = false;
        lowIND[i] = -1;
      }
    }

    let finalData = new Data();
    finalData = digits.createFinalArray(bars, upperINT, hours, timer, lowIND, isOk);
    console.log("finalData = ", finalData);

    return this.dataRepository.create(finalData);
  }

  @get('/data', {
    responses: {
      '200': {
        description: 'Array of Data model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Data, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    //@param.path.number('id') id: number,
    //@param.filter(Data, {exclude: 'where'}) filter?: FilterExcludingWhere<Data>
  ): Promise<Data[]> {

    let data = new Data();
    const filter: Filter = {
      where: {
        'id': data.id,
      },
      fields: {
      },
      offset: 0,
      limit: Infinity,
      skip: 0,
      order: [],
    };
    let x = await this.dataRepository.find(filter);
    //const copy = Object.assign({}, x)
    //await this.dataRepository.deleteAll();

    //console.log("x=", x);
    //console.log("copy=", copy)

    //return copy;
    return x;
  }

  @get('/data/Observer', {
    responses: {
      '200': {
        description: 'Array of Data model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Data, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find1(
  ): Promise<void> {

    let data = new Data();

    const filter: Filter = {
      where: {
        'id': data.id,
      },
      fields: {
      },
      offset: 0,
      limit: Infinity,
      skip: 0,
      order: [],
    };

    let x = await this.dataRepository.find(filter);
    const digits = new CountDigits();
    for (let i = 0; i < x.length; i++) {
      let dateString = new Date(x[i].timestamp).toUTCString();
      let dateWithoutTimezone = dateString.split(' ').slice(0, 5);
      let month = digits.calculateNumberOfMonth(dateWithoutTimezone[2])
      let finalDate = dateWithoutTimezone[3] + "-" + dateWithoutTimezone[1] + "-" + month
      let finalTimestamp = [finalDate, dateWithoutTimezone[4]];
      x[i].timestamp = finalTimestamp.join(" ");
    }

    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
      path: 'data.csv',
      header: [
        {id: 'timestamp', title: 'Timestamp'},
        {id: 'bar1', title: 'Bar1'},
        {id: 'bar2', title: 'Bar2'},
        {id: 'bar3', title: 'Bar3'},
        {id: 'bar4', title: 'Bar4'},
        {id: 'upperIND1', title: 'UpperIND1'},
        {id: 'upperIND2', title: 'UpperIND2'},
        {id: 'upperIND3', title: 'UpperIND3'},
        {id: 'upperIND4', title: 'UpperIND4'},
        {id: 'hours', title: 'Hours'},
        {id: 'timer', title: 'Timer'},
        {id: 'lowIND11', title: 'LowIND11'},
        {id: 'lowIND12', title: 'LowIND12'},
        {id: 'lowIND13', title: 'LowIND13'},
        {id: 'lowIND14', title: 'LowIND14'},
        {id: 'lowIND21', title: 'LowIND21'},
        {id: 'lowIND22', title: 'LowIND22'},
        {id: 'lowIND23', title: 'LowIND23'},
        {id: 'lowIND24', title: 'LowIND24'},
        {id: 'lowIND31', title: 'LowIND31'},
        {id: 'lowIND32', title: 'LowIND32'},
        {id: 'lowIND33', title: 'LowIND33'},
        {id: 'lowIND34', title: 'LowIND34'},
        {id: 'lowIND41', title: 'LowIND41'},
        {id: 'lowIND42', title: 'LowIND42'},
        {id: 'lowIND43', title: 'LowIND43'},
        {id: 'lowIND44', title: 'LowIND44'},
        {id: 'flagIsOk', title: 'FlagIsOk'},
      ],
      fieldDelimiter: ";",
    });

    csvWriter
      .writeRecords(x);
  }
  /*@patch('/raw-data', {
    responses: {
      '200': {
        description: 'RawData PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RawData, {partial: true}),
        },
      },
    })
    rawData: RawData,
    @param.where(RawData) where?: Where<RawData>,
  ): Promise<Count> {
    return this.rawDataRepository.updateAll(rawData, where);
  }*/

  /*@get('/raw-data/{id}', {
    responses: {
      '200': {
        description: 'Data model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Data, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RawData, {exclude: 'where'}) filter?: FilterExcludingWhere<Data>
  ): Promise<Data> {
    return this.dataRepository.findById(id, filter);
  }*/

  /*@patch('/raw-data/{id}', {
    responses: {
      '204': {
        description: 'RawData PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RawData, {partial: true}),
        },
      },
    })
    rawData: RawData,
  ): Promise<void> {
    await this.rawDataRepository.updateById(id, rawData);
  }

  @put('/raw-data/{id}', {
    responses: {
      '204': {
        description: 'RawData PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() rawData: RawData,
  ): Promise<void> {
    await this.rawDataRepository.replaceById(id, rawData);
  }

  @del('/raw-data/{id}', {
    responses: {
      '204': {
        description: 'RawData DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.rawDataRepository.deleteById(id);
  }*/
}
