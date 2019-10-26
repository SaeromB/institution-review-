import styled from 'styled-components';

export const HwHeader = styled.div`
  background: #F2C94C;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  width: 100%;
  height: 100%;
  margin: 100%;
`;

export const Container = styled.div`
  padding: 0 ;
  margin: 0 ;
  height: 6rem;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 960px) {
    max-width: 100.4rem;
    margin: 0;
    padding: 0;
  }
`;

export const SchoolLogo = styled.div`
  img {
    width: 2.5rem;
    height: 2.5rem;
    margin: 1.5rem;
  }
`;


export const Title = styled.p`
  display: absolute;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 800;
  padding: 10px;
  color: #333;
  text-decoration: unset;
`