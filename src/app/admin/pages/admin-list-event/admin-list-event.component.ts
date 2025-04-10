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
  selector: 'app-admin-list-event',
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './admin-list-event.component.html',
  styleUrl: './admin-list-event.component.scss',

  //selector: 'app-calendar',
  standalone: true,

  template: `
  <full-calendar [options]="calendarOptions"></full-calendar>
`,
})
export class AdminListEventComponent {
  // @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, listPlugin, timeGridPlugin],
    initialView: 'listMonth',
    locale,
    // headerToolbar: {
    //   right: 'prev,next today',
    //   center: 'title',
    //   left: 'dayGridMonth,timeGridWeek,timeGridDay',
    // },
    events: [
      { title: 'Événement 1', date: '2025-04-08' },
      { title: 'Événement 2', date: '2025-04-12' }
    ]
  };

  // changeView(type: string) {
  //   this.calendarComponent.getApi().changeView(type)
  // }

}
