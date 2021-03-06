import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BusinessService{

    url = 'http://localhost:3000/business';

    constructor(private http:HttpClient) {}

    addBusiness(person_name,business_name, business_gst_number) {
        const obj = {
            person_name: person_name,
            business_name: business_name,
            business_gst_number: business_gst_number
        };
        console.log(obj);
        this.http.post(`${this.url}/add`,obj)
        .subscribe(res => console.log('Done'));
    }
    
    getBusiness(){
        return this.http.get(`${this.url}`);
    }

    editBusiness(id) {
        return this.http.get(`${this.url}/{id}`);
    }

    deleteBusiness(id) {
        return this.http.get(`${this.url}/delete/${id}`);
    }

    dataBusiness(id) {
        return this.http.get(`${this.url}/edit/${id}`);
    }


}