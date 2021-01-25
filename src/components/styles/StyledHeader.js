import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;
  height: 8vh;

  .header-content {
    display: flex;
    justify-content: space-between;
    max-width: 1280px;
    min-height: 120px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

export const StyledLogo = styled.img`
  margin-top: 1vh;
  height: 6vh;
`;

export const StyledOscar = styled.img`
  margin-top: 1.8vh;
  height: 5vh;
`;
