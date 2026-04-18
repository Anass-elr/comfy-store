import React,{ useEffect } from 'react'
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { NavLinks } from './index';

const themes = {
  light: 'light',
  dark: 'dark',
};

const getThemeFromLocalStorage= () => {
  return  localStorage.getItem('theme') || themes.light;  
}

const NavBar = () => {
  const [theme, setTheme] = React.useState(getThemeFromLocalStorage()); 

  const handleTheme = () => {
    const { light, dark } = themes;  
    const newTheme = theme === light ? dark : light;
    setTheme(newTheme);
  }

  useEffect(()=>{
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  },[theme]);



  return (
    <nav className='bg-base-200'>
      <div className="navbar align-element">
        <div className="navbar-start">
           <NavLink to='/' className="hidden lg:flex btn btn-primary
            text-3xl item-center">C</NavLink>

            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <FaBarsStaggered className='text-2xl' />
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content
               mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <NavLinks />
              </ul>
            </div>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal bg-base-200 '>
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on text-2xl" />
            <BsMoonFill className="swap-off text-2xl" />
          </label>

          <NavLink to='/cart' className="btn btn-ghost">
           <div className="indicator">
            <BsCart3 className='text-2xl' />
            <span className="badge badge-sm badge-primary indicator-item">8</span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar
