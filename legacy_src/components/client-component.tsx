"use client";

import { ReactNode } from "react";

export default function ClientComponent({ children }: { children: ReactNode }) {
  console.log("ClientComponent");
  return <div>{children}</div>;
}
