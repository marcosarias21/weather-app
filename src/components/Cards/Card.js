import React from 'react';
import './estilo.css';

const Card = (citiesData, places, captureCity) => {
  console.log(citiesData);
  console.log(places);
  console.log(captureCity);
  return (
   <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
      { !citiesData?.loading
        && <div className="row d-flex justify-content-center px-3">
              <div className="card" data-testid="testId">
              {/* {citiesData?.map(() => (<h5 key={citiesData?.id}>{citiesData?.name}</h5>))} */}
                {/* <li key={citiesData.id}>Ciudad:{citiesData?.data[0]?.name}</li> */}

              </div>
    </div>
}
</div>
  );
};

export default Card;
