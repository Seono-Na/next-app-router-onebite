import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>Temporary Search Bar</div>
      {children}
    </div>
  );
}
