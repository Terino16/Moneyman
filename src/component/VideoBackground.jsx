import React from 'react';
import Lved from '../Assets/Bit Bot-1.mp4'

const VideoBackground = () => {
  return (
    <video autoPlay loop muted className='w-[600px]'>
      <source src={Lved} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;