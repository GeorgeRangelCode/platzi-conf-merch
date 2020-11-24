import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import '../styles/components/Success.css';

const Ssuccess = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <div className="Ssuccess">
      <div className="Ssuccess-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Ssuccess-map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Ssuccess;
