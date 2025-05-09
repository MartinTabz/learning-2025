export type Guess = {
	word: string;
	letters: Letter[];
};

export type Letter = {
	letter: string;
	state: "wrong" | "right" | "consists";
};
