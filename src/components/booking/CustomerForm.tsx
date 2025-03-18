import { ChangeEvent, Dispatch, FormEvent, useState } from 'react'
import { IBooking, ICustomer } from '../../models/interfaces';
import { ACTIONS } from '../../reducer/bookingReducer';
import { createBooking } from '../../services/useApi';


interface CustomerFormProps {
  booking: IBooking;
  dispatch: Dispatch<any>;
  handleNextPageNumber: () => void;
}

const CustomerForm = ({
  booking,
  dispatch,
  handleNextPageNumber,
}: CustomerFormProps) => {
  const [customer, setCustomer] = useState<ICustomer>({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmiting] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.SET_CUSTOMER, payload: customer });

    setIsSubmiting(true);
    try {
      await createBooking(booking);
      handleNextPageNumber();
    } catch (error) {
      console.log("Booking creation failed", error);
    } finally {
      setIsSubmiting(false);
    }
  };

  return (
    <div className='customer-form child-grid-four'>

      <div className='customer-form__top'>
        {booking.time === "18:00" ? (
          <p className='customer-form__top__title'>Tidig middag</p>
        ) : (
          <p className='customer-form__top__title'>Sen middag</p>
        )}
        <div className='customer-form__top__info'>
          <p className='customer-form__top__info__data'>{booking.date}</p>
          {booking.time === "18:00" ? (
            <p className='customer-form__top__info__data'>{booking.time} - 21:00</p>
          ) : (
            <p className='customer-form__top__info__data'>{booking.time} - 23:00</p>
          )}
          <p className='customer-form__top__info__data last'>{booking.numberOfGuests} {booking.numberOfGuests > 1 ? ("gäster") : ("gäst")}</p>
        </div>
      </div>

      <form className='customer-form__form' onSubmit={handleFormSubmit} >
        <p className='customer-form__form__title'>Kontaktuppgifter</p>
        <div className='customer-form__form__top'>
          <input
            className='customer-form__form__top__input'
            type="text"
            name='name'
            id='name'
            placeholder='Förnamn'
            value={customer.name}
            onChange={handleInputChange}
            required
          />
          <input
            className='customer-form__form__top__input'
            type="text"
            name='lastname'
            id='lastname'
            placeholder='Efternamn'
            value={customer.lastname}
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          className='customer-form__form__input'
          type="tel"
          name="phone"
          id='phone'
          placeholder='Mobiltelefon'
          value={customer.phone}
          onChange={handleInputChange}
          required
        />
        <input
          className='customer-form__form__input'
          type="email"
          name="email"
          id='email'
          placeholder='Epostadress'
          value={customer.email}
          onChange={handleInputChange}
          required
        />
        <div className='customer-form__form__bottom'>
          <input type="checkbox" name="GDPR" className='customer-form__form__bottom__checkbox' required />
          <p className='customer-form__form__bottom__text'>Jag godkänner att mina uppgifter lagras och behandlas enligt Dos CaMatheo integritetspolicy</p>
        </div>
        <button type='submit' className='customer-form__form__btn' disabled={isSubmitting}>
          {isSubmitting ? "Behandlar..." : "Boka bord"}
        </button>
      </form>
    </div>
  )
}

export default CustomerForm;
