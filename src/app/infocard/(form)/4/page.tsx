import Link from "next/link";

import {
  button,
  flexCol,
  flexColCenter,
  flexRow,
  subtitleText,
  titleLg,
  titleMd,
  whiteText,
} from "@/styles/ogoo";
import { input } from "@/styles/ogoo/input.css";
import { cn } from "@/styles/utils";

export default async function InfoCardProcessFour() {
  return (
    <section className={cn(flexCol, `gap-8`)}>
      <div>
        <h2 className={cn(titleMd)}>Q4</h2>
        <h2 className={cn(titleLg)}>말랑이는 어떤 성격을</h2>
        <h2 className={cn(titleLg)}>가지고 있나요?</h2>
      </div>

      <div className={cn(flexCol, "gap-2")}>
        <p className={cn(subtitleText)}>말랑이는 사람한테</p>
        <input
          className={cn(input())}
          placeholder="ex) 처음 만나도 친근해요"
        ></input>
      </div>

      <div className={cn(flexCol, "gap-2")}>
        <p className={cn(subtitleText)}>말랑이는 동물친구들 사이에서</p>
        <div className={cn(flexRow, "gap-3")}>
          <input
            className={cn(input())}
            placeholder="ex) 낮가림이 심해요"
          ></input>
        </div>
      </div>

      <footer
        className={cn(
          flexColCenter,
          `absolute bottom-0 left-0 right-0 px-5 pt-3 h-44 bg-white`
        )}
      >
        <button className={cn(button())}>
          <Link href={"/infocard/5"}>
            <p className={whiteText}>다음</p>
          </Link>
        </button>
      </footer>
    </section>
  );
}
