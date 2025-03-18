import { Dispatch, useState } from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { ACTIONS } from "../../reducer/bookingReducer";
import { Value } from "react-calendar/src/shared/types.js";
import { useBookingContext } from "../../hooks/useBookingContext";
import { Link } from "react-router-dom";

interface DatePickerProps {
    dispatch: Dispatch<any>;
    handleNextPageNumber: () => void;
}

const DatePicker = ({ dispatch, handleNextPageNumber }: DatePickerProps) => {
    const [date, setDate] = useState<Value>(new Date());
    const [isTimeBeforeFivePM, setIsTimeBeforeFivePM] = useState(true);
    const { isDateFull } = useBookingContext();
    if (new Date().getHours() > 17) setIsTimeBeforeFivePM(false);



    const handleDatePicked = (
    ) => {
        const newDate = new Date(date!.toString())

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        yesterday.setHours(0, 0, 0, 0);

        if (newDate <= yesterday) {
            return alert("Du kan inte välja gårdagens datum eller ett tidigare!");
        }
        if (!isTimeBeforeFivePM) return alert("För sent att boka dagens datum!");

        const formattedDate = newDate.toLocaleDateString();
        if (isDateFull(formattedDate)) return alert("Denna dagen är fullbokad");

        dispatch({ type: ACTIONS.SET_DATE, payload: formattedDate })
        handleNextPageNumber();
    }


    return (
        <div className='date-picker child-grid-four'>
            <div className="date-picker__top">
                <p className="date-picker__top__info">
                    Välkommen hem till smakerna av Colombia. <br />
                    Boka ditt bord och njut av en kväll med god mat och gott sällskap!
                </p>
                <p className="date-picker__top__small-info">Vid Större sällskap än 6 kontakta oss <Link to={"/kontakt"}>här</Link></p>
                {!isDateFull(new Date().toLocaleDateString()) && isTimeBeforeFivePM && (<p className="date-picker__top__small-info">Vi har fortfarande lediga bord idag, vill du boka det? Kontakta oss <Link to={"/kontakt"}>här</Link></p>)}
            </div>
            <Calendar onChange={setDate} value={date} />
            <button className="date-picker__btn" onClick={handleDatePicked}>Bekräfta Datumet</button>
        </div>
    )
}

export default DatePicker