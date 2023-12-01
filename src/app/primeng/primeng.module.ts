import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [],
  imports: [
    InputTextModule,
    ButtonModule,
    MenubarModule ,
    MenuModule,
    TableModule,
    DropdownModule,
    OverlayPanelModule,
    CheckboxModule,
    DialogModule,
    CalendarModule,
    RadioButtonModule,
    FileUploadModule
    
  ],
  exports:[
    InputTextModule,
    ButtonModule,
    MenubarModule,
    MenuModule,
    TableModule,
    DropdownModule,
    OverlayPanelModule,
    CheckboxModule,
    DialogModule,
    CalendarModule,
    RadioButtonModule,
    FileUploadModule
  ]
})
export class PrimengModule { 

}

