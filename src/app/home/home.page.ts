import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule, NgForOf} from "@angular/common";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {IonicModule, ModalController} from '@ionic/angular';
import {AddTaskModalComponent} from '../add-task-modal/add-task-modal.component';
import {SplitParenthesesPipe} from "../pipes/split-parentheses.pipe";

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
  todoItems: Array<{ text: string, checked: boolean }> = [];
  selectedFilter: string = 'all';

  constructor(private http: HttpClient, private modalController: ModalController) {
  }

  ngOnInit() {
    this.loadTodoItems();
  }

  private loadTodoItems() {
    this.http.get<{ todoItems: Array<{ text: string, checked: boolean }> }>('/assets/data/todo-items.json')
      .subscribe({
        next: (data) => {
          console.log('Successfully loaded todo items:', data);
          this.todoItems = data.todoItems;
        },
        error: (error) => {
          console.error('Error loading todo items:', error.status, error.message);
          if (error.status === 404) {
            console.error('File not found - please check if the path is correct');
          }
          this.todoItems = [
            {text: 'Buy milk', checked: false},
            {text: 'Buy bread', checked: false}
          ];
        }
      });
  }

  getFilteredItems() {
    switch (this.selectedFilter) {
      case 'pending':
        return this.todoItems.filter(item => !item.checked);
      case 'completed':
        return this.todoItems.filter(item => item.checked);
      default:
        return this.todoItems;
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
    const newTask = {text: taskText, checked: false};
    this.todoItems.push(newTask);
  }

  toggleItem(item: any) {
    item.checked = !item.checked;
  }
}
