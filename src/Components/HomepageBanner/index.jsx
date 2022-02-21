import React from 'react';
import AppButton from 'Styles/AppButton';
import { BannerContainer, SearchTitle, SearchInputAndButton } from './styles';

export default function HomepageBanner() {
  return (
    <BannerContainer>
      <div>
        <SearchTitle htmlFor="searchMovie">Find Your Movie</SearchTitle>
        <SearchInputAndButton>
          <input
            name="searchMovie"
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
