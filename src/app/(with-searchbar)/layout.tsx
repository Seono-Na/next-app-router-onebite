import { ReactNode, Suspense } from "react";
import Searchbar from "@/components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 클라이언트 라우터 캐시 확인용
      <div>{new Date().toLocaleString()}</div> */}
      <Suspense fallback={<div>Loading ...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
