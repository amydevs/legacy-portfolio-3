import 'styles/globals.scss'
import type { AppProps } from 'next/app'

import Link from 'next/link';
import { useRouter } from 'next/router'
import Head from 'next/head'

import { routes } from 'modules/routes'

import { ThemeProvider } from 'next-themes'

import ThemeSwitch from 'components/ThemeSwitch';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const found_route = routes.find((e) => router.route == e.path);

  const title = "Amy" + (found_route ? " - " + found_route.name : "");
  const image_src = `https://github.com/${process.env.GH_USERNAME}.png`;
  const description = "Software Dev; Music Producer;";

  return (
    <ThemeProvider>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />

        <link rel="image_src" href={image_src} />
        <meta property="og:image" content={image_src} />
      </Head>
      <div id='app'>
        <nav>
          { routes.map((e, i) => {
            return (
              <span key={i}>
                <Link href={e.path} >
                  <a className={router.route == e.path ? 'active' : ''}>
                    {e.name}
                  </a>
                </Link>
                {' | '}
              </span>
            )
          }) }
          <ThemeSwitch></ThemeSwitch>
        </nav>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
