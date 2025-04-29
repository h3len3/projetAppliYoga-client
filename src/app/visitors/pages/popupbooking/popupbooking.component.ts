import { Component,effect, EventEmitter, inject, input, OnChanges, output, SimpleChanges } from '@angular/core';

import { DatePipe } from '@angular/common';

import { PlaceEventService } from '../../../admin/services/place-event.service';
import { PlaceEventModel } from '../../../admin/models/place-event.model';

import {EventModel} from '../../../admin/models/event.model';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ConfirmationService, MessageService} from 'primeng/api';
import {BookingService} from '../../services/booking.service';
import {iif} from 'rxjs';
import {Button} from 'primeng/button';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {DatePicker} from 'primeng/datepicker';
import {Select} from 'primeng/select';

//
import { Input, Output } from '@angular/core';
//import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
//import { Button } from 'primeng/button';
//import { FloatLabel } from 'primeng/floatlabel';
//import { InputText } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';


@Component({
  selector: 'app-popupbooking',
  imports: [CommonModule, ReactiveFormsModule, Button, FloatLabel, InputText, DialogModule, FormsModule],
  templateUrl: './popupbooking.component.html',
  styleUrl: './popupbooking.component.scss',
  standalone: true  
})

export class PopupbookingComponent {

  event = input<EventModel>();
  showEmailInput = false;
  popupVisible = true;
  email = '';

  submitted = false;

  onYesClick() {
    this.showEmailInput = true;
  }
   onNoClick() {
    this.popupVisible = false;
  }

  onSubmit() {
    //if (this.email.trim()) 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.email.trim() && emailRegex.test(this.email)) {
  // si le champ email n'est pas vide et que il correspond à format mail valide
     
      // on peux aussi appeler BookingService ici
      // this.bookingService.register(this.email).subscribe(...);
  
      this.submitted = true;
      // Optionnel : masquer complètement la pop-up après quelques secondes
      // setTimeout(() => this.popupVisible = false, 5000);
    }
  }

}