import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/helper/Service/apiservice.service';

@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.scss'],
})
export class AdminboardComponent {
  ticketInfo: any[] = [];
  modelStay: any = {};
  positionTypeDatas: any = {};
  rollTypesDatas: any = {};
  rollTypeDatas: any = {};
  ticketnos: any = true;
  names: any = true;
  commands: any = true;
  ipAddresss: any = true;
  createbys: any = true;
  prioritys: any = true;
  processors: any = false;
  osTypes: any = false;
  addresss: any = false;
  city: any = false;
  userStatus: any = false;
  action: any = true;
  changePerPagenumber: any = 10;
  changesPerPage: any;

  selectedFilePath: any;
  pageSizes = [
    { text: '10', value: 10 },
    { text: '25', value: 25 },
    { text: '50', value: 50 },
    { text: '100', value: 100 },
  ];

  visible!: boolean;
  displayBasic!: boolean;
  isShowError: boolean = false;
  constructor(public apiCall: ApiserviceService, public router: Router) {}
  ngOnInit(): void {
    this.getUserDetailsInfo();
  }
  // Submit(modelStay:any){
  //   debugger;
  //   var body = {
  //     name: modelStay.name,
  //     ipAddress: modelStay.ipAddress,
  //     command: modelStay.command,
  //     createBy:modelStay.createby,
  //     priority: modelStay.priority,
  //   }
  //   this.apiCall.addTicketDetails(body).subscribe({
  //     next: () => {
  //       debugger;
  //       this.getUserDetailsInfo();
  //     }
  //   })
  //   this.displayBasic = false;
  //   this.selectedFilePath=[];
  // }

  getUserDetailsInfo() {
    debugger;
    this.apiCall.getboardDetails().subscribe({
      next: (res: any) => {
        this.ticketInfo = res;
      },
    });
  }
  getTableValue($event: any): string {
    return $event.target.value;
  }

  onRowEditInit(w: any, Data: any): void {}

  onRowEditCancel(product: any, ri: any) {
    this.getUserDetailsInfo();
  }
  updateUserdata(product: any) {}
  confirmSubmit(product: any) {}
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
