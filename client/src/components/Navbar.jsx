import React , {useContext}from 'react'
import { CartContext } from '../context/CartContext';

const Navbar = () => {

    const { cartCount } = useContext(CartContext);

    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
          <h1 className="text-2xl font-bold">Medicine Shop</h1>
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l1.8-8H6.2M16 21a2 2 0 11-4 0m8-4H6" />
            </svg>
            <span className="absolute top-0 right-0 bg-red-600 rounded-full w-4 h-4 text-xs flex items-center justify-center">{cartCount}</span>
          </div>
        </nav>
      );
  
}

export default Navbar