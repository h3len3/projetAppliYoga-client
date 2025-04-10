import { Routes } from '@angular/router';
import { AdminCalendarComponent } from './admin/pages/admin-calendar/admin-calendar.component';

// Pour sous-routes : 
import { adminRoutes } from './admin/admin.routes';

export const routes: Routes = [
    { //path: 'admin/adminCalendar', 
     //component: AdminCalendarComponent,
     path: 'admin',
     children: adminRoutes
    }
];
