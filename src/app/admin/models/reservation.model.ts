import { EventModel } from "./event.model";

export interface ReservationModel {
    // K: 
    // id_event: number,
    // id_user : number,
    // user: any,
    // event: EventModel
    
  id_event: number;
  id_user: number;
  email: string;
  dateReservation: string; // les DateTime en C# arrivent comme string JSON
  paymentModeId: number;
  payed: boolean;
}

	
// Response body
// Download

// [
//   {
//     "id_Event": 2,
//     "id_User": 17,
//     "email": "toto@gmail.com",
//     "dateReservation": "0001-01-01T00:00:00",
//     "paymentModeId": 1,
//     "payed": false
//   }
// ]
