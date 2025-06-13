import Image from 'next/image'

export default function Wellness () {
  return (
     <div className="text-left">
            <button className="flex items-center gap-x-1 px-8 py-2 text-sm font-medium text-gray-700 bg-white rounded-2xl hover:bg-gray-100">
             <Image src="/wellness.png" alt="Wellness" width={28} height={28}></Image>
              <p className='uppercase font-bold'>Wellness</p>
            </button>
          </div>
  )
}
