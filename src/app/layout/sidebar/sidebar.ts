import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [CommonModule, RouterModule], 
})
export class Sidebar {

  tabs = [
    { name: 'Dashboard', route: '/dashboard' },
    { name: 'Projects', route: '/projects' },
    { name: 'Tasks', route: '/tasks' },
    { name: 'Employees', route: '/employees' },
    { name: 'Clients', route: '/clients' },
    { name: 'Reports', route: '/reports' },
    { name: 'Settings', route: '/settings' },
    { name: 'Notifications', route: '/notifications' },
  ];

}
