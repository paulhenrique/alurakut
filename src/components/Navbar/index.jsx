import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import logo from '../../assets/logo.png';

const StyledNavbar = styled.nav`
width:100%;
background:#5C9ECF;
color:white;
height:48px;
`;

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

const NavLinks = styled.ul`
  list-style:none;
  display:flex;
  align-items:center;
  gap:10px;
`;

const ContainerNavs = styled.div`
  display:flex;
  justify-content:space-between;
`;

const NavAccess = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`;

const LinkEmail = styled.a`
color: hsla(215, 41%, 31%, 1);
font-size:14px;
font-weight:700;
`;


const Input = (props) => {
  const StyledInput = styled.input`
  background:#5579A1;
  color:white;
  border:none;
  height:34px;
  border-radius:34px;
  ::placeholder{
    color:white;
  }
  `;
  return (
    <StyledInput type="text" {...props} />
  );
}

const SearchBox = styled.div`
display:flex;
align-items:center;
`;

const Link = (props) => {
  const StyledLink = styled.a`
  color:white;
  text-decoration:none;
  font-size:12px;
  margin-left:10px;
  &:before{
    content:'|';
    margin-right:10px;
    color:#5292C1;
  }
  `;

  return (
    <li style={{ listStyle: 'none' }}>
      <StyledLink {...props} >{props.children}</StyledLink>
    </li >
  );
}

const ContainerImage = styled.span`
  display:flex;
  flex-direction:column;
  justify-content:center;
  grid-area:'logo';
`;

function Navbar() {
  const paths = [
    { path: 'home', name: 'Início' },
    { path: 'home', name: 'Perfil' },
    { path: 'home', name: 'Página de recados' },
    { path: 'home', name: 'Amigos' },
    { path: 'home', name: 'Comunidades' }
  ];


  return (
    <StyledNavbar>
      <NavbarContainer>
        <ContainerImage>
          <Image style={{ maxWidth: '10px' }} src={logo} alt="Logo Alurakut" />
        </ContainerImage>
        <ContainerNavs>
          <NavLinks>
            {paths.map((e, i) => (
              <Link href={e.path} key={i}>
                {e.name}
              </Link>
            ))}
          </NavLinks>
          <NavAccess>
            <LinkEmail>
              phvcandido@gmail.com
            </LinkEmail>
            <Link>Sair</Link>
          </NavAccess>
        </ContainerNavs>
        <SearchBox>
          <Input placeholder="Pesquisar no Orkut" />
        </SearchBox>
      </NavbarContainer>
    </StyledNavbar>
  )
}

export default Navbar
