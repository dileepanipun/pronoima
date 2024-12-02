import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule, NgForOf} from "@angular/common";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {IonicModule, ModalController, AlertController} from '@ionic/angular';
import {AddTaskModalComponent} from '../features/components/add-task-modal/add-task-modal.component';
import {SplitParenthesesPipe} from "../pipes/split-parentheses.pipe";
import { GroceryItem, GroceryData } from '../../types/GroceryTypes';
import { addIcons } from 'ionicons';
import {
  addCircleOutline,
  createOutline,
  trashOutline,
  listOutline,
  cartOutline,
  checkmarkCircleOutline,
  eyeOffOutline,
  eyeOutline,
  refreshOutline,
} from 'ionicons/icons';
import {GroceryListItemComponent} from "../features/components/grocery-list-item/grocery-list-item.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    NgForOf,
    HttpClientModule,
    SplitParenthesesPipe,
    GroceryListItemComponent
  ]
})
export class HomePage implements OnInit {
  todoItems: GroceryItem[] = [];
  selectedFilter: string = 'all';

  constructor(private http: HttpClient, private modalController: ModalController, private alertController: AlertController) {
    // Register the icons
    addIcons({
      addCircleOutline,
      createOutline,
      trashOutline,
      listOutline,
      cartOutline,
      checkmarkCircleOutline,
      eyeOffOutline,
      eyeOutline,
      refreshOutline,
    });
  }

  ngOnInit() {
    this.loadTodoItems();
  }

  private loadTodoItems() {
    this.http.get<GroceryData>('/assets/data/todo-items.json')
      .subscribe({
        next: (data) => {
          console.log('Successfully loaded todo items:', data);
          this.todoItems = data.groceryList;
        },
        error: (error) => {
          console.error('Error loading todo items:', error.status, error.message);
          if (error.status === 404) {
            console.error('File not found - please check if the path is correct');
          }
          this.todoItems = [
            {
              title: 'Buy milk',
              amount: '1 gallon',
              checked: false,
              category: 'dairy',
              estimatedCost: 4.99,
              hidden: false,
              removed: false,
              addedDate: new Date().toISOString(),
              unit: 'gallon',
              store: 'Grocery Store'
            },
            {
              title: 'Buy bread',
              amount: '1 loaf',
              checked: false,
              category: 'bakery',
              estimatedCost: 3.99,
              hidden: false,
              removed: false,
              addedDate: new Date().toISOString(),
              unit: 'loaf',
              store: 'Bakery'
            }
          ];
        }
      });
  }

  getFilteredItems() {
    switch (this.selectedFilter) {
      case 'pending':
        return this.todoItems.filter(item => !item.checked && !item.hidden && !item.removed);
      case 'completed':
        return this.todoItems.filter(item => item.checked && !item.hidden && !item.removed);
      case 'hidden':
        return this.todoItems.filter(item => item.hidden && !item.removed);
      case 'removed':
        return this.todoItems.filter(item => item.removed);
      default:
        return this.todoItems.filter(item => !item.hidden && !item.removed);
    }
  }

  async openAddTaskModal() {
    const modal = await this.modalController.create({
      component: AddTaskModalComponent,
      breakpoints: [0, 0.4],  // Modal will take 40% of the screen height
      initialBreakpoint: 0.4, // Initial size when opened
      cssClass: 'bottom-modal', // Optional: for custom styling
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.addNewTask(result.data);
      }
    });

    return await modal.present();
  }

  addNewTask(taskText: string) {
    const newTask: GroceryItem = {
      title: taskText,
      amount: '',
      checked: false,
      category: '',
      estimatedCost: 0,
      hidden: false,
      removed: false,
      addedDate: new Date().toISOString(),
      unit: '',
      store: ''
    };
    this.todoItems.push(newTask);
  }

  toggleItem(item: GroceryItem) {
    item.checked = !item.checked;
  }

  editItem(item: any) {
    console.log('Edit item:', item);
  }

  toggleHideItem(item: GroceryItem) {
    item.hidden = !item.hidden;
  }

  async removeItem(item: GroceryItem) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: 'Are you sure you want to remove this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            item.removed = true; // Instead of actually removing, mark as removed
          }
        }
      ]
    });

    await alert.present();
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'high':
        return 'danger';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'medium';
    }
  }

  isActionableTab(tab: string): boolean {
    return ['all', 'pending', 'completed'].includes(tab);
  }

  async restoreItem(item: GroceryItem) {
    const alert = await this.alertController.create({
      header: 'Confirm Restore',
      message: 'Are you sure you want to restore this item to your list?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Restore',
          handler: () => {
            item.removed = false;
            // Optionally show a toast or notification
          }
        }
      ]
    });

    await alert.present();
  }

  async unhideItem(item: GroceryItem) {
    const alert = await this.alertController.create({
      header: 'Confirm Unhide',
      message: 'Are you sure you want to make this item visible in your list?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Unhide',
          handler: () => {
            item.hidden = false;
            // Optionally show a toast or notification
          }
        }
      ]
    });

    await alert.present();
  }
}
