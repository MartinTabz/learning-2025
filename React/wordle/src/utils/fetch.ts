"use client";

export async function getNewWord(): Promise<string | "ERROR"> {
	const res = await fetch("http://localhost:3000/api/words");
	if (!res) return "ERROR";

	const words = await res.json();

	return words[Math.floor(Math.random() * words.length)];
}
