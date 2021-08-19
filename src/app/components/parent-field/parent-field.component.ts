import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-parent-field',
  providers: [DragulaService],
  templateUrl: './parent-field.component.html',
  styleUrls: ['./parent-field.component.css']
})
export class ParentFieldComponent implements OnInit {

  constructor(private dragulaService: DragulaService) { }

  ngOnInit(): void {

    this.dragulaService.createGroup("items", {
      copy : (el, source) => {
        return source.id === 'holder'
      },
      copyItem: (menu_item: MenuItem) => {
        return new MenuItem(menu_item.name, menu_item.color)
      },
      accepts: (el, target, source, sibling) => {
        return target?.id === 'selected'
      }
    });

    // this.dragulaService.dropModel("items").subscribe(args => {
    //   console.log(args);
    // });

  }

}
