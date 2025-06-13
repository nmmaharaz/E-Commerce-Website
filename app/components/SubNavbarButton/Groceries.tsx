import Image from 'next/image'
import React from 'react'

export default function Groceries() {
  return (
     <div className="text-left">
            <button className="flex items-center gap-x-1 px-8 py-2 text-sm font-medium text-gray-700 bg-white rounded-2xl hover:bg-gray-100">
             <Image src="/groceries.png" alt="Groceries" width={22} height={22}></Image>
              <p className='uppercase font-bold'>Groceries</p>
            </button>
          </div>
  )
}
