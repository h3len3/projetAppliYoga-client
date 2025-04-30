import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ReservationModel } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private httpClient = inject(HttpClient)
  
  getByEventId(eventId: number) {
    return this.httpClient.get<ReservationModel[]>(`http://localhost:5063/api/Reservation`, { params: { eventId } });
  }
  
}