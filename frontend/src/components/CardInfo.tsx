import { Box, SimpleGrid, Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent: string;
  content: any;
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <Box backgroundColor="white" minHeight="120px" padding="10" borderRadius="25px">
      <SimpleGrid columns={1} spacing={6}>
        <Text fontSize="3xl" fontWeight="bold">
          {mainContent}
        </Text>
        <Stat>
          <StatLabel>Saldo da conta</StatLabel>
          <StatNumber>{content}</StatNumber>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default CardInfo;
