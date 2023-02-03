import {
  Input,
  InputGroup,
  Flex,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <Flex justify="space-between" alignItems="center" mt={5} w="100%">
      <Box ml={5}>
        <Image
          priority
          src={logo}
          alt="Logo"
          width={180}
          height={140}
          title="Sooro"
        />
      </Box>
      <Box>
        <Box>
          <InputGroup mr={5}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="#ffffff" />
            </InputLeftElement>
            <Input
              w="50"
              color="#ffffff"
              type="text"
              placeholder="Enter search..."
            />
          </InputGroup>
        </Box>
      </Box>
    </Flex>
  );
};
