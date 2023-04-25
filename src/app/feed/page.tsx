'use client'

import React, {useEffect} from 'react';
import Link from 'next/link'

const Feed = () => {

  useEffect(() => {
    console.log('Feed render init')
  },[])

  return (
    <main>
      <div className="z-10 fixed top-0 w-full max-w-[420px] min-w-[320px] h-[56px] bg-neutral-200">
        <Link href="/">Home</Link>
        <Link href={"/feed"}>피드</Link>
      </div>
      <div className="mt-[56px] h-full pt-[10px]">
        <Link href={"/feed/1"}><div className="h-[100px] bg-cyan-100 mb-[10px] rounded-md p-[10px]">피트 1</div></Link>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">피트 2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div>
        <Link href={"/feed/10"}><div className="h-[100px] bg-amber-200 mb-[10px] rounded-md p-[10px]">메뉴2</div></Link>
      </div>
    </main>
  );
};

export default Feed;
