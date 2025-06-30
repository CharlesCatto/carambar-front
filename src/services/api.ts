import type { Joke } from "../types/joke";

export const getRandomJoke = async (): Promise<Joke> => {
	const API_URL =
		import.meta.env.VITE_API_URL || "https://carambar-back.onrender.com/api/v1";

	const response = await fetch(`${API_URL}/jokes/random`);

	if (!response.ok) {
		throw new Error(`Erreur HTTP! statut: ${response.status}`);
	}

	const data = await response.json();

	if (!data.question || !data.answer) {
		throw new Error("Format de blague invalide: question ou réponse manquante");
	}

	return data;
};
