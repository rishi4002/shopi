import react, { use, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Productlist from './Productlist';
import Detailcard from './Detailcard';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Cart from './Cart';



function App() {


  return(
    <div className='w-screen h-screen bg-gray-200 flex flex-col'>
      <Navbar/>
      <div className='flex grow overflow-y-scroll justify-center pb-20 relative'>
        
        <Routes>
          <Route index path="/" element={<Productlist />} />
          <Route path='/product/:id' element={<Detailcard />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        
      </div>
      <Footer/>
    </div>

  );
}

export default App;
