import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface TitleWithSubtitleProps {
  title: string;
  subtitle: string;
}

const TitleWithSubtitle: React.FC<TitleWithSubtitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Box textAlign="center" mb={6}>
      {" "}
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
