import React, { useContext } from 'react';
import { authContext } from '../AuthContext/AuthContext';

const CartSeven = () => {
    const {thirdCount } = useContext(authContext)
    return (
        <div style={{backgroundColor:"#1e272e"}} className="card w-80 h-40  shadow-xl text-white mb-10">
    
         <div className='flex justify-center items-center my-5'>
            <div className='text-2xl mt-10'>{thirdCount}</div>
         </div>
          
       
      </div>
    );
};

export default CartSeven;