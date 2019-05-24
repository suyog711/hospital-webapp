import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable()
export class HospitalService{
    url = environment.BaseUrl+'hospital-service/hospitals'
    constructor(){

    }
    createHospital(){

    }

    updateHospital(){

    }

    listHospital(){

    }
}