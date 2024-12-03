import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { starOutline, createOutline, trashOutline } from 'ionicons/icons';
import { GroceryItem } from 'src/types/GroceryTypes';

@Component({
  selector: 'app-grocery-list-item',
  templateUrl: './grocery-list-item.component.html',
  styleUrls: ['./grocery-list-item.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class GroceryListItemComponent {

  starOutline = starOutline;
  createOutline = createOutline;
  trashOutline = trashOutline;

  @Input() item!: GroceryItem;
  @Output() itemDeleted = new EventEmitter<string>();
}
