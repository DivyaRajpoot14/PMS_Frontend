import { Routes } from '@angular/router';

export const routes: Routes = [

  // Default → Dashboard
  {
    path: '',
    loadComponent: () =>
      import('./features/dashboard/dashboard/dashboard')
        .then(m => m.Dashboard)
  },

  // Dashboard
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard/dashboard')
        .then(m => m.Dashboard)
  },

  // Projects
  // {
  //   path: 'projects',
  //   loadComponent: () =>
  //     import('./features/projects/projects')
  //       .then(m => m.Projects)
  // },

  // // Tasks
  // {
  //   path: 'tasks',
  //   loadComponent: () =>
  //     import('./features/tasks/tasks')
  //       .then(m => m.Tasks)
  // },

  // // Employees
  // {
  //   path: 'employees',
  //   loadComponent: () =>
  //     import('./features/employees/employees')
  //       .then(m => m.Employees)
  // },

  // // Clients
  // {
  //   path: 'clients',
  //   loadComponent: () =>
  //     import('./features/clients/clients')
  //       .then(m => m.Clients)
  // },

  // // Reports
  // {
  //   path: 'reports',
  //   loadComponent: () =>
  //     import('./features/reports/reports')
  //       .then(m => m.Reports)
  // },

  // // Settings
  // {
  //   path: 'settings',
  //   loadComponent: () =>
  //     import('./features/settings/settings')
  //       .then(m => m.Settings)
  // },

  // // Notifications
  // {
  //   path: 'notifications',
  //   loadComponent: () =>
  //     import('./features/notifications/notifications')
  //       .then(m => m.Notifications)
  // },

  // Auth
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(m => m.Login)
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./features/auth/register/register')
        .then(m => m.Register)
  },

  // Fallback
  {
    path: '**',
    redirectTo: ''
  }
];
