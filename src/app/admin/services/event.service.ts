import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private httpClient = inject(HttpClient)

  get() {
    return this.httpClient.get<EventModel[]>('http://localhost:5063/api/Event');
  }

  
}
