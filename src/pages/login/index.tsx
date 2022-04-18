import { Wrapper } from "../../common/Container";
import { useAuth } from "../../hooks/auth";
import { Menu } from "../../components/navbar";
import {
  Flex,
  Stack,
  Input,
  Divider,
  FormControl,
  FormLabel,
  Button,
  Box,
  Heading,
  Image,
} from "@chakra-ui/react";
import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/client";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  email: string;
  password: string;
}
import Head from "next/head";
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(4),
});

export default function Register() {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const { signIn: sign } = useAuth();

  const handleAuthenticate: SubmitHandler<FormData> = async ({
    email,
    password,
  }: FormData) => {
    await sign({ email, password });
  };

  const handleSocialAuth = async () => {
    await signIn();
  };

  return (
    <>
      <Head>Vegbook | Login</Head>
      <Wrapper>
        <Menu />
        <Divider orientation="horizontal" />
        <Box py={5} mx="auto">
          <Heading
            color="brown.200"
            fontSize="36px"
            lineHeight="49px"
            fontWeight="bold"
            fontFamily="heading"
            my={5}
            as="h1"
          >
            Login to your Account
          </Heading>

          <Button
            as="div"
            variant="unstyled"
            cursor="pointer"
            onClick={handleSocialAuth}
          >
            <Image src="/img/google.png" alt="log in with google" />
          </Button>
        </Box>
        <Flex
          flexDir="column"
          alignItems="center"
          margin="2rem 0"
          as="form"
          onSubmit={handleSubmit(handleAuthenticate)}
        >
          <Stack spacing={5} dir="column" maxW={600} width="100%">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                {...register("email")}
                error={formState.errors.email}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                {...register("password")}
                error={formState.errors.password}
              />
            </FormControl>
          </Stack>
          <Button colorScheme="pink" type="submit">
            Save
          </Button>
        </Flex>
      </Wrapper>
    </>
  );
}
