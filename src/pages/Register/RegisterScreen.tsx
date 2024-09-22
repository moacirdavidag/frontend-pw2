import React from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { Header } from "../../components/Header/Header";
import RegisterForm from "../../components/Form/RegisterForm";

const RegisterScreen: React.FC = () => {
  return (
    <PageLayout>
      <Header logoSrc="src/assets/imgs/logo.png" />

      <RegisterForm />
    </PageLayout>
  );
};

export default RegisterScreen;
