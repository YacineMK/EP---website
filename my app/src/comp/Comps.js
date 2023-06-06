import React from 'react';
import './Style2.css';
import sec from '../Imges/tic.png';
import check from '../Imges/checked.png';
import sec2 from '../Imges/Data_security_03-removebg-preview.png';

function Main() {
  const handleFileUpload = () => {
    console.log('File uploaded!');
  };

  return (
    <div>
      <div className="mains">
        <div className='txt'>
          <h2 className='ui'>Let's experience Security</h2>
          <p className='p1'>To sell a product, you need the best product landing pages. These landing page templates will improve your conversions and generate more sales.</p>
        </div>
        <img className='im2' src={sec} alt='security' />
      </div>
      <div className='part3'>
         <img className='removebg' src={sec2} alt="0" />
        <div className='tet2'>
          <h2 className='ui2'>Let's experience Security</h2>
          <p>To sell a product, you need the best product landing page without this dude messing up.</p>
          <ul className='mylist'>
            <li> <img src={check} alt='1' /> These landing page templates will</li>
            <li> <img src={check} alt='1' /> These landing page templates will</li>
            <li> <img src={check} alt='1' /> These landing page templates will</li>
          </ul>
        </div>
      </div>
      <div className='scano'>
      <div className='miniscan'>
      <h2>L'ets scan</h2>
      <p> youjust need to yplode your CSV file</p>
      <div className="file-button">
        <label htmlFor="file-input" className="scan-label">
          Scan Your Network
          <input type="file" id="file-input" onChange={handleFileUpload} className="file-input" />
        </label>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
