import JokeDisplay from "../components/JokeDisplay/JokeDisplay";
import styles from "./Home.module.css";
import carambarLogo from "../assets/carambar.png";

const Home = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<img src={carambarLogo} alt="Carambar Logo" className={styles.logo} />
				<h1 className={styles.title}>Blagues Carambar</h1>
				<p className={styles.subtitle}>Découvrez une blague aléatoire !</p>
			</header>

			<main className={styles.main}>
				<JokeDisplay />
			</main>

			<footer className={styles.footer}>
				<p>© {new Date().getFullYear()} Carambar & Co</p>
			</footer>
		</div>
	);
};

export default Home;
