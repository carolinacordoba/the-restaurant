export interface ICustomer {
  name: string;
  lastname: string;
  email: string;
  phone: string;
}

export interface IBooking {
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customer: ICustomer;
}

export interface IBookingResponse {
  _id: string;
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customer?: ICustomerResponse[];
  customerId: string;
}

export interface IBookingUpdate {
  id: string;
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customerId: string;
}

export interface ICustomerResponse {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  _id?: string;
}
