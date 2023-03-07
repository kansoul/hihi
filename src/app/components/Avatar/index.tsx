interface Props {
  imageUrl: string | null;
  className?: string | null;
}

export default function Avatar(props: Props) {
  const { imageUrl, className } = props;
  let image = new Image();

  const resolveImageUrl = () => {
    image.className = className || `h-10 flex-shrink-0 w-10 rounded-full object-cover`;
    if (imageUrl) {
      image.src = imageUrl;
      return image;
    } else {
      image.src = '/images/anhaoxanh.jpeg';
      return image;
    }
  };

  return <img className={resolveImageUrl().className} src={resolveImageUrl().src} alt="" />;
}

Avatar.defaultProps = {
  className: ''
};
