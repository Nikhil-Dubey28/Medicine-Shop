import React from 'react';
import Navbar from './components/Navbar';
import MedicineForm from './components/MedicineForm';
import MedicineList from './components/MedicineList';
import MedicineProvider from './context/MedicineContext';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <MedicineProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <div className="container mx-auto p-4">
            <MedicineForm />
            <MedicineList />
          </div>
        </div>
      </CartProvider>
    </MedicineProvider>
  );
};

export default App;
