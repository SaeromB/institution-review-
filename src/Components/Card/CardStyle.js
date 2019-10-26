import styled from 'styled-components';
import React from 'react';
import star from '../Image/Star/star.svg'

export const CardContainer = styled.div`
  margin: 2rem;
  padding: 3rem 2rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  user-select: none;

  @media only screen and (min-width: 960px){
    display: flex;
    flex-direction: row;
    padding: 2rem;
  }
`;

export const Wrapper = styled.div`
  margin-top: 5px;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  
  @media screen and (min-width: 700px) {
  flex-direction: column;
  flex: 1;
  }
`
export const DoubleColumn = styled.div`
  flex: 2;

  @media screen and (min-width: 700px) {
    flex: 2;
  }
`

export const LogoImage = styled.div`
  img { 
  display: flex;
  vertical-align: middle;
  height: 4rem;
  width: 4rem;
 }

 @media only screen and (min-width: 700px) {
   vertical-align: middle;
   flex: 1;
   /* margin-bottom: 0;
   margin-left: 1.5rem; */
 }
`;

export const HogwonName = styled.div`
  font-size: 1.2rem;
  font-weight: 700;

 @media only screen and (min-width: 700px) {
  font-size: 1.2rem;
  font-weight: 700;
 }
`;

export const HogwonHashtag = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
 @media only screen and (min-width: 700px) {
  font-size: 1.2rem;
  font-weight: 400;
  }
`;

export const Bottom = styled.div`
`;

export const Rating = styled.div`
  svg {
    vertical-align: middle;
    margin-bottom: 0.3rem;  
  }
  span {
    vertical-align: middle;
    font-size: 1.4rem;
    font-weight: 700;
    color: #999;
  }

  span:first-child {
    color: #333;
    margin-right: 0.5rem;
  }
`;

