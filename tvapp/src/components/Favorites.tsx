import NavbarHome from "./NavBarHome";
import Footer from './Footer';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

interface FavoritesProps {}


const Favorite: React.FC<FavoritesProps> = () => {
  

  return (
    <>
    <NavbarHome></NavbarHome>
    <Container></Container>
    <Footer></Footer>
    
    
    </>
    
  );
};

export default Favorite;