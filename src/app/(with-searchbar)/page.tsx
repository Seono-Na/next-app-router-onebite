import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";

// export const dynamic = "";
// 특정 페이지의 유형을 강제로 Static, Dynamic 페이지로 설정
// 1. auto : 기본값, 아무것도 강제하지 않음
// export const dynamic = "auto";
// 2. force-dynamic : 페이지를 강제로 Dynamic 페이지로 설정
// export const dynamic =  "force-dynamic"
// 3. force-static : 페이지를 강제로 Static 페이지로 설정
// export const dynamic =  "force-static"
// 4. error : 페이지를 강제로 Static 페이지로 설정 (설정하면 안되는 이유 -> 빌드 오류류)

// Next에는 알아서 판단해주는 기능 있어서 굳이 사용 권장X
// But! 개발할 때 캐싱 실험해보거나
// 무조건 static, dynamic으로 설정되어야 하는 페이지에 일단 빠르게 라우트세그먼트 옵션을 적용하여 개발하고 추후 고쳐나갈 수 있음

async function AllBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }
  const allBooks: BookData[] = await response.json();

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
async function RecoBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    { next: { revalidate: 3 } }
  );
  if (!response.ok) {
    return <div>오류가 발생했스니다 ...</div>;
  }
  const recoBooks: BookData[] = await response.json();

  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
