'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Fashion() {
  return (
    <div className="relative group inline-block text-left">
      <button className="flex items-center gap-x-1 px-8 py-2 text-sm font-medium text-gray-700 bg-white rounded-2xl hover:bg-gray-100">
        <Image src="/fashion.png" alt="fashion" width={28} height={28} />
        <p className="uppercase font-bold">Fashion</p>
      </button>

      <div className="absolute duration-700 left-0 z-10 hidden w-40 pt-2 group-hover:block">
        <div className="py-1 border rounded-md shadow-lg border-gray-200 bg-white text-sm text-gray-700">
          <Link href="/men" className="block px-4 py-2 hover:bg-gray-100">
            Men&#39;s Clothing
          </Link>
          <Link href="/women" className="block px-4 py-2 hover:bg-gray-100">
            Women&#39;s Clothing
          </Link>
        </div>
      </div>
    </div>
  );
}
