import 'styles/globals.scss'
import type { AppProps } from 'next/app'

import Link from 'next/link';
import { useRouter } from 'next/router'

import { routes } from 'modules/routes'

import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider>
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
                {i === routes.length-1 ? '' : ' | '}
              </span>
            )
          }) }
        </nav>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
