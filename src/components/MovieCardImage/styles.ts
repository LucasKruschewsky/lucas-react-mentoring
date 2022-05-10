import styled from 'styled-components';
import 'Images/NoImageFallback.png';

export const CardImage = styled.img``;

export const FallbackContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 430px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    min-height: 380px;
  }

  @media only screen and (max-width: 600px) {
    min-height: 500px;
  }

  background-image: url('images/NoImageFallback.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
