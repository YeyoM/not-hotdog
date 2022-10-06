import Link from 'next/link'

export default function HomeComponent() {
  return (
    <div className='h-4/6 max-w-2xl align-middle justify-center flex flex-col text-black p-4 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-black'>
      <h1 className='text-7xl font-bold mb-8 xl:text-9xl'>Not HotDog?</h1>
      <ul className='text-2xl'>
        <li className='mb-2 underline'>
          <Link href='/camera'>
            <a className='transition-colors ease-out duration-200 hover:bg-stone-300 p-1'>Start Camera</a>
          </Link>
        </li>
        <li className='mb-2 underline'>
          <Link href='/account'>
            <a className='transition-colors ease-out duration-200 hover:bg-stone-300 p-1'>Manage my Account</a>
          </Link>
        </li>
        <li className='mb-2 underline'>
          <Link href='/about'>
            <a className='transition-colors ease-out duration-200 hover:bg-stone-300 p-1'>About</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}