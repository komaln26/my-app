import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: any[] = [];
  editing: any = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
  editUser(user: any) {
    this.editing = user;
  }
  saveUser(user: any) {
    this.userService.updateUser(user).subscribe(() => {
      alert('User updated successfully.');
      this.editing = null;
    }, (error) => {
      alert(`Error updating user: ${error.message}`);
    });
  }

  cancelEdit() {
    this.editing = null;
  }

  deleteUser(user: any) {
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      this.userService.deleteUser(user.id).subscribe(() => {
        alert('User deleted successfully.');
        this.users = this.users.filter((u) => u.id !== user.id);
      }, (error) => {
        alert(`Error deleting user: ${error.message}`);
      });
    }
  }
}
