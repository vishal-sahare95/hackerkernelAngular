import { AfterViewInit, Component } from '@angular/core';
import { SecondAsingmentService } from 'src/app/config/secondPart/second-asingment.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements AfterViewInit{
  data:string='third 3';
  newdata:number=3
constructor(private secondPastSeconASS:SecondAsingmentService){
  
 }

ngAfterViewInit(): void {
  
  this.secondPastSeconASS.navmenu.next(3)
     this.secondPastSeconASS.navmenu.subscribe(suc=>{  
       this.newdata =suc
        console.log(this.newdata);
        
     })
}
}
