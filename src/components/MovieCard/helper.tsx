import * as React from 'react';

export const menuItems: Array<string> = ['Edit', 'Delete'];

export const showMenuItems = menuItems.map((item: string) => (
  <div className="movie-options-menu-item" key={item}>
    {item}
  </div>
));
