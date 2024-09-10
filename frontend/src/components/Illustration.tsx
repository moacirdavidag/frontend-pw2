import { Image } from "@chakra-ui/react";

interface IllustrationProps {
  src: string;
  alt: string;
}

export const Illustration: React.FC<IllustrationProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} width="300px" height="auto" mb="6" />;
};
