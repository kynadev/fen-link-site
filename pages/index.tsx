import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import Card from "react-bootstrap/Card"

const inter = Inter({ subsets: ["latin"] })

export default function LinkPage() {
	return (
		<>
			{/* ---------------------------------------- Header Content ---------------------------------------- */}

			<Head>
				<title>Free Expression Now :- Links</title>
				<meta name="description" content="Free Expression Now Static Links Page!" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* ----------------------------------------- Title Content ----------------------------------------- */}

			<main className={`${styles.main} ${inter.className}`}>
				<div className={styles.center}>
					<div className={styles.thirteen}>
						{
							// todo change names above `thirteen` -> `titlecard`? & reduce bottom margin/padding
							// maybe add logo here?
						}
						<span>
							<h1>Free Expression Now</h1>
						</span>
					</div>
				</div>

				{/* ----------------------------------------- Main Content ----------------------------------------- */}

				<div className={styles.grid}>
					{
						// todo pick a good link to the statement
						// todo change span animations to work here
						// todo change the styles to make the card look nice
					}
					<a href="LINK TO X" className={styles.card} target="_blank" rel="noopener noreferrer">
						<h2>
							What is the Chicago Statement? <span>-&gt;</span>
						</h2>
						<p>
							It is a statement that universities adopt affirming their commitment to free
							expression written when the University of Chicago censored{" "}
							<span style={{ color: "red" }}>communist</span> and{" "}
							<span style={{ color: "lightblue" }}>socialist</span> speakers under the threats of{" "}
							<i>right wing student groups</i>.
						</p>
					</a>
				</div>
			</main>
		</>
	)
}
