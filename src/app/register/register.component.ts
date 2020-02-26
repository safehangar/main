import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  id = "id";
    firstname = "firstname";
    lastname = "lastname";
    unit = "unit";
    policynumber = "policynumber";
    policydate = "policydate";
    phone = "phone";
    email = "email";
    signup = "signup";
  constructor() { }

  ngOnInit() {
  }

}
