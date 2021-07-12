import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Container from '../components/Container';

const Box = styled.div`
  background:#ffffff;
  padding:10px;
  border-radius:5px;
`;

const Main = styled.main`
  max-width:1110px;
  width:100%;
  margin: 0 auto;
  display:grid;
  grid-gap:10px;
  padding-top:10px;
  @media(min-width:860px){
    grid-template-areas:"profileArea welcomeArea profileRelationsArea";
    grid-template-columns:160px 1fr 312px;
  }
`;

export default function Home() {
  const user = 'paulhenrique';
  return (
    <>
      <Navbar />
      <Main>
        <Box style={{ gridArea: 'profileArea' }}>
          <img style={{ width: '100%' }} src={`https://github.com/${user}.png`} alt="Paulo" />
        </Box>
        <Box style={{ gridArea: 'welcomeArea' }}>Bem vindo</Box>
        <Box style={{ gridArea: 'profileRelationsArea' }}>Comunidades</Box>
      </Main>
    </>
  );
}
