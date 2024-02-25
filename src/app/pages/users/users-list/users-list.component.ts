import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  users: any[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  // fetchUsers() {
  //   this.authService.getUsers().subscribe(
  //     (data) => {
  //       this.users = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching users:', error);
  //     }
  //   );
  // }

  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.users = data;
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }

}
