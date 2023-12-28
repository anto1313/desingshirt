"use client";

import  { Button, Input } from "@nextui-org/react";
import React from 'react'
import { Image } from "@nextui-org/react";

export const Login = () => {
  return (
    <main className="grid grid-cols-2 h-screen">
        <section className="flex bg-gradient-to-r from-purple-800 to-orange-600 justify-center items-center">
        <Image 
        isBlurred width={640}
        src="login-reg.png"
        alt="Shirt-login"
        className="m-1"/>
        
        </section>
        <section className="flex justify-center items-center">
            <div className="w-[360px] space-y-2">
                <h1>Login</h1>
                <p>Another comeback lets go !</p>
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Button color="primary">Login</Button>
            </div>
        </section>
    </main>
  );
};
