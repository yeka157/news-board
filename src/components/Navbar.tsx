import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-start items-center h-20 min-h-20 bg-blue-400 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <div className="text-3xl font-bold text-white p-5">NEWS BOARD</div>
    </div>
  );
}
