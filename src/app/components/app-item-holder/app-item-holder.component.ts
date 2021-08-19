import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-app-item-holder',
  templateUrl: './app-item-holder.component.html',
  styleUrls: ['./app-item-holder.component.css']
})
export class AppItemHolderComponent implements OnInit {

  items: Array<MenuItem> = [
    {name: "Bad"},
    {name: "Petrovitch"},
    {name: "Optimistic"},
    {name: "Everglades"}
  ] 


  constructor(private dragulaService: DragulaService) {

  }

  ngOnInit(): void {
  }

}
