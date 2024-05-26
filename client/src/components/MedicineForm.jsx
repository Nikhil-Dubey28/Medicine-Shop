import React, { useState, useContext } from 'react';
import { MedicineContext } from '../context/MedicineContext';

const MedicineForm = () => {
  const [medicine, setMedicine] = useState({ name: '', description: '', price: '', quantity: '' });
  const { addMedicine } = useContext(MedicineContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicine(medicine);
    setMedicine({ name: '', description: '', price: '', quantity: '' });
  };

  return (
    <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
      <input className="border p-2" name="name" value={medicine.name} onChange={handleChange} placeholder="Medicine Name" />
      <input className="border p-2" name="description" value={medicine.description} onChange={handleChange} placeholder="Description" />
      <input className="border p-2" name="price" value={medicine.price} onChange={handleChange} placeholder="Price" />
      <input className="border p-2" name="quantity" value={medicine.quantity} onChange={handleChange} placeholder="Quantity" />
      <button type="submit" className="bg-blue-600 text-white p-2">ADD</button>
    </form>
  );
};

export default MedicineForm;
