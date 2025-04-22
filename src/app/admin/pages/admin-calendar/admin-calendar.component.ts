import { Component, inject, ViewChild } from '@angular/core';

//calendar

import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { Calendar, CalendarOptions, EventSourceInput } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';

import { CommonModule } from '@angular/common';

import locale from '@fullcalendar/core/locales/fr';
import { EventService } from '../../services/event.service';

// fin calendar

// pop up 
import { PopUpEventComponent } from '../pop-up-event/pop-up-event.component';
import { DialogModule } from 'primeng/dialog';

@Component({
  imports: [CommonModule, FullCalendarModule,  PopUpEventComponent, DialogModule],
  templateUrl: './admin-calendar.component.html',
  styleUrl: './admin-calendar.component.scss',

  selector: 'app-calendar',
  standalone: true,
})
export class AdminCalendarComponent {

  eventService = inject(EventService);

  events!: EventSourceInput;

  popupVisible = false;

  selectedDate: Date|null = null; 

  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin, dayGridPlugin, interactionPlugin],
    //initialView: 'timeGridWeek', // ou 'timeGridDay'
    initialView: 'dayGridMonth',
    locale,
    headerToolbar: {
      right: 'prev,next today',
      center: 'title',
      left: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    dateClick: (info) => this.showPopup(info.date),
    eventClick: (ev) => console.log(ev)
  }; 

  constructor() {
    this.eventService.get().subscribe(data => this.events = data.map(e => ({
      start: new Date(e.startDate),
      end: new Date(e.endDate),
      title: `${e.title} (${e.description})`,
    })))
  }

  showPopup(date: Date) {
    this.selectedDate = date;
    console.log(this.selectedDate);
    this.popupVisible = true;
  }

  // test(date: Date) {
  //   this.dialog.open(PopUpEventComponent, {
  //     data: { date }
  //   });
  // }

}
