import { FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link'
import Layout from '../pages/components/Layout'
import styles from '../styles/404.module.css'

export default function NotFoundPage() {
	return (
		<Layout title='Page Not Found'>
			<div className={styles.error}>
				<h1>
					<FaExclamationTriangle />
					<br />
					404
				</h1>
				<h4>Sorry, there's nothing here</h4>
				<Link href='/'>
					<a>Go Back Home</a>
				</Link>
			</div>
		</Layout>
	)
}
