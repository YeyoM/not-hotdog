import Link from 'next/link'

export default function HomeComponent() {
  return (
    <div className='flex flex-col text-brutalist-blue max-w-xl p-2'>
      <h1 className='text-8xl font-bold mb-8'>Not HotDog?</h1>
      <ul className='text-2xl'>
      <li className='mb-2 underline'>
          <Link href='/camera'>
            <a>Start Camera</a>
          </Link>
        </li>
        <li className='mb-2 underline'>
          <Link href='/account'>
            <a>Manage my Account</a>
          </Link>
        </li>
        <li className='mb-2 underline'>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}