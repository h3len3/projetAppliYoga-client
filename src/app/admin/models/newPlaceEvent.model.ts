import { AddressModel } from './address.model';

export interface NewPlaceEventModel {
  name: string;
  address: AddressModel;
}