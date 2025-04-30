import { Routes } from '@angular/router';
import { BookingComponent } from './pages/booking/booking.component';
import { AccueilComponent } from './pages/accueil/accueil.component';


export const visitorRoutes: Routes = [
    {path: '',
     component: AccueilComponent
    },
    { //path: 'ng ', 
     //component: AdminCalendarComponent,
     path: 'calendar',
     component: BookingComponent
    }
];