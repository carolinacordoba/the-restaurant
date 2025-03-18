import { menuData } from "../data/menuData";
import MenuCategory from "../components/menu/MenuCategory";
import "../styles/menu.scss";

const MenuPage = () => {
  return (
    <>
      <div className="menu">
        <div className="menu__cat__container">
          <div className="menu__categories">
            {menuData.map((category, i) => (
              <MenuCategory
                key={i}
                title={category.title}
                items={category.items}
              />
            ))}
          </div>
          <div className="menu_banner">
            <img src="/public/El Menú.png" alt="menu-banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
