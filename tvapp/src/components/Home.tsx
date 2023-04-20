import NavbarHome from "./NavBarHome";
import Footer from './Footer';
import styled from 'styled-components';
import Card from "./Card";
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;
const MovieLink = styled(Link)`
   color: black;
  text-decoration: none;
  font-size: 16px;
`;



interface HomeProps {}


const Home: React.FC<HomeProps> = () => {
  

  return (
    <>
    <NavbarHome></NavbarHome>
    <Container><MovieLink to="/Movie" ><Card title="first card" body="this is a description" image="/8129a7-9A7L._AC_SL1500_.jpg"></Card></MovieLink></Container>
    <Footer></Footer>
    
    
    </>
    
  );
};

export default Home;