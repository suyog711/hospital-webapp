import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';

const hospitalRouting: Routes =[
    {
        path:'add',
        component: AddHospitalComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(hospitalRouting)
    ],
    exports:[
        RouterModule
    ]
})
export class HospitalRoutingModule{}