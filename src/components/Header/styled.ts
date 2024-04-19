import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`;
export const Title = styled.h1`
  color: #2F5D8A;
  font-size: 2.2rem;
`;
export const GithubLink = styled.a`
  margin-left: 1rem;
  svg {
    fill: #2F5D8A;
  }
  &:hover svg {
    fill: #20546a;
  }
`;
export const HeaderIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;
