import {FaRegStar, FaStar} from 'react-icons/fa';
import React from 'react';

const StarRating = () => {

    const stars = [1,2,3,4,5];
    const [currentIndex, setCurrentIndex] = React.useState(0)

  return (
    <div className='flex'>
        {stars.map((star, index)=>{
                return (
                    <div key={index} className='cursor-pointer'>
                        {currentIndex >= star ? (
                            <div>
                             <FaStar
                             onMouseEnter={()=>{
                                if(currentIndex == star){
                                    setCurrentIndex(0);
                                }
                                else{
                                 setCurrentIndex(star);
                                }                              
                             }}
                             onClick={()=>{
                                if(currentIndex == star){
                                    setCurrentIndex(0);
                                }
                                else{
                                 setCurrentIndex(star);
                                }
                             }}
                              />
                              </div>
                        ) : (
                            <div>
                            <FaRegStar
                            onMouseEnter={()=>{
                                if(currentIndex == star){
                                    setCurrentIndex(0);
                                }
                                else{
                                 setCurrentIndex(star);
                                }
                             }}
                            onClick={()=>{
                                if(currentIndex == star){
                                    setCurrentIndex(0);
                                }
                                else{
                                 setCurrentIndex(star);
                                }
                            }}
                             />
                             </div>
                        )}
               
                </div>
                );
            })}
    </div>
  )
}

export default StarRating