import { Routes } from '@angular/router';
import { AdminCalendarComponent } from './admin/pages/admin-calendar/admin-calendar.component';

// Pour sous-routes : 
import { adminRoutes } from './admin/admin.routes';
import { visitorRoutes } from './visitors/visitors.routes';

export const routes: Routes = [
    ...visitorRoutes,
    { //path: 'ng ', 
     //component: AdminCalendarComponent,
     path: 'admin',
     children: adminRoutes
    }
];
