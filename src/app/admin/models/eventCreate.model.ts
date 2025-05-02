// models/event-create.model.ts
import { NewPlaceEventModel } from './newPlaceEvent.model';

export interface EventCreateModel {
  title: string;
  description: string;
  startDate: string; // ou Date, mais string fonctionne mieux avec JSON
  endDate: string;
  type: string;
  maxSub: number;
  minSub: number;
  id_PlaceEventYoga?: number; // si lieu existant
  newPlaceEventYoga?: NewPlaceEventModel; // si nouveau lieu
}
