import { Component } from '@angular/core';

//calendar

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';

import { CommonModule } from '@angular/common';

//FullCalendarModule.registerPlugins([dayGridPlugin]);
// fin calendar

@Component({
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './admin-calendar.component.html',
  styleUrl: './admin-calendar.component.scss',

  selector: 'app-calendar',
  standalone: true,

  //imports: [CommonModule, FullCalendarModule],
  // template: `
    //<full-calendar [options]="calendarOptions"></full-calendar>
  //`,

  template: `
  <full-calendar [options]="calendarOptions"></full-calendar>
`,
})
export class AdminCalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: [
      { title: 'Événement 1', date: '2025-04-08' },
      { title: 'Événement 2', date: '2025-04-12' }
    ]
  };
  

}
