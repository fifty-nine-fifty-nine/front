"use client";

import Link from "next/link";
import { useRef } from "react";

import {
  bgSub,
  button,
  flexCol,
  flexColCenter,
  flexRow,
  optionalText,
  subtitleText,
  titleLg,
  titleMd,
  whiteText,
} from "@/styles/ogoo";
import { input } from "@/styles/ogoo/input.css";
import { cn } from "@/styles/utils";

export default function InfoCardProcessTwo() {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleChangeImage = (e: React.ChangeEvent) => {
    const targetFiles = e.target as HTMLInputElement;
  };

  return (
    <section className={cn(flexCol, `gap-8`)}>
      <div>
        <h2 className={cn(titleMd)}>Q2</h2>
        <h2 className={cn(titleLg)}>함께하는 반려동물에 대해서</h2>
        <h2 className={cn(titleLg)}>자세히 소개해주세요!</h2>
      </div>

      <div className={cn(flexCol, "gap-2")}>
        <p className={cn(subtitleText)}>반려동물의 사진을 추가해주세요.</p>
        <div className={cn(flexCol, "gap-3")}>
          <div className={flexColCenter}>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              name="img_input"
              onChange={handleChangeImage}
            />
            <button
              onClick={handleClick}
              className={cn(bgSub, "w-32 h-32 rounded-full")}
            >
              <p className={cn(optionalText, "text-[60px] font-light")}>+</p>
            </button>
            <div>{/* <img src={} width="" height="" alt="" /> */}</div>
          </div>
        </div>
      </div>

      <div className={cn(flexCol, "gap-2")}>
        <p className={cn(subtitleText)}>반려동물의 생일은 언제인가요?</p>
        <input className={cn(input())} placeholder="ex) 20240830"></input>
      </div>

      <div className={cn(flexCol, "gap-2")}>
        <p className={cn(subtitleText)}>반려동물의 견종/묘종을 알려주세요.</p>
        <div className={cn(flexRow, "gap-3")}>
          <input
            className={cn(input())}
            placeholder="종류를 입력해주세요!"
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
          <Link href={"/infocard/3"}>
            <p className={whiteText}>다음</p>
          </Link>
        </button>
      </footer>
    </section>
  );
}
