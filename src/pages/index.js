import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Container from '../components/Container';

const Box = styled.div`
  background:#ffffff;
`;

const Main = styled.main`
  display:grid;
  grid-gap:10px;
  padding:16px;
  @media(min-width:860px){
    grid-template-areas:"profileArea welcomeArea profileRelationsArea";
    grid-template-columns:160px 1fr 312px;
  }
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <Container>
          <img src="https://github.com/paulhenrique.png" alt="Paulo" />
          <Box style={{ gridArea: 'profileArea' }}>Imagem</Box>
          <Box style={{ gridArea: 'welcomeArea' }}>Bem vindo</Box>
          <Box style={{ gridArea: 'profileRelationsArea' }}>Comunidades</Box>
        </Container>
      </Main>
    </>
  );
}
