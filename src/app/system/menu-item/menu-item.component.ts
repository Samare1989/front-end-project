import { Component, OnInit, Input } from '@angular/core';
import { Menu} from '../menu/menu.class';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuitem: Menu;

  constructor() { }

  ngOnInit() {
  }

}
