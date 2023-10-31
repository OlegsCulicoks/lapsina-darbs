import React from 'react';
import './poga.css';
import './App.css';

function Poga() {
  return (
    <div className="button-wrapper">
      <div className="middle-button-container">
        <button className="middle-button">Pieteikties īsziņai!</button>
        <div className="box">
          <label className="label-text1" htmlFor="iszina">Piesakies īsziņai!</label>
          <label className="label-text" htmlFor="course">Izvēlies kursu!</label>
          <input type="text" className="input-field" placeholder="Kurss..." />
          <label className="label-text" htmlFor="phone">Ievadi telefona nr!</label>
          <input type="text" className="input-field2" placeholder="Numurs..." />
          <div className="numura-poga">
          <button className="nr-poga">Verificē numuru!</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Poga;
