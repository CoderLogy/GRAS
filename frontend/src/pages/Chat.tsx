import styled from 'styled-components';
import { ReactComponent as PlusSVG } from '../assets/20_plus.svg';
import { ReactComponent as UploadSVG } from '../assets/20_upload.svg';
import { useState } from 'react';

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
      ) : (
        <ContentWrapper>
          <ScoreWrapper>
            <ScoreHeading>Estimated Score</ScoreHeading>
            <Score>0/100</Score>
          </ScoreWrapper>
          <Description>
            Here’s a diss-style rap lyric inspired by Drake’s signature style:
            {'\n'}
            {'\n'}
            ---
            {'\n'}
            {'\n'}
            **Verse 1:** Yeah, they talkin' like they runnin’ things, but I
            don’t hear 'em Man, they braggin’ 'bout the game, but I ain’t even
            near 'em They tried to take my style, flip it, claim it like it’s
            theirs But I been movin’ like a ghost, I ain’t even see you there
            {'\n'}
            {'\n'}
            You tweetin’ out my name, but I ain’t one to play these games I’m
            stackin’ up the wins, man, I’m way above the fame I gave you boys
            the blueprint, but you fumbled out the gate Now you beggin’ for
            attention, but the love already late
            {'\n'}
            {'\n'}
            **Chorus:** Came up from the bottom, now I’m standin’ at the peak
            You ain’t in my league, don’t even try to speak I’m sittin' on the
            throne, but they still want the crown But I don’t hear a sound when
            the clowns come around
            {'\n'}
            {'\n'}
            **Verse 2:** I heard you droppin' hints like you think I’d take
            offense But I been on my money grind, not worried 'bout the rest You
            out here takin’ shots, but they never seem to hit I’m laughin' from
            the top while you still throwin’ fits
            {'\n'}
            {'\n'}
            They sayin’ I went soft, but my bank account’s aggressive Y’all
            still petty flexin', my moves been impressive You can’t check me,
            I’m a boss, call it chess, not checkers You runnin’ out of gas, I’m
            movin’ like a Tesla
            {'\n'}
            {'\n'}
            **Chorus:** Came up from the bottom, now I’m standin’ at the peak
            You ain’t in my league, don’t even try to speak I’m sittin' on the
            throne, but they still want the crown But I don’t hear a sound when
            the clowns come around
            {'\n'}
            {'\n'}
            ---
            {'\n'}
            {'\n'}
            This flows with Drake’s mix of confidence, clever wordplay, and
            subtle jabs.
          </Description>
        </ContentWrapper>
      )}
    </Container>
  );
}
