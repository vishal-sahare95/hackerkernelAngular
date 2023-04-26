import { Component, Input } from '@angular/core';
import { Foods } from 'src/app/config/foods/foods';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input() data:Foods[]=[]

delete(id:number){
this.data.splice(id,1)
}
}
