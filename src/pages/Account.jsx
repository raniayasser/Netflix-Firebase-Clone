import React from "react";
import SavedShows from '../components/SavedShows';
const Account = () => {
  return (
    <>
  
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/b33e0734-9eea-4c95-8b8f-4377d55fa33e/EG-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="..."
        />
        <div className="bg-black/60  fixed left-0 top-0 w-full h-[550px]"></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
      <SavedShows />

      </div>
     
    </>
  );
};

export default Account;
