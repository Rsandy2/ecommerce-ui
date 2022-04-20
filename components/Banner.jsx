import React from "react";


const CarouselBanner = () => {
  return(
    <div className=" bg-s1">
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col">
            <h5 className="mb-4 text-4xl font-extrabold text-coffee">
              The one stop shop for all your reading needs.
            </h5>
            {/* placeholder for promo deals */}
            <p className="mb-6 text-coffee">
              Insert promotion sale thing here.... sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem totam rem aperiam, eaque ipsa quae explicabo.
            </p>
            
            {/* <hr className="mb-5 border-coffee" /> */}
          </div>
          
          {/* Rightside image */}
          <div>
            <img src="/dg_reading.svg" className=""></img>
          </div>

        </div>
      </div>
    </div>

  );
};
export default CarouselBanner;