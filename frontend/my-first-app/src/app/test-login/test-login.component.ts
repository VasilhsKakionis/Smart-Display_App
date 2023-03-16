import { Component, OnInit } from '@angular/core';
import { UserExcludingIdEmailIsVirtualRoles, UserControllerService } from '../rest';

@Component({
  selector: 'app-test-login',
  templateUrl: './test-login.component.html',
  styleUrls: ['./test-login.component.css']
})
export class TestLoginComponent implements OnInit {

  newUser = {} as UserExcludingIdEmailIsVirtualRoles;

  constructor(private userControllerService: UserControllerService) {

  }

  ngOnInit(): void {

    this.newUser.username = 'stellastaktest@gmail.com';
    this.newUser.passwd = '12345678';

    this.userControllerService.userControllerLogin(this.newUser)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }

    );


  }

}
