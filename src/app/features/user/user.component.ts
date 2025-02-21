import { Component, computed, input, output } from '@angular/core';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user = input.required<User>();
  selectedUser = output<User>();
  isSelected = input<boolean>();
  imgPath = computed(() => 'images/' + this.user()?.avatar);

  onSelectUser() {
    this.selectedUser.emit(this.user());
  }
}
