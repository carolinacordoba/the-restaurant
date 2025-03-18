import { IBooking, ICustomer } from "../models/interfaces";
import { ourID } from "../services/useApi";

export enum ACTIONS {
  SET_DATE = "set_date",
  SET_TIME = "set_time",
  SET_NUMBEROFGUESTS = "set_numberOfGuests",
  SET_CUSTOMER = "set_customer",
}

export const initialBooking: IBooking = {
  restaurantId: ourID,
  date: "",
  time: "",
  numberOfGuests: 0,
  customer: {
    name: "",
    lastname: "",
    email: "",
    phone: "",
  },
};

interface SetDateAction {
  type: ACTIONS.SET_DATE;
  payload: string;
}

interface SetTimeAction {
  type: ACTIONS.SET_TIME;
  payload: string;
}

interface SetNumberOfGuestsAction {
  type: ACTIONS.SET_NUMBEROFGUESTS;
  payload: number;
}

interface SetCustomerAction {
  type: ACTIONS.SET_CUSTOMER;
  payload: ICustomer;
}

export type IAction =
  | SetDateAction
  | SetTimeAction
  | SetNumberOfGuestsAction
  | SetCustomerAction;

export function bookingReducer(booking: IBooking, action: IAction): IBooking {
  switch (action.type) {
    case ACTIONS.SET_DATE:
      return { ...booking, date: action.payload };
    case ACTIONS.SET_TIME:
      return { ...booking, time: action.payload };
    case ACTIONS.SET_NUMBEROFGUESTS:
      return { ...booking, numberOfGuests: action.payload };
    case ACTIONS.SET_CUSTOMER:
      return { ...booking, customer: action.payload };

    default:
      return booking;
  }
}
