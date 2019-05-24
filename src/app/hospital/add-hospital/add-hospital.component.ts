import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/shared/models/hospital.model';
import { MsgService } from 'src/app/shared/services/msg.service';
import { HospitalService } from '../service/hospital.service';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {
  hospital;
  cities = [];
  constructor(
    public msgService: MsgService,
    public hospitalService: HospitalService
  ) {
    this.hospital = new Hospital({
      departments: [{
        id: 1,
        name: "ENT"
      }]
    })
  }

  ngOnInit() {
    this.hospitalService.getCity().subscribe(
      (data: any) => {
        console.log(data)
        this.cities = data.city;
      }
    )
    this.hospitalService.getDepartment().subscribe(
      (data) => {
        console.log(data)
      }
    )
  }
  submit() {
    console.log(this.hospital);
    this.hospitalService.createHospital(this.hospital).subscribe(
      (data) => {
        this.msgService.showSuccess('Hospital Added Successfully');
        this.hospital = {};
      },
      error => {
        this.msgService.showError(error);
      }
    )

  }
}
