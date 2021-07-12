import React from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';

import Link from '../Link';
import StyledNavbar from '../StyledNavbar';
import NavbarContainer from '../NavbarContainer';
import NavLinks from '../NavLinks';
import ContainerNavs from '../ContainerNavs';
import Input from '../Input';

import NavAccess from '../NavAccess';
import LinkEmail from '../LinkEmail';
import SearchBox from '../SearchBox';
import ContainerImage from '../ContainerImage';

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
