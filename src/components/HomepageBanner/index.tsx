import * as React from 'react';
import AppButton from 'Styles/AppButton';
import { BannerContainer, SearchTitle, SearchInputAndButton } from './styles';

export default function HomepageBanner(): React.ReactElement {
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
          <AppButton> Search </AppButton>
        </SearchInputAndButton>
      </div>
    </BannerContainer>
  );
}
