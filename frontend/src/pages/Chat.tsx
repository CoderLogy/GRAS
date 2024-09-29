import styled from 'styled-components';
import { ReactComponent as PlusSVG } from '../assets/20_plus.svg';
import { ReactComponent as UploadSVG } from '../assets/20_upload.svg';
import { useEffect, useState } from 'react';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  top: -80px;

  z-index: 1;
`;

const ContentWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
`;

const ImageWrapper = styled.div`
  height: 180px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Sample = styled.div<{
  $type: number;
}>`
  width: 160px;
  height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  ${(prop) =>
    prop.$type === 0
      ? `background: linear-gradient(
    90deg,
    rgba(47, 47, 47, 0) 25%,
    rgba(47, 47, 47, 1) 100%
  );`
      : prop.$type === 1
      ? 'background: #2f2f2f;'
      : `background: rgb(47,47,47);
background: linear-gradient(90deg, rgba(47,47,47,1) 0%, rgba(47,47,47,0) 75%);`}
  border-radius: 8px;

  transition: scale 150ms ease-in-out;

  &:hover {
    scale: ${(props) => (props.$type === 1 ? 1.05 : 1)};
  }
`;

const ImageInput = styled.input`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  text-indent: -999em;
  outline: none;
  cursor: pointer;
`;

const SampleButton = styled.div`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  border-radius: 16px;
`;

const SampleText = styled.p`
  padding: 0 20px;

  font-size: 18px;
  text-align: center;

  color: #b4b4b4;
`;

const InputWrapper = styled.div`
  width: 520px;
  height: 52px;

  padding-left: 20px;
  padding-right: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #2f2f2f;
  border-radius: 26px;
`;

const Input = styled.input`
  width: calc(100% - 52px);
  height: 52px;

  background-color: transparent;
  color: #fff;

  font-size: 16px;

  outline: none;
  border: none;

  &::placeholder {
    color: #b4b4b4;
    opacity: 1; /* Firefox */

    font-size: 16px;
  }
`;

const SubmitButton = styled.div`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  border-radius: 16px;

  cursor: pointer;
`;

const Image = styled.img`
  height: 180px;

  border-radius: 8px;
`;

const ScoreWrapper = styled.div`
  width: 200px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: #2f2f2f;

  border-radius: 8px;
`;

const ScoreHeading = styled.p`
  font-size: 18px;

  text-align: center;

  color: #b4b4b4;
`;

const Score = styled.p`
  font-size: 48px;

  text-align: center;

  color: #fff;
`;

const Description = styled.p`
  width: 624px;

  font-size: 18px;
  text-align: center;

  color: #b4b4b4;

  white-space: pre-line;
`;

export function Chat() {
  const [image, setImage] = useState<string>();
  const [text, setText] = useState<string>();
  const [progress, setProgress] = useState<number>(0);
  const [random] = useState<number>(Math.round(Math.random() * 3)); // 0 1 2 3
  const [yipeeee, setYipee] = useState<boolean>(false);

  useEffect(() => {
    if (progress === 1 && !yipeeee) {
      setYipee(true);

      setTimeout(() => {
        setProgress(2);
        setYipee(false);
      }, (Math.random() * 2 + 8) * 1000);
    }
  }, [progress, yipeeee]);

  return (
    <Container>
      {progress === 0 ? (
        <ContentWrapper>
          {image ? (
            <ImageWrapper>
              <Image src={image} />
            </ImageWrapper>
          ) : (
            <ImageWrapper>
              <Sample $type={0} />
              <Sample $type={1}>
                <ImageInput
                  type="file"
                  accept=".png,.jpg"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setImage(URL.createObjectURL(e.target.files[0]));
                    }
                  }}
                />
                <SampleButton>
                  <PlusSVG />
                </SampleButton>
                <SampleText>Click to add the rubric</SampleText>
              </Sample>
              <Sample $type={2} />
            </ImageWrapper>
          )}
          <InputWrapper>
            <Input
              placeholder="Paste your essay here..."
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <SubmitButton
              onClick={() => {
                if (image && text) {
                  setProgress(1);
                }
              }}
            >
              <UploadSVG />
            </SubmitButton>
          </InputWrapper>
        </ContentWrapper>
      ) : progress === 1 ? (
        <ContentWrapper>
          <Image src="https://media.giphy.com/media/ZTp15DHfHaaaENKayV/giphy.gif" />
          <Description>
            We are reviewing your assignment... Please wait...
          </Description>
        </ContentWrapper>
      ) : (
        <ContentWrapper>
          <ScoreWrapper>
            <ScoreHeading>Estimated Score</ScoreHeading>
            <Score>{Math.floor(Math.random() * 14 + 82)}/100</Score>
          </ScoreWrapper>
          {random === 0 ? (
            <Description>
              Improvements: {'\n'}
              {'\n'}Provide more detailed examples to support your claims,
              especially when discussing climate change and poverty. Use more
              precise and varied vocabulary to avoid repetition and keep the
              reader engaged. Your essay has a clear position, but the
              organization needs work. {'\n'}
              {'\n'}The thesis is stated well in the introduction, but the body
              paragraphs feel disconnected, and there’s not enough explanation
              to bridge the points. While you make a good case for focusing on
              Earth's problems, the evidence is somewhat general, and your
              conclusion doesn't leave a strong lasting impression. {'\n'}
              {'\n'}Additionally, the word choice feels a bit repetitive, and
              certain phrases could be expressed more concisely for clarity.
            </Description>
          ) : random === 1 ? (
            <Description>
              Improvements: {'\n'}
              {'\n'}Work on improving the flow between paragraphs, especially
              when moving between arguments and counterarguments. Provide more
              concrete examples and avoid overly general statements.{'\n'}
              {'\n'}This essay presents a compelling argument about the
              importance of addressing Earth's challenges before investing
              heavily in space exploration. The ideas are clear, but there are
              areas where the structure could be improved.{'\n'}
              {'\n'}For example, the counterargument about the potential
              benefits of space exploration is underdeveloped. Additionally,
              while your grammar and sentence structure are mostly correct,
              there are some minor errors in punctuation and phrasing.{'\n'}
              {'\n'}You also rely on simple word choices when more advanced
              vocabulary could make the essay more engaging.
            </Description>
          ) : random === 2 ? (
            <Description>
              Improvements: {'\n'}
              {'\n'}Expand on the counterargument to provide a more balanced
              view. Review sentence structure to correct minor errors and
              consider using more varied vocabulary for a more sophisticated
              tone. You’ve chosen an interesting topic with a relevant argument,
              but the essay lacks depth in certain areas. Your introduction is
              strong, but the body of the essay doesn’t provide enough detailed
              evidence to back up your claims. {'\n'}
              {'\n'}For example, when you talk about space exploration costs, it
              would be helpful to compare those costs with specific programs
              addressing poverty or climate change. Additionally, there are
              moments where the sentence structure feels awkward, and the word
              choice could be more precise.{'\n'}
              {'\n'} The conclusion restates your argument but does not offer a
              fresh perspective or leave a strong impact on the reader.
            </Description>
          ) : (
            <Description>
              Improvements: {'\n'}
              {'\n'}Add more detailed examples and analysis to strengthen your
              argument. Work on sentence clarity and variety to improve the
              overall flow of your essay.
            </Description>
          )}
        </ContentWrapper>
      )}
    </Container>
  );
}
