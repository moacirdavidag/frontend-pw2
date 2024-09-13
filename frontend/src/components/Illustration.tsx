import React from "react";
import { Image } from "@chakra-ui/react";

interface IllustrationProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  mb?: string;
}

export const Illustration: React.FC<IllustrationProps> = ({
  src,
  alt,
  width = "300px",
  height = "auto",
  mb = "4",
}) => {
  return <Image src={src} alt={alt} width={width} height={height} mb={mb} />;
};
