import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EventModel } from '../../admin/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private httpClient = inject(HttpClient)

  getAll() {
    return this.httpClient.get<EventModel[]>('http://localhost:5063/api/Event');
  }

  private apiUrl = 'http://localhost:5063/api/Event/Booking'; 
  register(id: number, email: string) {
    return this.httpClient.post(this.apiUrl + '/' + id, { email });
  }


}