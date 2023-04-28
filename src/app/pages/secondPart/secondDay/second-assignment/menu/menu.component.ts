import { Component, OnInit } from '@angular/core';
import { SecondAsingmentService } from 'src/app/config/secondPart/second-asingment.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  data:string='nemu';
  newdata?:number
constructor(private secondPastSeconASS:SecondAsingmentService){


}
ngOnInit(): void {
  this.secondPastSeconASS.navmenu.subscribe(suc=>{  
    this.newdata =suc
     console.log(this.newdata);
     
  })
}

}
