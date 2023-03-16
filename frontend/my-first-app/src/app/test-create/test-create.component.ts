import { UserControllerService, UserExcludingIdUsernameIsVirtualRoles } from '../rest';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})

export class TestCreateComponent implements OnInit {
  // an einai class = new class()
  // an einai interface:

  newUser = {} as UserExcludingIdUsernameIsVirtualRoles;

  constructor(private userControllerService: UserControllerService) {}

  ngOnInit(): void {

    this.newUser.email = 'stellastaktest@gmail.com';
    this.newUser.passwd = '12345678';

    this.userControllerService.userControllerCreate(this.newUser)
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
