"use client";

import { Guess, Letter } from "@/utils/types";
import { useState, useEffect } from "react";
import Grid from "./Grid";
import { getNewWord } from "@/utils/fetch";

const API_URL = "http://localhost:3000/api/words";

export default function Wordle() {
	const [word, setWord] = useState<string | null>(null);
	const [guesses, setGuesses] = useState<Guess[]>([]);

	const [inputValue, setInputValue] = useState<string>("");
	const [state, setState] = useState<"playing" | "won" | "lost">("playing");

	useEffect(() => {
		async function fetchWords() {
			const selectedWord = await getNewWord();
			setWord(selectedWord);
		}

		fetchWords();
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (state === "won" || state === "lost") return;

		if (!word) return;

		if (!inputValue || inputValue === "") return;

		if (inputValue.length > 5 || inputValue.length < 5) return;

		const letters: Letter[] = [];

		for (let i = 0; i < 5; i++) {
			const wordLetter = word[i];
			const inputLetter = inputValue.toUpperCase()[i];

			const newLetter: Letter = {
				letter: inputLetter,
				state:
					inputLetter === wordLetter
						? "right"
						: word.includes(inputLetter)
						? "consists"
						: "wrong",
			};

			letters.push(newLetter);
		}

		const newGuess: Guess = {
			word: inputValue.toUpperCase(),
			letters: letters,
		};

		if (inputValue.toUpperCase() === word) setState("won");
		if (guesses.length >= 5) setState("lost");

		setGuesses((guesses) => [...guesses, newGuess]);
		setInputValue("");
	};

	const handleReset = async (e: React.MouseEvent) => {
		e.preventDefault();

		setGuesses([]);
		setWord(null);

		const selectedWord = await getNewWord();
		setWord(selectedWord);

		setState("playing");
	};

	return (
		<section className="w-full flex items-center justify-center py-10">
			<div className="max-w-[500px] w-full flex flex-col gap-5">
				{word ? (
					<>
						{state === "lost" && <span>Prohrál jsi :(</span>}
						{state === "won" && <span>Vyhrál jsi</span>}
						<Grid guesses={guesses} />
						{state === "playing" ? (
							<form
								className="w-full grid grid-cols-5 gap-2"
								onSubmit={handleSubmit}
							>
								<input
									placeholder="Zadej slovo"
									value={inputValue}
									className="col-span-4 border p-1.5 rounded focus:outline-none focus:border"
									onChange={(e) => setInputValue(e.target.value)}
								/>
								<button
									className="bg-gray-200 text-black rounded cursor-pointer"
									type="submit"
								>
									Odeslat
								</button>
							</form>
						) : (
							<button onClick={handleReset}>Resetovat</button>
						)}
					</>
				) : (
					<span>Načítá se...</span>
				)}
			</div>
		</section>
	);
}
