import Heading from '../components/Heading'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <div>
    <Heading/>
  <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
