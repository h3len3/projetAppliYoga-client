import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from 'primeng/toast';
import { ConfirmDialog } from 'primeng/confirmdialog';

// calendar
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';

import { CommonModule } from '@angular/common';

//FullCalendarModule.registerPlugins([dayGridPlugin]);
// fin calendar

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast, ConfirmDialog, CommonModule, FullCalendarModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

  //
  standalone: true,
  
  // template: `
    // <full-calendar [options]="calendarOptions"></full-calendar>

    
  
})
export class AppComponent {
  title = 'projetYoga.client';
}
