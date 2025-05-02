
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

import { BookingService } from '../../services/booking.service';


// pop up 
import { PopupbookingComponent } from '../popupbooking/popupbooking.component';
import { DialogModule } from 'primeng/dialog';

//
import {Toast} from 'primeng/toast';
import {ConfirmDialog} from 'primeng/confirmdialog';

import tippy from 'tippy.js';
import {EventClickArg, EventInput} from '@fullcalendar/core';
import DayGridPlugin from '@fullcalendar/daygrid';
import InteractionPlugin, {DateClickArg} from '@fullcalendar/interaction';
//

@Component({
  selector: 'app-booking',
  imports: [CommonModule, FullCalendarModule, PopupbookingComponent, DialogModule, Toast, ConfirmDialog],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
  standalone: true,
})
export class BookingComponent {

  private bookingService = inject(BookingService);
  popupVisible: boolean = false;
  event: any;

  selectedDate: Date|null = null; 
  
  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin, dayGridPlugin, interactionPlugin],
    
    initialView: 'dayGridMonth',
    locale,
    // h - h 
    displayEventEnd:true,
    // bulle au survol
    eventDidMount: function(info) {
      tippy(info.el, {
        animation: true,
        allowHTML: true,
        content: `<b>${info.event.title}</b> ${info.event.extendedProps["placeAddress"]} ${info.event.extendedProps['description']}`
      })
    },

    eventClick: (e) => this.eventClickHandler(e),
    //dateClick: (e) => this.dateClickHandler(e),

  //   events: (fetchInfo, successCallback, failureCallback) => {
  //     // Important : injecte les events dynamiquement
  //     successCallback(this.events || []);
  //   },
  //   eventClick: (e) => this.eventClickHandler(e)
  }; 

  events!: EventInput[];

  constructor() {
    this.loadEvents()
  }

  private loadEvents() {
    this.bookingService.getAll().subscribe({
      next: (data) => {
        this.events = data.map(e => ({
          title: e.title,
          start: new Date(e.startDate),
          end: new Date(e.endDate),
          // type évènement
          color: this.getColor(e.type),
          // propriétés suppl - pas u par full calendar (pour mapping <-> cfr l 147)
           extendedProps: e
             
        }));
        
      }
    })
  }

  private getColor(type: string) {
    switch (type) {
      case 'GroupSession':
        return '#1f77b4';
      case 'IndividualSession':
        return '#ff7f0e';
      case 'SpecialEvent':
        return '#2ca02c';
        //default et else
      default:
        return '#d62728';
    }
  }

  private eventClickHandler(e: EventClickArg) {
     this.event = {
       ...e.event.extendedProps
    
     };
     this.popupVisible = true;
    
   }


  // private dateClickHandler(e: DateClickArg) {
  //   this.event = {
  //     startDate: e.date.toISOString(),
  //   };
  //   this.popupVisible = true;
  // }

  // eventClickHandler(e: EventClickArg) {
  //   this.event = e.event;
  //   this.selectedDate = new Date(e.event.start!); // "!" = sûr qu'elle existe
  //   this.popupVisible = true;
  // }

  onClose() {
     this.popupVisible = false;
     this.event = null;
   }

}



