import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'; // Import jspdf library

const Test = () => {

  const handleDownloadPDF = () => {
    
  };

  return (
    <div className='space-y-5'>
      <h1 className='text-center font-bold text-3xl'>Arabic Text</h1>
      <ul id='image-download' className='font-black text-2xl'>
        <li>
        اربك
        </li>
        <li>
         تكست
        </li>
        <li>
          هو
        </li>
        <li>
           اول
        </li>
        <li>
        موقع
        </li>
        <li>
         يسمح
        </li>
        <li>
         لزواره
        </li>
       <li>স্বাগতম</li>
       <li>লিপিঘরে</li>
       <li>ফাউন্ড্রি</li>
       <li>পর্যন্ত</li>
        <li>
         يسمح
        </li>
        <li>
         لزواره
        </li>
       <li>স্বাগতম</li>
       <li>লিপিঘরে</li>
       <li>ফাউন্ড্রি</li>
       <li>পর্যন্ত</li>
        <li>
         يسمح
        </li>
        <li>
         لزواره
        </li>
       <li>স্বাগতম</li>
       <li>লিপিঘরে</li>
       <li>ফাউন্ড্রি</li>
       <li>পর্যন্ত</li>
       <li>.</li>
       <li>.</li>
      </ul>

      <button className='bg-black text-white font-bold px-3 py-3 rounded-lg' onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};

export default Test;
