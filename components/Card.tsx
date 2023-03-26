import styles from "@/styles/Card.module.css"

interface CardProps {
	children?: any
	props?: any[]
	href: string
	title: string
}

export default function Card(props: CardProps) {
	return (
		<div className={styles.card}>
			<a href={props.href}>
				<h2>
					<span>{props.title}</span> {""}&nbsp;{""}
					<span className={styles.arrow}>-&gt;</span>
				</h2>
				{props.children}
			</a>
		</div>
	)
}
