import React from 'react';
import Link from "next/link";

function FeedDt() {
  return (
    <div className={'h-full w-full bg-amber-700'}>
      <Link href="/feed">뒤로가기</Link>
      피드상세
    </div>
  );
}

export default FeedDt;
