export interface ILeads {
  id: number;
  customerName: string;
  customerPhone: string;
  originName: string;
  destinationName: string;
  vehicleName: string;
  guid: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  vehicleYear: number;
  price: number;
  condition: string;
  trailerType: string;
  reservationPrice: number;
  dateEstShip: Date;
  customer: number;
  vehicle: number;
  source: number;
  origin: number;
  destination: number;
}
