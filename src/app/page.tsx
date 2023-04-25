import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main>
      <div className="z-10 fixed top-0 w-full max-w-[420px] min-w-[320px] h-[56px] bg-neutral-200">
        <Link href="/">Home</Link>
        <Link href="/feed">피드</Link>
      </div>
      <div className="mt-[56px] h-full pt-[10px]">
        <div className="h-[100px] bg-cyan-100 mb-[10px] rounded-md p-[10px]">메뉴1</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
      </div>
    </main>
  )
}
