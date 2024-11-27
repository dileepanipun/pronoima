import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ModalController} from "@ionic/angular";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class AddTaskModalComponent {

  constructor(private modalController: ModalController) {
  }

  taskText: string = '';

  dismiss() {
    this.modalController.dismiss();
  }

  saveTask() {
    this.modalController.dismiss(this.taskText);
  }

}
