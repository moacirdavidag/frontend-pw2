import React from "react";
import { BotaoComponent } from "./style";

type Props = {
  titulo: string;
};

export const Button = ({ titulo }: Props) => {
  return <BotaoComponent>{titulo}</BotaoComponent>;
};
