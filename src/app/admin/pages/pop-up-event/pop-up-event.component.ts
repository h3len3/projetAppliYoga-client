
import { DatePipe } from '@angular/common';
import { Component,effect, EventEmitter, inject, input, output } from '@angular/core';
import { PlaceEventService } from '../../services/place-event.service';
import { PlaceEventModel } from '../../models/place-event.model';

import {EventModel} from '../../models/event.model';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ConfirmationService, MessageService} from 'primeng/api';
import {EventService} from '../../services/event.service';
import {iif} from 'rxjs';
import {Button} from 'primeng/button';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {DatePicker} from 'primeng/datepicker';
import {Select} from 'primeng/select';

@Component({
  selector: 'app-pop-up-event',
  imports: [DatePipe, Button,
    ReactiveFormsModule,
    FloatLabel,
    InputText,
    DatePicker,
    Select],
  templateUrl: './pop-up-event.component.html',
  styleUrl: './pop-up-event.component.scss'
})
export class PopUpEventComponent {

  private formBuilder = inject(FormBuilder);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
  private eventService = inject(EventService);

  placeEventService = inject(PlaceEventService);

  locations: PlaceEventModel[] = []
  
  getEvent() {
     this.placeEventService.get().subscribe(data => this.locations = data); 
   }
  

  onSave = output<boolean>();
  event = input.required<EventModel>();
  form = this.formBuilder.group({
    title: ['', [Validators.required]],
    description: [''],
    startDate: [new Date(), [Validators.required]],
    endDate: [new Date(), [Validators.required]],
    type: ['', [Validators.required]],
    id_PlaceEventYoga: [0, [Validators.required]],
    minSub : [10],
    maxSub : [20]
  });

  constructor() {
    this.getEvent()
    effect(() => {
      if(!this.event()) {
        return;
      }
      this.form.patchValue({
        ...this.event(),
        startDate: new Date(this.event().startDate),
        endDate: new Date(this.event().endDate ?? this.event().startDate),
        id_PlaceEventYoga: this.event().id_PlaceEventYoga ?? 0
      })

      console.log(this.form.value);
      
    })
  }

  save() {
    if(this.form.invalid) {
      return;
    }
    iif(
      () => !this.event().id,
      this.eventService.add(this.form.value),
      this.eventService.update(this.event().id, this.form.value),
    ).subscribe({
      next: () => {
        this.messageService.add({severity: 'success', summary: 'Event saved'});
        this.onSave.emit(true);
        this.form.reset();
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'Error saving event'});
      }
    })
  }

  delete() {
    this.confirmationService.confirm({
      header: 'Êtes-vous sûr de vouloir supprimer cet événement ?',
      accept: () => {
        this.eventService.delete(this.event().id).subscribe({
          next: () => {
            this.messageService.add({severity: 'success', summary: 'Event deleted'});
            this.onSave.emit(true);
            this.form.reset();
          },
          error: () => {
            this.messageService.add({severity: 'error', summary: 'Error deleting event'});
          }
        })
      }
    })
  }



}
