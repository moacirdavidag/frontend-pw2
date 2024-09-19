import React, { useState } from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { Header } from "../../components/Header/Header";
import { Illustration } from "../../components/illustration/Illustration";
import { InputField } from "../../components/InputField/InputField";
import TitleWithSubtitle from "../../components/TitleWithSubtitle/TittleWithSub";
import ActionButton from "../../components/Button/ActionButton";
import ModalReset from "../../components/ModalReset/ModalResetPassword";

const ForgotPasswordScreen: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageLayout>
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
        focusBorderColor="red.500"
      />

      <ActionButton titulo="Redefinir senha" onClick={handleOpenModal} mt={4} />

      <ModalReset isOpen={isModalOpen} onClose={handleCloseModal} />
    </PageLayout>
  );
};

export default ForgotPasswordScreen;
