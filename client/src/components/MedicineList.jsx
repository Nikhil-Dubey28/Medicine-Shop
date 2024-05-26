import React, { useContext } from 'react';
import { MedicineContext } from '../context/MedicineContext';
import { CartContext } from '../context/CartContext';

const MedicineList = () => {
  const { medicines } = useContext(MedicineContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-4">
      {medicines.length === 0 ? (
        <p>No medicine added</p>
      ) : (
        medicines.map((medicine, index) => (
          <div key={index} className="border p-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">{medicine.name}</h2>
              <p>{medicine.description}</p>
              <p>${medicine.price}</p>
              <p>Quantity: {medicine.quantity}</p>
            </div>
            <button
              className="bg-green-600 text-white p-2"
              onClick={() => addToCart(index)}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MedicineList;
