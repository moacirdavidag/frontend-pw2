import styled from "styled-components";
import theme from "../../styles/global";

type Props = {
  backgroundBanner?: string;
  backgroundBotao?: string;
}

export const BannerWrapper = styled.div<Props>`
  background-color: ${({backgroundBanner}) => backgroundBanner ? backgroundBanner : theme.colors.yellow}; 
  display: flex;
  max-height: 320px;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
`;

export const BannerImage = styled.img`
  width: 50%; 
`;

export const TextAreaPromotion = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const PromotionText = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const DiscountText = styled.div`
  color: white;
  font-size: 16px;
`;

export const Button = styled.button<Props>`
  background-color: ${({backgroundBotao}) => backgroundBotao ? backgroundBotao : theme.colors.primary};
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;