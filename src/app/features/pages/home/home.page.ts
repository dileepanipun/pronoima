import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GroceryItem } from '../../../core/models/GroceryItem';
import { GroceryListViewComponent } from '../../components/grocery-list-view/grocery-list-view.component';
import { GroceryItemsService } from 'src/app/core/services/grocery-items.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [IonicModule, GroceryListViewComponent],
  providers: [GroceryItemsService],
})
export class HomePage {
  groceryItems: GroceryItem[] = [];

  constructor(private groceryItemsService: GroceryItemsService) {
    this.getGroceryItems();
  }

  getGroceryItems() {
    this.groceryItemsService.getGroceryItems().subscribe((data) => {
      console.log(data);
      this.groceryItems = data.groceryList;
    });
  }

}
