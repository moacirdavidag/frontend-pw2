import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface TitleWithSubtitleProps {
  title: string;
  subtitle: string;
  textAlign?: "left" | "center" | "right";
}

const TitleWithSubtitle: React.FC<TitleWithSubtitleProps> = ({
  title,
  subtitle,
  textAlign = "center",
}) => {
  return (
    <Box textAlign={textAlign} mb={6}>
      <Text fontSize="20px" fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text fontSize="1g" color="gray.600">
        {subtitle}
      </Text>
    </Box>
  );
};

export default TitleWithSubtitle;
