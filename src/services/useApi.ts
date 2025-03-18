import axios from "axios";
import {
  IBooking,
  IBookingResponse,
  IBookingUpdate,
  ICustomer,
} from "../models/interfaces";

const baseUrl = "https://school-restaurant-api.azurewebsites.net";
export const ourID = "67ab4b1a6c6da27544081a52";

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
});

const apiRequest = async <T>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  data?: any
): Promise<T> => {
  try {
    const response = await apiClient({ method, url, data });
    return response.data;
  } catch (error) {
    console.error(`Error in ${method.toUpperCase()} ${url}:`, error);
    throw error;
  }
};

// Booking API calls
export const getBookings = () =>
  apiRequest<IBookingResponse[]>(`get`, `/booking/restaurant/${ourID}`);

export const createBooking = (booking: IBooking) =>
  apiRequest<IBooking>(`post`, `/booking/create`, booking);

export const getBooking = (bookingId: string) =>
  apiRequest<IBooking>(`get`, `/booking/${bookingId}`);

export const updateBooking = (
  bookingId: string,
  updatedBooking: IBookingUpdate
) =>
  apiRequest<IBookingUpdate>(
    `put`,
    `/booking/update/${bookingId}`,
    updatedBooking
  );

export const deleteBooking = (bookingId: string) =>
  apiRequest<void>(`delete`, `/booking/delete/${bookingId}`);

// Customer API calls
export const getCustomer = (customerId: string) =>
  apiRequest<ICustomer[]>(`get`, `/customer/${customerId}`);

export const updateCustomer = (
  customerId: string,
  updatedCustomer: ICustomer
) =>
  apiRequest<ICustomer>(
    `put`,
    `/customer/update/${customerId}`,
    updatedCustomer
  );
