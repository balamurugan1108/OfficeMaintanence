import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/helper/Service/apiservice.service';

@Component({
  selector: 'app-empdatas',
  templateUrl: './empdatas.component.html',
  styleUrls: ['./empdatas.component.scss']
})
export class EmpdatasComponent {
  userInfo: any[] = [];
  modelStay:any={};
  positionTypeDatas: any = {};
  rollTypesDatas: any = {};
  rollTypeDatas: any = {};
  serialNo:any=true;
  name: any = true;
  profileimg: any = true;
  Role: any = true;
  emailaddress: any = true;
  mobileno: any = true;
  alterno: any = false;
  dateOfJoin: any = false;
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
    this.getUserInfo();
  }
  Submit(){
    debugger;
      //   let headers =({
    //     'Accept': 'application/json',
    //     'Content-Type': 'multipart/form-data',
    //   })
    // const headers = new headers()
    const formData = new FormData();
    formData.append('firstname', this.modelStay.firstname);
    formData.append('lastname',this. modelStay.lastname);
    formData.append('email', this.modelStay.email);
    formData.append('passWord', this.modelStay.passWord);
    formData.append('mobilenumber', this.modelStay.mobilenumber);
    formData.append('dob', this.modelStay.dobs);
    formData.append('address', this.modelStay.Address);
    formData.append('imageFilePath', this.selectedFilePath);
    formData.append('role', this.modelStay.role);
    this.apiCall.addUsers(formData).subscribe({
      next: () => {
        debugger;
        this.getUserInfo();
      }
    })
    this.selectedFilePath=[];
  }

  getUserInfo() {
    debugger;
    this.apiCall.getUsers().subscribe({
      next: (res: any) => {
          this.userInfo = res;
      },
    });
  }
  getTableValue($event: any): string {
    return $event.target.value;
  }

  onRowEditInit(w: any, Data: any): void {
  }

  onRowEditCancel(product: any, ri: any) {
    this.getUserInfo();
  }
  updateUserdata(product: any){}
  confirmSubmit(product: any){}
  staydetailsreset() {
    this.displayBasic = false;
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
  imgUpload(event: any) {
    debugger
    if (event.files && event.files.length > 0) {
      this.selectedFilePath = event.files[0].name
      this.displayBasic = true;
    }
  }
}

