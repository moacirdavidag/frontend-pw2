import React from "react";
import { PageLayout } from "../../components/PageLayout";
import { Header } from "../../components/Header";
import { Illustration } from "../../components/Illustration";
import { InputField } from "../../components/InputField";
import { ActionButton } from "../../components/Button/ActionButton";
import TitleWithSubtitle from "../../components/TittleWithSub";

const ForgotPasswordScreen: React.FC = () => {
  return (
    <PageLayout>
      {/* Ajustar Header para não exibir título */}
      <Header logoSrc="src/assets/imgs/logo.png" />

      <Illustration src="src/assets/imgs/motoca.png" alt="Motoca" />

      <TitleWithSubtitle
        title={"Insira seu email"}
        subtitle={"Para redefinir sua senha digite o email abaixo:"}
      />

      <InputField
        id="email"
        placeholder="Email"
        type="email"
        borderRadius="40px"
      />

      <ActionButton
        label="Redefinir senha"
        onClick={() => console.log("Redefinir senha")}
        mt={4}
      />
    </PageLayout>
  );
};

export default ForgotPasswordScreen;
