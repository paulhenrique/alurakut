import styled from 'styled-components';

const NavbarContainer = styled.div`
  width:100%;
  display:grid;
  height:100%;
  grid-template-columns:88px 787px 182px;
  grid-template-areas: 'logo navLinks searchBox';
  align:center;
  justify:center;
  gap:20px;
  max-width:1110px;
  margin:auto;
`;

export default NavbarContainer;