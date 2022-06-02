import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../../../lib/auth";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Loading prisma client
  //   Prisma 클라이언트를 초기화하는 함수
  let prisma = new PrismaClient();

  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { name, email, password } = data;

  //   유저가 입력한 내용이 최소한의 요건을 갖췄는지 체크하는 if 문입니다.
  if (
    !name ||
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "password should also be at least 7 characters long.",
      error: true,
    });
    return;
  }

  //user는 우리가 schema.prisma 에서 만든 모델 User를 나타냅니다.
  //모델 User는 대문자로 시작하지만 코드에서는 소문자로 이용해야 합니다.
  const existingUser = await prisma.user.findUnique({
    //findUnique함수는 where 조건에서 email이 유저가 보낸 email과 같은걸 찾으라는 뜻입니다.
    where: {
      //앞에 email은 user 모델의 email이고 두 번째 email은 request body에서 유저가 보낸 email입니다.
      email: email,
    },
    //findUnique 함수는 리턴되는 객체가 바로 email, name을 리턴한다는 뜻
    //누가 쓰고있는 email인지 비교
    select: {
      email: true,
      name: true,
    },
  });

  if (existingUser) {
    res
      .status(422)
      .json({ message: "User Email already exists!", error: true });
    return;
  }

  //실제 user를 DB에 저장하는 코드.
  // password값을 hash
  const hashedPassword = await hashPassword(password);

  const result = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  // result 변수에 prisma.user.create 결과값을 저장 result 값에따라 에러를내보냄
  if (result) {
    res.status(201).json({ message: "Created user!", error: false });
  } else {
    res.status(422).json({ message: "Prisma error occured", error: true });
  }
}

export default handler;
