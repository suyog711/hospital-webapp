import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { HospitalRoutingModule } from './hospital.routing';
import { FormsModule } from '@angular/forms';
import { ListHospitalComponent } from './list-hospital/list-hospital.component';
import { UpdateHospitalComponent } from './update-hospital/update-hospital.component';
import { HospitalService } from './service/hospital.service';

@NgModule({
  declarations: [AddHospitalComponent, ListHospitalComponent, UpdateHospitalComponent],
  imports: [
    CommonModule,
    HospitalRoutingModule,
    FormsModule
  ],
  providers:[HospitalService]
})
export class HospitalModule { }
