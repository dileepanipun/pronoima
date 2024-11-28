import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule, NgForOf} from "@angular/common";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {IonicModule, ModalController} from '@ionic/angular';
import {AddTaskModalComponent} from '../add-task-modal/add-task-modal.component';
import {SplitParenthesesPipe} from "../pipes/split-parentheses.pipe";
import { GroceryItem, GroceryData } from '../../types/GroceryTypes';

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
    SplitParenthesesPipe
  ]
})
export class HomePage implements OnInit {
  userName = 'John';
  todoItems: GroceryItem[] = [];
  selectedFilter: string = 'all';

  constructor(private http: HttpClient, private modalController: ModalController) {
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
              removed: false
            },
            {
              title: 'Buy bread',
              amount: '1 loaf',
              checked: false,
              category: 'bakery',
              estimatedCost: 3.99,
              hidden: false,
              removed: false
            }
          ];
        }
      });
  }

  getFilteredItems() {
    const visibleItems = this.todoItems.filter(item => !item.hidden && !item.removed);
    
    switch (this.selectedFilter) {
      case 'pending':
        return visibleItems.filter(item => !item.checked);
      case 'completed':
        return visibleItems.filter(item => item.checked);
      default:
        return visibleItems;
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
      removed: false
    };
    this.todoItems.push(newTask);
  }

  toggleItem(item: GroceryItem) {
    item.checked = !item.checked;
  }
}
