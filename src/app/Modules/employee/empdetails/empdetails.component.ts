import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/helper/Service/apiservice.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.scss']
})
export class EmpdetailsComponent {
  empInfo: any[] = [];
  modelStay:any={};
  positionTypeDatas: any = {};
  rollTypesDatas: any = {};
  rollTypeDatas: any = {};
  serialNo:any=true;
  names: any = true;
  systemNumbers: any = true;
  ipAddresss: any = true;
  systemNames: any = true;
  rams: any = true;
  processors: any = false;
  osTypes: any = false;
  addresss: any = false;
  city: any = false;
  userStatus: any = false;
  action: any = true;
  changePerPagenumber: any = 10;
  changesPerPage: any;

  selectedFilePath:any;
  pageSizes = [
    { text: '10', value: 10 },
    { text: '25', value: 25 },
    { text: '50', value: 50 },
    { text: '100', value: 100 },
  ];

  visible!: boolean;
  displayBasic!: boolean;
  isShowError: boolean = false;
  constructor(public apiCall:ApiserviceService,public router:Router){}
  ngOnInit():void{
    this.getUserDetailsInfo();
  }
  Submit(modelStay:any){
    debugger;
    var body = {
      name: modelStay.name,
      systemNumber: modelStay.systemNumber,
      ipAddress: modelStay.ipAddress,
      systemName:modelStay.systemName,
      ram: modelStay.ram,
      processor: modelStay.processor,
      osType: modelStay.osType,
    }
    this.apiCall.addUserDetails(body).subscribe({
      next: () => {
        debugger;
        this.getUserDetailsInfo();
      }
    })
    this.displayBasic = false;
    this.selectedFilePath=[];
  }

  getUserDetailsInfo() {
    debugger;
    this.apiCall.getUsersDetails().subscribe({
      next: (res: any) => {
          this.empInfo = res;
      },
    });
  }
  getTableValue($event: any): string {
    return $event.target.value;
  }

  onRowEditInit(w: any, Data: any): void {
  }

  onRowEditCancel(product: any, ri: any) {
    this.getUserDetailsInfo();
  }
  updateUserdata(product: any){}
  confirmSubmit(product: any){}
  staydetailsreset() {
    this.displayBasic = true;
  }
  changePerPage(e: any): void {
    this.changePerPagenumber = e.value.text;
  }
  showBasicDialog() {
    this.displayBasic = true;
  }
  Remove() {
    this.isShowError = true;
  }
}
