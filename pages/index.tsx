import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const Home: NextPage = () => {
  return (
    <div className="flex px-4 mx-auto flex-col max-w-4xl py-4">
      <Head>
        <title>Log in to Todoist</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="flex items-center">
        <Image src="/icon.png" width={40} height={40} />
        <h1 className="px-2 text-red-500 font-bold text-2xl">todoist</h1>
      </div>
      <div className="flex">
        <div className="flex flex-col my-28">
          <h1 className="text-4xl font-bold">Log in</h1>
          <div className="flex flex-col mt-6">
            <button className="mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border w-96 border-gray-400 rounded shadow">
              <div className="flex items-center justify-center ">
                <FcGoogle />
                <span className="mx-2 font-bold text-lg">
                  Continue with Google
                </span>
              </div>
            </button>
            <button className="mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border w-96 border-gray-400 rounded shadow">
              <div className="flex items-center justify-center ">
                <SiFacebook />
                <span className="mx-2 font-bold text-lg">
                  Continue with Facebook
                </span>
              </div>
            </button>
            <button className="mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border w-96 border-gray-400 rounded shadow">
              <div className="flex items-center justify-center ">
                <FaApple />
                <span className="mx-2 font-bold text-lg">
                  Continue with Apple
                </span>
              </div>
            </button>
          </div>
          <hr className="mt-4 w-96  border-black" />

          <div className="flex mt-4 w-96">
            <div>
              <div
                className="form-floating mb-5 w-96 border border-solid border-gray-300
      rounded
      transition
      ease-in-out"
              >
                <label className="text-gray-700 mx-2 text-xs ">Email</label>
                <input
                  type="email"
                  className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      outline-none
      text-gray-700
      bg-white bg-clip-padding
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingInput"
                  placeholder="Enter your Email Address"
                />
              </div>
              <div
                className="form-floating mb-5 xl:w-96 border border-solid border-gray-300
      rounded
      transition
      ease-in-out"
              >
                <label className="text-gray-700 mx-2 text-xs">Password</label>
                <input
                  type="password"
                  className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <button
                className="w-full 
            h-12
            bg-[#db4c3f] 
            rounded-lg
            hover:bg:[#c53727]
            px-4
            py-2
            text-xl
            font-bold
            text-white"
              >
                Log in
              </button>
              <div className="mt-4">
                <a
                  href="/auth.password"
                  className="text-gray-700 
            text-xs underline
            "
                >
                  Forgot your password?
                </a>
              </div>
              <div className="mt-4">
                <p className="text-gray-700 text-xs">
                  By continuing with Google, Apple, or Email, you agree to
                  Todoist’s
                  <span className="underline mx-1">Terms of Service</span>
                  and <span className="underline">Privacy Policy.</span>
                </p>
              </div>
              <div className="flex items-center justify-center mt-6">
                <p className="text-gray-700 text-sm">
                  Don't have an account?{" "}
                  <a className="underline" href="/auth.signup">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center mx-10">
          <Image
            src="/image.png"
            className=""
            width={500}
            height={500}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
