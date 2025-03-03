import Image from "next/image";
import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div
      className="flex gap-2 p-4 items-center justify-center bg-[#0F1318] rounded h-[56px]"
      role="alert"
    >
      <Image src="/img/error.svg" alt="Error icon" width={20} height={20} />
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
