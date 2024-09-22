import React from "react";
import {
  BannerImage,
  BannerWrapper,
  Button,
  DiscountText,
  PromotionText,
  TextAreaPromotion,
} from "./style";

type Props = {
    imagem: string;
    textoAltImagem: string;
    textoPromocao: string;
    textoSecundario: string;
    textoBotao: string;
    backgroundBanner?: string;
    backgroundBotao?: string;
}

const PromotionBanner = ({imagem, textoAltImagem, textoPromocao, textoSecundario, textoBotao, backgroundBanner, backgroundBotao}: Props) => {
  return (
    <BannerWrapper backgroundBanner={backgroundBanner}>
      <BannerImage src={imagem} alt={textoAltImagem} />
      <TextAreaPromotion>
        <PromotionText>{textoPromocao}</PromotionText>
        <DiscountText>
          {textoSecundario}
        </DiscountText>
        <Button backgroundBotao={backgroundBotao}>{textoBotao}</Button>
      </TextAreaPromotion>
    </BannerWrapper>
  );
};

export default PromotionBanner;
