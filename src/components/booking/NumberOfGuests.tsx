import { Dispatch } from 'react'
import { IBooking } from '../../models/interfaces';
import { ACTIONS } from '../../reducer/bookingReducer';

interface NumberOfGuestsProps {
    booking: IBooking;
    dispatch: Dispatch<any>;
    handleNextPageNumber: () => void;
}

interface INumberOfGuests {
    amount: number;
    title: string;
}
const listOfNumberOfGuests: INumberOfGuests[] = [
    {
        amount: 1,
        title: "gäst",
    },
    {
        amount: 2,
        title: "gäster",
    },
    {
        amount: 3,
        title: "gäster",
    },
    {
        amount: 4,
        title: "gäster",
    },
    {
        amount: 5,
        title: "gäster",
    },
    {
        amount: 6,
        title: "gäster",
    },


]

const NumberOfGuests = ({ booking, dispatch, handleNextPageNumber }: NumberOfGuestsProps) => {

    const handleNumberOfGuests = (amount: number) => {
        dispatch(
            {
                type: ACTIONS.SET_NUMBEROFGUESTS,
                payload: amount
            }
        );
        handleNextPageNumber();
    }

    return (
        <div className='number-of-guests  child-grid-four'>
            <div className='number-of-guests__top'>
                {booking.time === "18:00" ? (
                    <p className='number-of-guests__top__title'>Tidig middag</p>
                ) : (
                    <p className='number-of-guests__top__title'>Sen middag</p>
                )}
                <div className='number-of-guests__top__info'>
                    <p className='number-of-guests__top__info__data first'>{booking.date}</p>
                    {booking.time === "18:00" ? (
                        <p className='number-of-guests__top__info__data'>{booking.time} - 21:00</p>
                    ) : (
                        <p className='number-of-guests__top__info__data'>{booking.time} - 23:00</p>
                    )}
                </div>
            </div>
            <div className='number-of-guests__bottom'>
                <p className='number-of-guests__bottom__title'>Välj antal gäster</p>
                {listOfNumberOfGuests.map((guestAmount) => (
                    <div className='number-of-guests__bottom__amount-card' key={guestAmount.amount} onClick={() => handleNumberOfGuests(guestAmount.amount)}>
                        <p className='number-of-guests__bottom__amount-card__amount'>{guestAmount.amount}</p>
                        <p className='number-of-guests__bottom__amount-card__text'>{guestAmount.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NumberOfGuests