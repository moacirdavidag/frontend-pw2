import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Header } from "../components/Header";
import { Illustration } from "../components/Illustration";
import { InputField } from "../components/InputField";
import { ActionButton } from "../components/Button/ActionButton";

const ForgotPasswordScreen: React.FC = () => {
  return (
    <PageLayout>
      {/* Ajustar Header para não exibir título */}
      <Header logoSrc="src/assets/imgs/logo.png" />

      <Illustration src="src/assets/imgs/motoca.png" alt="Motoca" />

      <div>
        {/* Texto e subtexto antes do campo de formulário */}
        <p>Insira seu email</p>
        <p>Para redefinir sua senha digite o email abaixo:</p>

        <InputField id="email" placeholder="Email" type="email" />
      </div>

      <ActionButton
        label="Redefinir senha"
        onClick={() => console.log("Redefinir senha")}
      />
    </PageLayout>
  );
};

export default ForgotPasswordScreen;
