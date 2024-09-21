import React from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import RegisterForm from "../../components/Form/RegisterForm";

const RegisterScreen: React.FC = () => {
  return (
    <PageLayout>
      <RegisterForm />
    </PageLayout>
  );
};

export default RegisterScreen;
