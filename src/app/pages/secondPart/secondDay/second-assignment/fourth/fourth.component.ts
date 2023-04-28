import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SecondAsingmentService } from 'src/app/config/secondPart/second-asingment.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements AfterViewInit {
  data:string='fourh4';
  newdata:number=4
  constructor(private secondPastSeconASS:SecondAsingmentService){
    
   }
  
  ngAfterViewInit(): void {
    this.secondPastSeconASS.navmenu.next(4)
    this.secondPastSeconASS.navmenu.subscribe(suc=>{  
      this.newdata =suc
       console.log(this.newdata);
       
    })  
  }
  
}
