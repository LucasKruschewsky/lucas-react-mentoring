import { axiosImageCheck } from 'Root/services/axiosConfig';
import * as React from 'react';
import { ICardImage } from '../MovieCard/types';
import { CardImage, FallbackContainer } from './styles';

const MovieCardImage: React.FunctionComponent<ICardImage> = ({
  imgUrl,
  imgAlt,
  showHoverEffect,
  hideHoverEffect,
}) => {
  const [hasImage, setHasImage] = React.useState<boolean>();

  React.useEffect(() => {
    const imgUrlCheck = async (): Promise<void> => {
      const imageResponse = await axiosImageCheck
        .get(imgUrl)
        .catch((response) => response);

      setHasImage(imageResponse?.status);
    };

    imgUrlCheck();
  }, [imgUrl]);

  return hasImage ? (
    <CardImage
      onMouseEnter={showHoverEffect}
      onMouseLeave={hideHoverEffect}
      src={imgUrl}
      loading="lazy"
      alt={imgAlt}
    />
  ) : (
    <FallbackContainer
      onMouseEnter={showHoverEffect}
      onMouseLeave={hideHoverEffect}
    />
  );
};

export default MovieCardImage;
