import App from 'next/app'
import '@/styles/globals.css'
import 'typeface-montserrat';

  
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}