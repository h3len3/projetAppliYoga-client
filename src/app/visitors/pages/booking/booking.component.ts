
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


// fin calendar

@Component({
  selector: 'app-booking',
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {

  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin, dayGridPlugin, interactionPlugin],
    //initialView: 'timeGridWeek', // ou 'timeGridDay'
    initialView: 'dayGridMonth',
    locale,
    
    // dateClick: (info) => this.showPopup(info.date),
    // eventClick: (ev) => console.log(ev)
  }; 

}

