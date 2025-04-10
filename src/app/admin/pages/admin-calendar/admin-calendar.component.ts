import { Component, ViewChild } from '@angular/core';

//calendar

import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';

import { CommonModule } from '@angular/common';

import locale from '@fullcalendar/core/locales/fr';

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
    plugins: [timeGridPlugin, dayGridPlugin],
    //initialView: 'timeGridWeek', // ou 'timeGridDay'
    initialView: 'dayGridMonth',
    locale,
    headerToolbar: {
      right: 'prev,next today',
      center: 'title',
      left: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    events: [
      { title: 'Réunion', date: '2025-04-10T10:30:00' },
      { title: 'Pause café', date: '2025-04-10T14:00:00' },
    ],

  }; 

}
