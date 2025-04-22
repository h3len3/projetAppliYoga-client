import { Routes } from '@angular/router';
import { AdminCalendarComponent } from './admin/pages/admin-calendar/admin-calendar.component';

// Pour sous-routes : 
import { adminRoutes } from './admin/admin.routes';

export const routes: Routes = [
    { //path: 'ng ', 
     //component: AdminCalendarComponent,
     path: 'admin',
     children: adminRoutes
    }
];
