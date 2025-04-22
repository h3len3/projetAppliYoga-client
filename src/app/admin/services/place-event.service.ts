import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EventModel } from '../models/event.model';
import { PlaceEventModel } from '../models/place-event.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceEventService {

  private httpClient = inject(HttpClient)

  get() {
    return this.httpClient.get<PlaceEventModel[]>('http://localhost:5063/api/PlaceEventYoga');
  }
}
