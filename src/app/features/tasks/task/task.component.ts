import { Component, input, output } from '@angular/core';
import { Task } from '../../../core/models/task.nodel';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  task = input.required<Task>();
  removeTaskId = output<string>();

  onCompleteClick() {
    this.removeTaskId.emit(this.task().id);
  }
}
