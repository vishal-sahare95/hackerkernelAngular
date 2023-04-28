import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SecondAsingmentService } from 'src/app/config/secondPart/second-asingment.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements AfterViewInit{
  data:string='second 2';
  newdata:number=2
constructor(private secondPastSeconASS:SecondAsingmentService){
  
 }

ngAfterViewInit(): void {
  this.secondPastSeconASS.navmenu.next(2)
  this.secondPastSeconASS.navmenu.subscribe(suc=>{  
    this.newdata =suc
     console.log(this.newdata);
     
  })  
}

}
