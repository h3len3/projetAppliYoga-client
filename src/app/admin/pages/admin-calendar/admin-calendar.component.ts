import { Component, ViewChild } from '@angular/core';

//calendar

import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { CalendarOptions } from '@fullcalendar/core';

import { CommonModule } from '@angular/common';

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

  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, listPlugin],
    initialView: 'listMonth',
    events: [
      { title: 'Événement 1', date: '2025-04-08' },
      { title: 'Événement 2', date: '2025-04-12' }
    ]
  };

  changeView(type: string) {
    this.calendarComponent.getApi().changeView(type)
  }
  

}
