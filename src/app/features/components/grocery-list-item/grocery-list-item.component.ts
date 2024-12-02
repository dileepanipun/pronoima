import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

interface GroceryItem {
  id: string;
  name: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-grocery-list-item',
  templateUrl: './grocery-list-item.component.html',
  styleUrls: ['./grocery-list-item.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class GroceryListItemComponent {
  @Input() item!: GroceryItem;
  @Output() itemDeleted = new EventEmitter<string>();
  @Output() itemToggled = new EventEmitter<{ id: string, checked: boolean }>();

  get isChecked(): boolean {
    return this.item.isChecked;
  }

  onCheckboxChange(event: CustomEvent): void {
    this.itemToggled.emit({
      id: this.item.id,
      checked: event.detail.checked
    });
  }

  onDelete(): void {
    this.itemDeleted.emit(this.item.id);
  }
}
