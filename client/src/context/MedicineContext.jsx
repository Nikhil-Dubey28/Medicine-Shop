import React, { createContext, useState, useEffect } from 'react';

export const MedicineContext = createContext();

const MedicineProvider = ({ children }) => {
  const [medicines, setMedicines] = useState(() => {
    const savedMedicines = localStorage.getItem('medicines');
    return savedMedicines ? JSON.parse(savedMedicines) : [];
  });

  useEffect(() => {
    localStorage.setItem('medicines', JSON.stringify(medicines));
  }, [medicines]);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, { ...medicine, quantity: parseInt(medicine.quantity, 10) }]);
  };

  return (
    <MedicineContext.Provider value={{ medicines, setMedicines, addMedicine }}>
      {children}
    </MedicineContext.Provider>
  );
};

export default MedicineProvider;
