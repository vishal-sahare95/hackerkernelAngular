import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practice-fisrt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './practice-fisrt.component.html',
  styleUrls: ['./practice-fisrt.component.scss']
})
export class PracticeFisrtComponent implements OnInit{

ngOnInit(): void {
  console.log('stand laone compo');
  
}
}
