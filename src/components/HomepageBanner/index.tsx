import * as React from 'react';
import AppButton from 'Global/styled/AppButton';
import { BannerContainer, SearchTitle, SearchInputAndButton } from './styles';

const HomepageBanner: React.FunctionComponent = () => (
  <BannerContainer>
    <div>
      <SearchTitle>Find Your Movie</SearchTitle>
      <SearchInputAndButton>
        <input
          id="searchMovie"
          type="text"
          placeholder="What do you want to watch?"
        />
        <AppButton> Search </AppButton>
      </SearchInputAndButton>
    </div>
  </BannerContainer>
);

export default HomepageBanner;
