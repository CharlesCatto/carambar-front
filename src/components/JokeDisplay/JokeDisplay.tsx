import { useState } from "react";
import { getRandomJoke } from "../../services/api";
import type { Joke } from "../../types/joke";
import styles from "./JokeDisplay.module.css";

const JokeDisplay = () => {
	const [joke, setJoke] = useState<Joke | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [showAnswer, setShowAnswer] = useState(false);

	const fetchJoke = async () => {
		setLoading(true);
		setError(null);
		setShowAnswer(false);

		try {
			const data = await getRandomJoke();
			setJoke(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Erreur inconnue");
			console.error("Erreur:", err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={styles.container}>
			<button
				onClick={fetchJoke}
				disabled={loading}
				className={styles.jokeButton}
				type="button"
			>
				{loading ? "Chargement..." : "Nouvelle blague"}
			</button>

			{error && <p className={styles.error}>{error}</p>}

			{joke && (
				<div className={styles.jokeContent}>
					<p className={styles.jokeQuestion}>{joke.question}</p>

					<button
						onClick={() => setShowAnswer(!showAnswer)}
						className={styles.answerButton}
						type="button"
					>
						{showAnswer ? "Cacher la réponse" : "Voir la réponse"}
					</button>

					{showAnswer && <p className={styles.jokeAnswer}>{joke.answer}</p>}
				</div>
			)}
		</div>
	);
};

export default JokeDisplay;
