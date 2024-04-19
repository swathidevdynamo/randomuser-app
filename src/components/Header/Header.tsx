import React from 'react';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { GithubLink, HeaderContainer, Title, HeaderIconsContainer } from './styled';

const Header: React.FC = () => {

  return (
    <HeaderContainer>
      <Title>{"React Random Users"}</Title>
      <HeaderIconsContainer>
        <GithubLink href="https://github.com/swathidevdynamo/randomuser-app">
          <GithubIcon />
        </GithubLink>
      </HeaderIconsContainer>
    </HeaderContainer>
  );
};

export default Header;