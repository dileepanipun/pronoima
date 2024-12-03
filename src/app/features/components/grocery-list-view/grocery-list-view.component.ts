import {Component, Input, OnInit} from '@angular/core';
import {IonList} from "@ionic/angular/standalone";
import {GroceryListItemComponent} from "../grocery-list-item/grocery-list-item.component";

@Component({
  selector: 'app-grocery-list-view',
  templateUrl: './grocery-list-view.component.html',
  styleUrls: ['./grocery-list-view.component.scss'],
  standalone: true,
  imports: [
    IonList,
    GroceryListItemComponent
  ]
})
export class GroceryListViewComponent {
  @Input() listItems!: any[];

  constructor() { }

}
