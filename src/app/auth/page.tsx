"use client";

import { Input } from "@/components/atoms/Input";
import Image from "next/image";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="relative h-full w-full bg-[url('/images/home.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
      <div className="w-full h-full bg-black bg-opacity-60 ">
        <nav className="py-6 px-32">
          <Image src={"/images/logo.png"} alt="logo" width={150} height={140} />
        </nav>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-75 p-16 self-center mt-2 rounded w-2/5 ">
            <h3 className="mb-8 font-semibold text-5xl text-white">Sign In</h3>
            <div className="flex flex-col gap-4">
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button className="bg-red-500 py-3 w-full mt-10 text-white rounded-md hover:bg-red-700">Sign In</button>

                <p className="mt-12 text-neutral-400">
                    Don't have an account? 
                    <span className="text-white cursor-pointer ml-1">Sign Up</span>
                </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
