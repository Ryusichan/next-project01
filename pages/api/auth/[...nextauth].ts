import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { verifyPassword } from "../../../lib/auth";

// prisma server 소환
let prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "유저 이메일,페스워드 방식",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "유저 이메일",
          type: "email",
          placeholder: "user@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      // prisma DB에서 유저 정보를 비교하는 루틴
      async authorize(credentials: any) {
        const user = await prisma.user.findUnique({
          //credentials 변수의 email과 같은걸 찾는다
          where: {
            // 에러 체크를 위해 String(credentials.email) 식으로 강제로 string 타입화
            email: String(credentials.email),
          },
          select: {
            name: true,
            email: true,
            password: true,
          },
        });

        if (!user) {
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Could not log you in!");
        }
        return { name: user.name, email: user.email };
      },
      // You can also Reject this callback with an Error or with a URL:
      // throw new Error("error message") // Redirect to error page
      // throw "/path/to/redirect"        // Redirect to a URL
    }),
  ],
  secret: process.env.SECRET,
});
