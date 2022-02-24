import * as React from 'react';
import AppButton from 'Styles/AppButton';
import { BannerContainer, SearchTitle, SearchInputAndButton } from './styles';

export default function HomepageBanner(): JSX.Element {
  return (
    <BannerContainer>
      <div>
        <SearchTitle>Find Your Movie</SearchTitle>
        <SearchInputAndButton>
          <input
            id="searchMovie"
            type="text"
            placeholder="What do you want to watch?"
          />
          <AppButton buttonStyle="default"> Search </AppButton>
        </SearchInputAndButton>
      </div>
    </BannerContainer>
  );
}
