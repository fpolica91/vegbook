import { useState } from "react";
import { Wrapper } from "../../common/Container";
import { Menu } from "../../components/navbar";
import {
  Flex,
  Stack,
  Input,
  Divider,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import * as yup from "yup";
import {
  useCreateUserMutationMutation,
  UserCreateInput,
} from "../../generated/graphql";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData extends UserCreateInput {
  email: string;
  password: string;
  username: string;
}
import Head from "next/head";
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(4),
  username: yup.string().required(),
});

// const { data, loading, error } = useQuery();

export default function Register() {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const [createUserMutation] = useCreateUserMutationMutation();

  const handleCreate: SubmitHandler<FormData> = async ({
    email,
    password,
    username,
  }: any) => {
    createUserMutation({
      variables: {
        data: {
          email,
          username,
          password,
        },
      },
    });
  };

  return (
    <>
      <Head>Vegbook | Register</Head>
      <Wrapper>
        <Menu />
        <Divider orientation="horizontal" />
        <Flex
          flexDir="column"
          alignItems="center"
          margin="2rem 0"
          as="form"
          onSubmit={handleSubmit(handleCreate)}
        >
          <Stack spacing={5} dir="column" maxW={600} width="100%">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                {...register("email")}
                error={formState.errors.email}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input
                type="username"
                {...register("username")}
                error={formState.errors.username}
              />
              <FormHelperText>Be Creative!</FormHelperText>
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                {...register("password")}
                error={formState.errors.password}
              />
              <FormHelperText>Secure you must be!</FormHelperText>
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
