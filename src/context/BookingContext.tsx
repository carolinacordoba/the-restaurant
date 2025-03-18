import { createContext, ReactNode, useEffect, useState } from "react";
import { IBookingResponse } from "../models/interfaces";
import { getBookings } from "../services/useApi";

interface BookingContextType {
    bookings: IBookingResponse[];
    fetchBookings: () => void;
    getBookingsByDate: (date: string) => { earlyBookings: IBookingResponse[]; lateBookings: IBookingResponse[]; }
    isDateFull: (date: string) => boolean;
    isTimeFull: (date: string, time: string) => boolean;
    isTimeNearlyFull: (date: string, time: string) => boolean;
}

export const BookingContext = createContext<BookingContextType | null>(null);


export const BookingProvider = ({ children }: { children: ReactNode }) => {
    const [bookings, setBookings] = useState<IBookingResponse[]>([]);

    const fetchBookings = async () => {
        try {
            const existingBookings = await getBookings();
            setBookings(existingBookings);
        } catch (error) {
            console.log("Error fetching bookings: ", error);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, [])

    const getBookingsByDate = (date: string) => {
        const bookingsForDate = bookings.filter((booking) => booking.date === date);
        return {
            earlyBookings: bookingsForDate.filter((booking) => booking.time === "18:00"),
            lateBookings: bookingsForDate.filter((booking) => booking.time === "21:00"),
        };
    };

    const isDateFull = (date: string): boolean => {
        return (
            bookings.filter((booking) => booking.date === date).length >= 30
        )
    };

    const isTimeFull = (date: string, time: string): boolean => {
        const { earlyBookings, lateBookings } = getBookingsByDate(date);
        return (
            (time === "18:00" && earlyBookings.length >= 15) ||
            (time === "21:00" && lateBookings.length >= 15)
        )
    };

    const isTimeNearlyFull = (date: string, time: string): boolean => {
        const { earlyBookings, lateBookings } = getBookingsByDate(date);
        if (time === "18:00") return earlyBookings.length >= 10 && earlyBookings.length < 15;
        if (time === "21:00") return lateBookings.length >= 10 && lateBookings.length < 15;
        return false
    }

    return (
        <BookingContext.Provider
            value={{
                bookings,
                fetchBookings,
                getBookingsByDate,
                isDateFull,
                isTimeFull,
                isTimeNearlyFull
            }}>
            {children}
        </BookingContext.Provider>
    )
}

