import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-containt-page',
  templateUrl: './containt-page.component.html',
  styleUrls: ['./containt-page.component.scss']
})
export class ContaintPageComponent implements OnInit, AfterViewInit {
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
  public tabnumber?: number
  constructor(private activated: ActivatedRoute) { }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    Promise.resolve().then(() => {
      this.activated.fragment.subscribe((suc: number | string | null) => {

        this.tabnumber = Number(suc)

        this.selectTab(this.tabnumber)

      })
    })

  }
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true; console.log(this.staticTabs);
    }
  }


}
