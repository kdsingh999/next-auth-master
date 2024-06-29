import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    Github,
    Credentials({
      credentials: {
        username: { label: "name" },
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);
      },
    }),
  ],
} satisfies NextAuthConfig;
