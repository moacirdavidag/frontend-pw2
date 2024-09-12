import { Image } from "@chakra-ui/react";

interface HeaderProps {
  logoSrc: string;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ logoSrc, title }) => {
  return (
    <>
      <Image src={logoSrc} alt={title} width="150px" mb="4" />
    </>
  );
};
