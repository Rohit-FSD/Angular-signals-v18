import { Component, computed, input, signal } from '@angular/core';
import { TasksService } from '../../core/services/tasks.service';
import { Task } from '../../core/models/task.nodel';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  userSelectedId = input.required<string>();
  userName = input.required<string>();
  tasks = signal<Task[]>([]);
  tasksBasedOnId = computed(() =>
    this.tasks().filter((task) => task.userId === this.userSelectedId())
  );

  constructor(private readonly taskService: TasksService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.fetchTasks().subscribe((res) => {
      this.tasks.set(res);
    });
  }

  onComplete(taskId: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== taskId));
  }
}
