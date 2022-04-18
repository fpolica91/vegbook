import { createContext, ReactNode, useState, useContext } from "react";
import { useLoginUserMutation } from "../generated/graphql";

type AuthProvider = {
  children: ReactNode;
};

interface FormData {
  email: string;
  password: string;
}

interface SignUp {
  signIn: (data: FormData) => Promise<void>;
  user: UserProps;
}

type UserProps = {
  email: string;
  id: number;
  name?: string;
  token: string;
  username: string;
};

type AuthResponse = {
  loginFucker: UserProps;
};

const AuthContext = createContext({} as SignUp);
function AuthProvider({ children }: AuthProvider) {
  const [user, setUser] = useState<UserProps>(() => {
    let savedUser;
    if (process.browser) {
      savedUser = localStorage.getItem("@veg/user");
    }

    if (savedUser) {
      return JSON.parse(savedUser);
    }
    return {
      email: "",
      username: "",
      name: "",
      id: 0,
      token: "",
    } as UserProps;
  });
  const [loginUser] = useLoginUserMutation();

  async function signIn({ email, password }: FormData) {
    const response = await loginUser({
      variables: {
        password,
        email,
        where: {
          email,
        },
      },
    });
    const { loginFucker } = response.data as AuthResponse;
    const { ...rest } = loginFucker;

    setUser(rest);
    localStorage.setItem("@veg/token", loginFucker.token);
    localStorage.setItem("@veg/user", JSON.stringify(loginFucker));
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export { AuthContext, AuthProvider, useAuth };
