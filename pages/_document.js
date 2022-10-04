import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class myDocument extends Document {
  render () {
    return <Html lang='en' className='scrollbar-hide'>
      <Head>
        <link rel="icon" href="/hotdog.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  }
}

export default myDocument