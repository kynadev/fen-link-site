import type { AppProps } from "next/app"
// This must be in this order so the globals are not 'overwritten' by the bootstrap stuff
import "bootstrap/dist/css/bootstrap.min.css"
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
