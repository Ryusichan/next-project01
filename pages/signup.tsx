import React, { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

async function createUser(
  name: string,
  email: string,
  password: string
  // Promise <any>를 리턴하는 비동기식(async) 함수.
): Promise<any> {
  // 함수의 시작은 바로 비동기 await 구문부터 시작. fetch는 특정 주소로 Request를 요청하면 Response가 오는 명령어.
  // 이렇게 fetch로 Request를 보내면 response가 오는데 바로 const response = fetch(....)처럼 response에 fetch의 리턴을 저장.
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // 다음 const data = await response.json() 명령어로 response를 json() 함수를 실행한 후 data에 저장합니다.
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

const Signup: React.FC = (props) => {
  const [formStatus, setFormStatus] = useState<string>("");

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const { status } = useSession();
  const router = useRouter();

  async function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    // optional: Add validation

    try {
      const result = await createUser(
        //   @ts-ignore
        enteredName,
        enteredEmail,
        enteredPassword
      );
      console.log(result);
      setFormStatus(`Sign up Success: ${result.message}`);
      // window.location.href = "/";
      router.replace("/login");
    } catch (error: any) {
      console.log(error);
      setFormStatus(`Error Occured: ${error.message}`);
    }
  } // end of submitHandler function

  if (status === "authenticated") {
    router.replace("/");
    return (
      <div>
        <h1>Sign Up</h1>
        <div>You are already signed up.</div>
        <div>Now redirect to main page.</div>
      </div>
    );
  }

  return (
    <div className="container px-5 py-10 mx-auto w-2/3">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-4xl text-gray-700 font-semibold">
          Sign Up
        </h1>
      </div>
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            required
            ref={nameInputRef}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            required
            ref={emailInputRef}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            required
            ref={passwordInputRef}
          />
          <p className="text-red-500 text-xs italic">
            {/* Please choose a password. */}
            {formStatus}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
