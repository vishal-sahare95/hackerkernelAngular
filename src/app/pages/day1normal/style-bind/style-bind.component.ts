import { Component } from '@angular/core';

@Component({
  selector: 'app-style-bind',
  templateUrl: './style-bind.component.html',
  styleUrls: ['./style-bind.component.scss']
})
export class StyleBindComponent {

  dataArr=[
    {
      'id':1,
      'color':'red',
     
    },
    {
      'id':2,
      'color':'green',
     
    },
    {
      'id':3,
      'color':'blue',
     
    }
  ];
  public hello:any='pink'
}
