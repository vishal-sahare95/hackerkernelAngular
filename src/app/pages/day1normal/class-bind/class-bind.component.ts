import { Component } from '@angular/core';

@Component({
  selector: 'app-class-bind',
  templateUrl: './class-bind.component.html',
  styleUrls: ['./class-bind.component.scss']
})
export class ClassBindComponent {
  isSidePanel:boolean=true
  role?:string
  OnAdd(){
    this.isSidePanel=false
  }
  OnClose(){
    this.isSidePanel=true
  }

  isSide(){
   return this.isSidePanel
  }
}
