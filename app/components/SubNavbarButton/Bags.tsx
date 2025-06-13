import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Bags() {
  return (
     <div className="relative group inline-block text-left">
            <button className="flex items-center gap-x-1 px-8 py-2 text-sm font-medium text-gray-700 bg-white rounded-2xl hover:bg-gray-100">
             <Image src="/bags.png" alt="fashion" width={20} height={20}></Image>
              <p className='uppercase font-bold'>Bags</p>
            </button>

            <div className="absolute duration-700 left-0 z-10 hidden w-40 pt-2 bg-none group-hover:block">
              <div className="py-1 border rounded-md shadow-lg border-gray-200 bg-white text-sm text-gray-700">
                <Link href="/bags" className="block px-4 py-2 hover:bg-gray-100">
                  Men Bags
                </Link>
                <Link href="/bags" className="block px-4 py-2 hover:bg-gray-100">
                  Women Bags
                </Link>
                <Link href="/bags" className="block px-4 py-2 hover:bg-gray-100">
                  Lays
                </Link>
              </div>
            </div>
          </div>
  )
}
