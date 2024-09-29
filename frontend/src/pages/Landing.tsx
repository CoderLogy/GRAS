import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  top: -80px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

const Heading = styled.p`
  font-size: 48px;

  color: #fff;
`;

const Description = styled.p`
  width: 624px;

  font-size: 18px;
  text-align: center;

  color: #b4b4b4;

  white-space: pre-line;
`;

const Button = styled.div`
  height: 42px;

  padding: 0 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #000;
  background-color: #fff;
  border-radius: 21px;

  cursor: pointer;
`;

export function Landing() {
  const navigate = useNavigate();

  return (
    <Container>
      <TextWrapper>
        <Heading>Introducing GRAS...</Heading>
        <Description>
          A Grading Review Automated System — an AI-powered tool designed to
          help students refine their essays with ease.
          {'\n'}
          {'\n'}
          By comparing your writing to a rubric you provide, GRAS identifies key
          areas for improvement and offers targeted suggestions, ensuring you’re
          always on the path to better grades.
          {'\n'}
          {'\n'}
          Whether you're looking to fine-tune your arguments or enhance your
          writing style, GRAS makes the journey to academic excellence smoother
          than ever.
        </Description>
        <Button onClick={() => navigate('/chat')}>Access our service</Button>
      </TextWrapper>
    </Container>
  );
}
