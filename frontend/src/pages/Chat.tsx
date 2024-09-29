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

export function Chat() {
  const [image, setImage] = useState<string>();
  const [text, setText] = useState<string>();

  return (
    <Container>
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
            onChange={(e) => setText(e.target.value)}
          />
          <SubmitButton>
            <UploadSVG />
          </SubmitButton>
        </InputWrapper>
      </ContentWrapper>
    </Container>
  );
}
