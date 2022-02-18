import React from 'react';
import TestImage from '../Images/Test.png';
import TestSVG from '../Images/test.svg';

export default function Test() {
  return (
    <>
      <div>Test</div>
      <img src={TestImage} alt="" />

      <TestSVG />
    </>
  );
}
