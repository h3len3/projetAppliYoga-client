import { PlaceEventModel } from "./place-event.model"

export interface EventModel {
    id: number,
    title: string,
    description: string,
    startDate: string,
    endDate: string
    type : string,
    id_PlaceEventYoga: number,
    placeName : string,
    placeAddress : string
    
    
}

/* public int Id_Event { get; set; }

public string Title { get; set; } = null!;

public string Description { get; set; } = null!;

public DateTime StartDate { get; set; }

public DateTime EndDate { get; set; }

public int MaxSub { get; set; }

public int? MinSub { get; set; }

public bool Available { get; set; } */

// Relations : 

// H -> GroupSession, IndividualSession, SpecialEvent  : Fait

// many to many avec User:
//public ICollection<Reservation> Reservations { get; set; }

// many to one - FK ds Event poitant vers PlaceEventYoga:
//public int Id_PlaceEventYoga { get; set; }
//public PlaceEventYoga PlaceEventYoga { get; set; }