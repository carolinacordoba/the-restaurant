
import { IMenuCategory } from '../../models/IMenu';
import MenuItem from './MenuItem';


const MenuCategory = ({ title, items }: IMenuCategory) => {
    return (
        <div className='menu__category'>
            <p className='menu__category__title'>{title}</p>
            {
                items.map((item, i) => (
                    <MenuItem key={i} title={item.title} description={item.description} price={item.price} />
                ))
            }
        </div>
    )
}

export default MenuCategory