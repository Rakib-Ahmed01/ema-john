import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <header className="bg-black text-white pl-7 pr-2 py-2">
      <nav className="flex justify-between items-center w-full">
        <img src={logo} alt="" />
        <ul className="flex justify-center items-center gap-5 font-medium flex-wrap">
          <li className=" hover:text-orange-500">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className=" hover:text-orange-500">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className=" hover:text-orange-500">
            <NavLink to="/order-review">Order Review</NavLink>
          </li>
          <li className=" hover:text-orange-500">
            <NavLink to="/inventory">Inventory</NavLink>
          </li>
          <li className=" hover:text-orange-500">
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
