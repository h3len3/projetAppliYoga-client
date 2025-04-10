import { Routes } from '@angular/router';
import { AdminCalendarComponent } from './pages/admin-calendar/admin-calendar.component';
import { AdminManageComponent } from './pages/admin-manage/admin-manage.component';

export const adminRoutes: Routes = [
    {
        path: 'myCalendar',
        component: AdminCalendarComponent,
      },
      {
        path: 'manage',
        component: AdminManageComponent,
      },
];