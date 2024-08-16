"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";

const ContactForm = () => {
  const [email, setEmail] = useState("");

  const onClickHandler = () => {
    //api calll
  };
  return (
    <div className="flex items-center">
      <input
        className="p-3 border min-w-[400px] outline-none rounded-lg"
        type="text"
        placeholder="enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button size={"lg"} onClick={onClickHandler}>
        Contact me
      </Button>
    </div>
  );
};

export default ContactForm;
