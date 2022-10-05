import Link from "next/link"

export default function About() {
  return (
    <div className='flex flex-col text-brutalist-blue max-w-xl p-2'>
      <h1 className='text-8xl font-bold mb-8'>About</h1>
      <p className='text-2xl leading-10 mb-6'>
        This app will make your life easier by telling you if you are holding a
        hotdog or not.
        It is built with{' '}
        <a
          className='underline'
          href='https://nextjs.org/'
          target='_blank'
          rel='noreferrer'
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          className='underline'
          href='https://reactjs.org/'
          target='_blank'
          rel='noreferrer'
        >
          React
        </a>
        . The model is built with{' '}
        <a
          className='underline'
          href='https://www.tensorflow.org/'
          target='_blank'
          rel='noreferrer'
        >
          TensorFlow
        </a>
        . The model is trained with{' '}
        <a
          className='underline'
          href='https://www.kaggle.com/datasets/dansbecker/hot-dog-not-hot-dog'
          target='_blank'
          rel='noreferrer'
        >
          this dataset
        </a>
        . The model is hosted on{' '}
        <a
          className='underline'
          href='https://vercel.com/'
          target='_blank'
          rel='noreferrer'
        >
          Vercel
        </a>
        . The code is hosted on{' '}
        <a
          className='underline'
          href='https://github.com/YeyoM/not-hotdog'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>
        .
        Built by{' '}
        <a
          className='underline'
          href='https://github.com/YeyoM/'
          target='_blank'
          rel='noreferrer'
        >
          YeyoM
        </a>
        .
      </p>
      <p class='text-xl'>
        Return to {' '}
        <Link href='/'>
          <a className='underline'>Home</a>
        </Link>
      </p>
    </div>
  )
}