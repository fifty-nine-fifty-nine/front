import Link from "next/link";

import {
  button,
  flexCol,
  flexColCenter,
  flexRow,
  subText,
  subtitle,
  titleLg,
  titleMd,
  whiteText,
} from "@/styles/ogoo";
import { input } from "@/styles/ogoo/input.css";
import { cn } from "@/styles/utils";

export default async function InfoCardProcessOne() {
  return (
    <section className={cn(flexCol, `gap-8`)}>
      <div>
        <h2 className={cn(titleMd)}>Q1</h2>
        <h2 className={cn(titleLg)}>집사님의 반려동물에 대해</h2>
        <h2 className={cn(titleLg)}>알려주세요!</h2>
      </div>

      <div className={cn(flexCol, "gap-2")}>
        <p className={cn(subtitle)}>어떤 반려동물과 함께하고 계신가요?</p>
        <div className={cn(flexCol, "gap-3")}>
          <button className={cn(button({ color: "sub" }))}>
            <p className={cn(subText, `font-normal`)}>귀여운 강아지</p>
          </button>
          <button className={cn(button({ color: "sub" }))}>
            <p className={cn(subText, `font-normal`)}>도도한 고양이</p>
          </button>
        </div>
      </div>

      <div className={cn(flexCol, "gap-2")}>
        <p className={cn(subtitle)}>반려동물의 이름은 무엇인가요?</p>
        <input className={cn(input())} placeholder="ex) 말랑이"></input>
      </div>

      <div className={cn(flexCol, "gap-2")}>
        <p className={cn(subtitle)}>반려동물의 성별은 무엇인가요?</p>
        <div className={cn(flexRow, "gap-3")}>
          <button className={cn(button({ color: "sub" }))}>
            <p className={cn(subText, `font-normal`)}>남자아이</p>
          </button>
          <button className={cn(button({ color: "sub" }))}>
            <p className={cn(subText, `font-normal`)}>여자아이</p>
          </button>
        </div>
      </div>

      <footer
        className={cn(
          flexColCenter,
          `absolute bottom-0 left-0 right-0 px-5 pt-3 h-44 bg-white`
        )}
      >
        <button className={cn(button())}>
          <Link href={"/infocard/2"}>
            <p className={whiteText}>다음</p>
          </Link>
        </button>
      </footer>
    </section>
  );
}
