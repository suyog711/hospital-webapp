import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { HospitalRoutingModule } from './hospital.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddHospitalComponent],
  imports: [
    CommonModule,
    HospitalRoutingModule,
    FormsModule
  ]
})
export class HospitalModule { }
