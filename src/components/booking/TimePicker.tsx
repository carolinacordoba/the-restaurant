import { Dispatch } from 'react'
import { IBooking } from '../../models/interfaces'
import { ACTIONS } from '../../reducer/bookingReducer';
import { useBookingContext } from '../../hooks/useBookingContext';




interface TimePickerProps {
    booking: IBooking;
    dispatch: Dispatch<any>;
    handleNextPageNumber: () => void;
}

const TimePicker = ({ booking, dispatch, handleNextPageNumber }: TimePickerProps) => {
    const { getBookingsByDate, isTimeFull, isTimeNearlyFull } = useBookingContext();
    const { earlyBookings, lateBookings } = getBookingsByDate(booking.date);


    const handleTimePicked = (time: string) => {
        if (time === "EARLY" && !isTimeFull(booking.date, "18:00")) {
            dispatch({
                type: ACTIONS.SET_TIME,
                payload: "18:00"
            })
            handleNextPageNumber();
        } else if (time === "LATE" && !isTimeFull(booking.date, "21:00")) {
            dispatch({
                type: ACTIONS.SET_TIME,
                payload: "21:00"
            })
            handleNextPageNumber();
        }
    }

    return (
        <div className='time-picker child-grid-four'>
            <div className='time-picker__holder'>
                <p className='time-picker__holder__title'>Välj tid</p>
                <p className='time-picker__holder__date'>{booking.date}</p>
            </div>
            <div className='time-picker__bottom'>
                <div className={`time-picker__bottom__btn ${isTimeFull(booking.date, "18:00") && "full"}`}
                    onClick={() =>
                        !isTimeFull(booking.date, "18:00") && handleTimePicked("EARLY")
                    }
                >
                    <p className='time-picker__bottom__btn__title'>Tidig middag</p>
                    <p className='time-picker__bottom__btn__time'>
                        18:00 - 21:00 {isTimeNearlyFull(booking.date, "18:00") && !isTimeFull(booking.date, "18:00") &&
                            `${15 - earlyBookings.length} / 15 bord lediga`}
                        {isTimeFull(booking.date, "18:00") && "Fullbokad"}
                    </p>
                </div>
                <div className={`time-picker__bottom__btn ${isTimeFull(booking.date, "21:00") && "full"}`}
                    onClick={() =>
                        !isTimeFull(booking.date, "21:00") && handleTimePicked("LATE")
                    }
                >
                    <p className='time-picker__bottom__btn__title'>Sen middag</p>
                    <p className='time-picker__bottom__btn__time'>
                        21:00 - 23:00 {isTimeNearlyFull(booking.date, "21:00") && !isTimeFull(booking.date, "21:00") &&
                            `${15 - lateBookings.length} / 15 bord lediga`}
                        {isTimeFull(booking.date, "21:00") && "Fullbokad"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TimePicker