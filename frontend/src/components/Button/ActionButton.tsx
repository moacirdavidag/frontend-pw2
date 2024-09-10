import { Button } from "@chakra-ui/react";

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="red"
      borderRadius="40px"
      width="100%"
    >
      {text}
    </Button>
  );
};
