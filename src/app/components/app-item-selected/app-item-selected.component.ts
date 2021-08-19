import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-app-item-selected',
  templateUrl: './app-item-selected.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app-item-selected.component.css']
})
export class AppItemSelectedComponent implements OnInit {

  mockup_item: MenuItem = { name: "mockup" }

  items: Array<any> = [
    {},
    {},
    {},
    {},
    {}
  ]

  constructor(private dragulaService: DragulaService) {

    dragulaService.dropModel("items").subscribe(args => {

      // this.items[args.targetIndex-1] = new MenuItem(args.item);
      this.items[args.targetIndex-1]={};
      this.items[args.targetIndex-1] = new MenuItem(args.item.name);

      this.items.splice(args.targetIndex, 1)
      
      console.log(args.targetIndex-1);
      console.log(args.item);
      console.log(this.items);

    });
    console.log(this.items);

  }


  ngOnInit(): void {
  }

  delete(itemF: MenuItem, index: number) {
    // this.items.forEach((item, index) => {
    //   if (item === itemF)
    //     this.items.splice(index, 1)
    // })

    let mockup: MenuItem = { name: "mockup" }

    this.items[index] = mockup;

    console.log(index)
  }

}
