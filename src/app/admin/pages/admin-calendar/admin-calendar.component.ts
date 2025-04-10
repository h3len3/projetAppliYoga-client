import { Component, ViewChild } from '@angular/core';

//calendar

import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';

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
    plugins: [timeGridPlugin, dayGridPlugin],
    //initialView: 'timeGridWeek', // ou 'timeGridDay'
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
      { title: 'Réunion', date: '2025-04-10T10:30:00' },
      { title: 'Pause café', date: '2025-04-10T14:00:00' },
    ],

  };

  changeView(type: string) {
    this.calendarComponent.getApi().changeView(type)
  }
  

}
