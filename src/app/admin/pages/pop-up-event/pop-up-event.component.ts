
import { DatePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { PlaceEventService } from '../../services/place-event.service';
import { PlaceEventModel } from '../../models/place-event.model';

@Component({
  selector: 'app-pop-up-event',
  imports: [DatePipe],
  templateUrl: './pop-up-event.component.html',
  styleUrl: './pop-up-event.component.scss'
})
export class PopUpEventComponent {
  placeEventService = inject(PlaceEventService);
  date = input<Date|null>()
  locations: PlaceEventModel[] = []
  constructor() {
    this.placeEventService.get().subscribe(data => this.locations = data);
  }
}
