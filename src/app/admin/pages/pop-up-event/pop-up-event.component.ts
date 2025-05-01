
import { DatePipe } from '@angular/common';
import { Component,effect, EventEmitter, inject, input, OnChanges, output, SimpleChanges} from '@angular/core';
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

import {ReservationModel} from '../../models/reservation.model';
import {ReservationService} from '../../services/reservation.service';
import { CommonModule } from '@angular/common';
// pour version 2 de l'affichage des inscrits : 
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-pop-up-event',
  imports: [DatePipe, Button,
    ReactiveFormsModule,
    FloatLabel,
    InputText,
    DatePicker,
    Select,
    //inscrits
    CommonModule,
    // version 2 affichage inscrits
    Card,
    Tag,],
  templateUrl: './pop-up-event.component.html',
  styleUrl: './pop-up-event.component.scss'
})
export class PopUpEventComponent implements OnChanges{

  
  private formBuilder = inject(FormBuilder);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
  private eventService = inject(EventService);

  private reservationService = inject(ReservationService);

  placeEventService = inject(PlaceEventService);

  locations: PlaceEventModel[] = []
  typeOptions = [
    { value: 'GroupSession', label: 'Cours collectif' },
    { value: 'IndividualSession', label: 'Cours individuel' },
    { value: 'SpecialEvent', label: 'Évenement spécial' },
    { value: 'Autre', label: 'Autre' },
  ];
  
  getEvent() {
     this.placeEventService.get().subscribe(data => this.locations = data); 
   }
  

  onSave = output<boolean>();
  event = input.required<EventModel>();
  form: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    description: [''],
    startDate: [new Date(), [Validators.required]],
    endDate: [new Date(), [Validators.required]],
    type: ['', [Validators.required]],
    id_PlaceEventYoga: [null, [Validators.required]],
    minSub : [10],
    maxSub : [20]
  });

  constructor() {
    this.getEvent()
  }

  // pour feature reception inscrits à cet event
  reservations: ReservationModel[] = [];
  //
  
  ngOnChanges(changes: SimpleChanges): void {
    if(!this.event()) {
      return;
    }
    //charger les insciptions
    // K : 
    // this.revervations = this.reservationsService.getByEventId(event().id) 
    this.reservationService.getByEventId(this.event().id).subscribe(data => {
      this.reservations = data;
    });


    this.form.patchValue({
      ...this.event(),
      startDate: new Date(this.event().startDate),
      endDate: new Date(this.event().endDate ?? this.event().startDate),
      id_PlaceEventYoga: this.event().id_PlaceEventYoga ?? 0
    })
    //désactiver le type pour la modif
    if(this.event().id ){
      this.form.controls["type"].disable()
    }
    else this.form.controls["type"].enable()
  }

  save() {
    if(this.form.invalid) {
      return;
    }
    iif(
      () => !this.event().id,
      this.eventService.add(this.form.value),
      this.eventService.update(this.event().id, this.form.getRawValue()),
    ).subscribe({
      next: () => {
        this.messageService.add({severity: 'success', summary: 'Evènement enregistré'});
        this.onSave.emit(true);
        this.form.reset();
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'Erreur pour l\'enregistrement de l\évènement'});
      }
    })
  }

  delete() {
    this.confirmationService.confirm({
      header: 'Êtes-vous sûr de vouloir supprimer cet événement ?',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      accept: () => {
        this.eventService.delete(this.event().id).subscribe({
          next: () => {
            this.messageService.add({severity: 'success', summary: 'Evènement supprimé'});
            this.onSave.emit(true);
            this.form.reset();
          },
          error: () => {
            this.messageService.add({severity: 'error', summary: 'Erreur dans la suppression de l\'évènement'});
          }
        })
      }
    })
  }

}
