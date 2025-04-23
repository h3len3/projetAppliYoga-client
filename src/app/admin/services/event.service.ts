import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private httpClient = inject(HttpClient)

  getAll() {
    return this.httpClient.get<EventModel[]>('http://localhost:5063/api/Event');
  }

  add(event: any) {
    return this.httpClient.post<EventModel[]>('http://localhost:5063/api/Event', event);
  }

  update(id: number, event: any) {
    return this.httpClient.put<EventModel[]>(`http://localhost:5063/api/Event/${id}`, event);
  }

  delete(id: number) {
    return this.httpClient.delete<EventModel[]>(`http://localhost:5063/api/Event/${id}`);
  }


}
