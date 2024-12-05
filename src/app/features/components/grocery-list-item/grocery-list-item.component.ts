import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Star, Edit, Trash2, Check } from 'lucide-angular';
import { GroceryItem } from 'src/app/core/models/GroceryItem';

@Component({
  selector: 'app-grocery-list-item',
  templateUrl: './grocery-list-item.component.html',
  styleUrls: ['./grocery-list-item.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, LucideAngularModule]
})
export class GroceryListItemComponent {

  // icons
  readonly starIcon = Star;
  readonly editIcon = Edit;
  readonly trashIcon = Trash2;
  readonly checkIcon = Check;

  // item data
  @Input() item!: GroceryItem;

  // will controll element's edit mode visibility
  @Input() isEditeModeEnabled: boolean = false;

  // will emit item deleted event
  @Output() itemDeleted = new EventEmitter<string>();

}
