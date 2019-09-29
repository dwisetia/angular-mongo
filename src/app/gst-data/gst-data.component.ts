import { Component, OnInit } from '@angular/core';
import{ BusinessService } from '../business.service';
import Business from '../model/business-model';


@Component({
  selector: 'app-gst-data',
  templateUrl: './gst-data.component.html',
  styleUrls: ['./gst-data.component.scss']
})
export class GstDataComponent implements OnInit {
  businesses: Business[];
  dataku: any;
  searchText: string = "";
  collection = [];

  constructor(private businessService:BusinessService) { }

  deleteBusiness(id) {
    if(confirm("Are you sure to delete ")) {
    this.businessService.deleteBusiness(id).subscribe(response => {
      console.log("deleted success", response);
      location.reload();
      this.ngOnInit;
    });
  }
  }

  dataBusiness(id) {
    this.businessService.dataBusiness(id).subscribe(dataedit => {
      this.dataku = dataedit; 
    })
  }

  refresh() {
    location.reload();
  }

  ngOnInit() {

    this.businessService.getBusiness().subscribe((data: Business[]) => {
      this.businesses = data;
    });
  }

}
