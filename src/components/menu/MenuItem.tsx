
import { IMenuItem } from '../../models/IMenu'



const MenuItem = ({ title, description, price }: IMenuItem) => {
    return (
        <div className='menu__category__item'>
            <div className='menu__category__item__left'>
                <p className='menu__category__item__left__title'>{title}</p>
                <p className='menu__category__item__left__desc'>{description}</p>
            </div>
            <p className='menu__category__item__price'>{price}</p>
        </div>
    )
}

export default MenuItem