
import { Component, computed, inject, ViewChild } from '@angular/core';

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

//
import {Toast} from 'primeng/toast';
import {ConfirmDialog} from 'primeng/confirmdialog';


import {EventClickArg, EventInput,} from '@fullcalendar/core';
import DayGridPlugin from '@fullcalendar/daygrid';
import InteractionPlugin, {DateClickArg} from '@fullcalendar/interaction';
//
// pour bulle au survol
import tippy from 'tippy.js';


@Component({
  imports: [CommonModule, FullCalendarModule,  PopUpEventComponent, DialogModule, Toast, ConfirmDialog],
  templateUrl: './admin-calendar.component.html',
  styleUrl: './admin-calendar.component.scss',

  selector: 'app-calendar',
  standalone: true,
})
export class AdminCalendarComponent {

  // eventService = inject(EventService);
  // events!: EventSourceInput;
  // popupVisible = false;
  // K : 
  private eventService = inject(EventService);
  popupVisible: boolean = false;
  event: any;

  header!: string;

  selectedDate: Date|null = null; 

  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin, dayGridPlugin, interactionPlugin],
    //initialView: 'timeGridWeek', // ou 'timeGridDay'
    initialView: 'dayGridMonth',
    locale,
    // h - h 
    displayEventEnd:true,
    // bulle au survol
    eventDidMount: function(info) {
      tippy(info.el, {
        animation: true,
        allowHTML: true,
        content: `<b>${info.event.title}</b>`
        // ${info.reservation.user} // faire un modele réservation ? user ? 
      })
    },
    headerToolbar: {
      right: 'prev,next today',
      center: 'title',
      left: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    //avt:
    // dateClick: (info) => this.showPopup(info.date),
    // eventClick: (ev) => console.log(ev)
    //k:
       eventClick: (e) => this.eventClickHandler(e),
     dateClick: (e) => this.dateClickHandler(e),
    
  }; 
  // k : 
  // options: CalendarOptions & { schedulerLicenseKey: string } = {
  //   plugins: [resourceTimelinePlugin, InteractionPlugin],
  //   eventClick: (e) => this.eventClickHandler(e),
  //   dateClick: (e) => this.dateClickHandler(e),
  //   schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
  // }

  //k : 
  events!: EventInput[];
  //k:
   constructor() {
     this.loadEvents()
   }
//avt:
  //  constructor() {
  //    this.eventService.getAll().subscribe(data => this.events = data.map(e => ({
  //      start: new Date(e.startDate),
  //      end: new Date(e.endDate), 
  //      title: `${e.title} (${e.description})`,
  //    })))
  //  }

  //  showPopup(date: Date) {
  //    this.selectedDate = date;
  //    console.log(this.selectedDate);
  //    this.popupVisible = true;
  //  }

  // k : 
  onSave(result: boolean) {
    this.popupVisible = false;
    this.event = null;
    if(result) {
      this.loadEvents();
    }
  }

  private loadEvents() {
    this.eventService.getAll().subscribe({
      next: (data) => {
        this.events = data.map(e => ({
          title: e.title + " " + e.placeName + e.placeAddress,
          start: new Date(e.startDate),
          end: new Date(e.endDate),
          // type évènement
          color: this.getColor(e.type),
          // propriétés suppl - pas u par full calendar (pour mapping <-> cfr l 147)
            extendedProps: e
        }));
        console.log(this.event)
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
    this.header = `Evènement à la date du ${this.event.startDate.toLocaleString()}`
    this.popupVisible = true;
    
  }

  private dateClickHandler(e: DateClickArg) {
    this.event = {
      startDate: e.date.toISOString(),
    };
    this.popupVisible = true;
  }

  onClose() {
    this.popupVisible = false;
    this.event = null;
  }

}
