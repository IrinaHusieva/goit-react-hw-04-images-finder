import React from 'react';
import { Circles } from 'react-loader-spinner';
import styled from "./Loader.module.css"

const Loader = () => {
  return (
    <div>
      <Circles
            height="80"
            width="80"
        color="#0d2d8c"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass={styled.loader}
        visible={true}
      />
      </div>
  );
};

export default Loader;