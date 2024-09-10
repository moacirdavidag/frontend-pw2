import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Header } from "../components/Header";
import { Illustration } from "../components/Illustration";
import { InputField } from "../components/InputField";
import { ActionButton } from "../components/Button/ActionButton";

const ForgotPasswordScreen: React.FC = () => {
  return (
    <PageLayout>
      <Header logoSrc="src/assets/imgs/logo.png" title="Delivery Acadêmico" />

      <Illustration src="src/assets/imgs/motoca.png" alt="Motoca" />

      <InputField
        label="Insira seu email"
        placeholder="Email"
        type="email"
        subtext="Para redefinir sua senha digite o email abaixo:"
      />

      <ActionButton
        text="Redefinir senha"
        onClick={() => console.log("Redefinir senha")}
      />
    </PageLayout>
  );
};

export default ForgotPasswordScreen;
