import { EventModel } from "./event.model";

export interface ReservationModel {
    id_event: number,
    id_user : number,
    user: any,
    event: EventModel
}

