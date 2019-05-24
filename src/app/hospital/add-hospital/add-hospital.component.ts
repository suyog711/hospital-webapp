import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/shared/models/hospital.model';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {
  hospital;
  constructor() {
    this.hospital = new Hospital({})
  }

  ngOnInit() {
  }
  submit() {
    console.log(this.hospital);
  }
}
