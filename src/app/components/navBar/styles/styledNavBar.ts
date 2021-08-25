import styled from "styled-components";
import logo from '../../../../assest/img/logo.png'

export const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #339292;

  .logo {
    width: 50px;
    height: 50px;
    background-image: url(".${logo}");
    background-size: cover;
  }

  .authWrapper {
    display: flex;
  }
`