import { Component, OnInit } from '@angular/core';
import { MsgService } from 'src/app/shared/services/msg.service';
import { HospitalService } from '../service/hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-hospital',
  templateUrl: './list-hospital.component.html',
  styleUrls: ['./list-hospital.component.css']
})
export class ListHospitalComponent implements OnInit {
  hospitals = [];
  constructor(
    public msgService: MsgService,
    public hospitalService: HospitalService,
    public router: Router
  ) {
    this.msgService.showInfo('hello');
  }

  ngOnInit() {
    this.hospitalService.listHospital().subscribe(
      (data: any) => {
        console.log('hospitals:', data);
        this.hospitals = data;
      },
      error => {
        this.msgService.showError(error);
      }
    )
  }

}
