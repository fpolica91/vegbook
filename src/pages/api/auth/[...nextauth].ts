import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { gql } from "@apollo/client";
import client from "../../../client/apolloClient";

const foundUser = gql`
  query Query($where: UserWhereUniqueInput!) {
    user(where: $where) {
      email
    }
  }
`;

const signupFucker = gql`
  mutation SignUpUser($signupData: UserCreateInput!) {
    signupFucker(signupData: $signupData) {
      email
      username
      id
    }
  }
`;

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_PROJECT_ID,
      clientSecret: process.env.GOOGLE_PROJECT_SECRET,
    }),
    // ...add more providers here
  ],

  callbacks: {
    async session(session) {
      return {
        ...session,
      };
    },
    async signIn(user, account, profile) {
      try {
        const { data } = await client.query({
          query: foundUser,
          variables: {
            where: {
              email: user.email,
            },
          },
        });

        if (Boolean(data.user) === false) {
          await client.mutate({
            mutation: signupFucker,
            variables: {
              signupData: {
                username: user.email,
                name: user.name,
                email: user.email,
              },
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
      return true;
    },
  },
});
