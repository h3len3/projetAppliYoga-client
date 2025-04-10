import { Routes } from '@angular/router';
import { AdminCalendarComponent } from './pages/admin-calendar/admin-calendar.component';
import { AdminManageComponent } from './pages/admin-manage/admin-manage.component';
import { AdminListEventComponent } from './pages/admin-list-event/admin-list-event.component';

export const adminRoutes: Routes = [
    {
        path: 'myCalendar',
        component: AdminCalendarComponent,
      },
      {
        path: 'manage',
        component: AdminManageComponent,
      },
      {
        path: 'list',
        component: AdminListEventComponent
      }
];