import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SecondAsingmentService } from 'src/app/config/secondPart/second-asingment.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
    data:string='first1';
     newdata?:number=0
constructor(private secondPastSeconASS:SecondAsingmentService){

  
 }
 ngOnInit(): void {
  this.secondPastSeconASS.navmenu.next(1)
     this.secondPastSeconASS.navmenu.subscribe(suc=>{  
       this.newdata =suc
        console.log(this.newdata);
        
     })
 }



}
