import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../assets/28_logo.svg';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 80px;

  position: sticky;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  cursor: pointer;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 600;

  color: #b4b4b4;
`;

export function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoWrapper onClick={() => navigate('/')}>
        <LogoSVG />
        <Text>GRAS</Text>
      </LogoWrapper>
    </Container>
  );
}
