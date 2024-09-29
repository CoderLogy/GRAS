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

const Awesomesauce = styled.img<{
  $x: number;
  $y: number;
  $spin: number;
}>`
  width: 150px;

  position: absolute;
  top: ${(props) => props.$y}px;
  left: ${(props) => props.$x}px;

  transform: rotate(${(props) => props.$spin}deg);
`;

export function Landing() {
  const navigate = useNavigate();

  return (
    <Container>
      {/* <Awesomesauce
        $x={1500}
        $y={300}
        $spin={-645}
        src="https://cdn.discordapp.com/attachments/1290017340188004362/1290057625047928882/output-onlinepngtools.png?ex=66fb1349&is=66f9c1c9&hm=b4954ce065287585c2f33230fcabe18d5cb2dbfeff01f6523108fbfb6345d024&"
      />
      <Awesomesauce
        $x={100}
        $y={300}
        $spin={-545}
        src="https://cdn.discordapp.com/attachments/1290017340188004362/1290057625047928882/output-onlinepngtools.png?ex=66fb1349&is=66f9c1c9&hm=b4954ce065287585c2f33230fcabe18d5cb2dbfeff01f6523108fbfb6345d024&"
      />
      <Awesomesauce
        $x={500}
        $y={300}
        $spin={-245}
        src="https://cdn.discordapp.com/attachments/1290017340188004362/1290057625047928882/output-onlinepngtools.png?ex=66fb1349&is=66f9c1c9&hm=b4954ce065287585c2f33230fcabe18d5cb2dbfeff01f6523108fbfb6345d024&"
      />
      <Awesomesauce
        $x={1500}
        $y={400}
        $spin={-425}
        src="https://cdn.discordapp.com/attachments/1290017340188004362/1290057625047928882/output-onlinepngtools.png?ex=66fb1349&is=66f9c1c9&hm=b4954ce065287585c2f33230fcabe18d5cb2dbfeff01f6523108fbfb6345d024&"
      />
      <Awesomesauce
        $x={1500}
        $y={500}
        $spin={-145}
        src="https://cdn.discordapp.com/attachments/1290017340188004362/1290057625047928882/output-onlinepngtools.png?ex=66fb1349&is=66f9c1c9&hm=b4954ce065287585c2f33230fcabe18d5cb2dbfeff01f6523108fbfb6345d024&"
      />
      <Awesomesauce
        $x={1100}
        $y={1500}
        $spin={-415}
        src="https://cdn.discordapp.com/attachments/1290017340188004362/1290057625047928882/output-onlinepngtools.png?ex=66fb1349&is=66f9c1c9&hm=b4954ce065287585c2f33230fcabe18d5cb2dbfeff01f6523108fbfb6345d024&"
      />{' '}
      <Awesomesauce
        $x={10}
        $y={400}
        $spin={-15}
        src="https://cdn.discordapp.com/attachments/1290017340188004362/1290057625047928882/output-onlinepngtools.png?ex=66fb1349&is=66f9c1c9&hm=b4954ce065287585c2f33230fcabe18d5cb2dbfeff01f6523108fbfb6345d024&"
      />
      <Awesomesauce
        $x={1500}
        $y={300}
        $spin={-45}
        src="https://cdn.discordapp.com/attachments/1290017340188004362/1290057625047928882/output-onlinepngtools.png?ex=66fb1349&is=66f9c1c9&hm=b4954ce065287585c2f33230fcabe18d5cb2dbfeff01f6523108fbfb6345d024&"
      />
      <Awesomesauce
        $x={1500}
        $y={300}
        $spin={-45}
        src="https://cdn.discordapp.com/attachments/1290017340188004362/1290057625047928882/output-onlinepngtools.png?ex=66fb1349&is=66f9c1c9&hm=b4954ce065287585c2f33230fcabe18d5cb2dbfeff01f6523108fbfb6345d024&"
      />
      <Awesomesauce
        $x={1500}
        $y={300}
        $spin={-45}
        src="https://cdn.discordapp.com/attachments/1290017340188004362/1290057625047928882/output-onlinepngtools.png?ex=66fb1349&is=66f9c1c9&hm=b4954ce065287585c2f33230fcabe18d5cb2dbfeff01f6523108fbfb6345d024&"
      /> */}
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
