import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  id = "id";
  unit = "unit";
  firstname = "firstname";
  lastname = "lastname";
  tailnumber = "tailnumber";
  planetype = "planetype";
  insurance = "insuance";     
  policynumber = "policynumber";
  expiredatepolicy = "expiredatepolicy";
  phone = "phone"; 
  email = "email "; 
  constructor() { }

  ngOnInit() {
  }

}
