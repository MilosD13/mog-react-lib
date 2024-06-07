import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: auto;
  width: 20rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src='/logo-light.png' alt='Logo' />
    </StyledLogo>
  );
}

export default Logo;
