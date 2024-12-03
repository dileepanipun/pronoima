import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GroceryItem } from '../../../core/models/GroceryItem';
import { GroceryListViewComponent } from '../../components/grocery-list-view/grocery-list-view.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [IonicModule, GroceryListViewComponent]
})
export class HomePage {
  groceryItems: GroceryItem[] = [];
}
