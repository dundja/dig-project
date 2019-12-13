import React from 'react';
import styled, { keyframes } from 'styled-components';

const motion = props => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const DualRingSpinner = styled.div`
  display: inline-block;
  width: ${p => `${p.width}${p.sizeUnit}`};
  height: ${p => `${p.height}${p.sizeUnit}`};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  :after {
    content: ' ';
    display: block;
    width: ${p => `${p.size}${p.sizeUnit}`};
    height: ${p => `${p.size}${p.sizeUnit}`};
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${p => p.color};
    border-color: ${p => p.color} transparent ${p => p.color} transparent;
    animation: ${p => motion(p)} 1.2s linear infinite;
  }
`;

const Loader = ({
  color = '#34364A',
  size = 46,
  sizeUnit = 'px',
  width = 64,
  height = 64
}) => (
  <DualRingSpinner
    color={color}
    size={size}
    sizeUnit={sizeUnit}
    width={width}
    height={height}
  />
);

export default Loader;
