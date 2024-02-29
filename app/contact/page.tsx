import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className="flex items-center justify-center h-screen text-white bg-black">
      <div className="text-center">
        <Link href="/">
          <button>Contact.</button>
        </Link>
      </div>
    </div>
  )
}
