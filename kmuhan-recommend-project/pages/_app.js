import '../styles/globals.css'
import '../styles/style.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta charset="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Style+Script&display=swap" rel="stylesheet"></link>
      <title>레커맨드 | 당신만의 추천 리스트를 만들어 보세요</title>
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
