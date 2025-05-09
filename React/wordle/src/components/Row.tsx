"use client";

import { Guess, Letter } from "@/utils/types";

type Props = {
	data: Guess | null;
};

export default function Row({ data }: Props) {
	return (
		<>
			{Array.from({ length: 5 }, (_, i) => (
				<Block key={i} letter={data?.letters[i] ?? null} />
			))}
		</>
	);
}

function Block({ letter }: { letter: Letter | null }) {
	const style = {
		backgroundColor: letter
			? letter.state === "wrong"
				? "#4a5565"
				: letter.state === "consists"
				? "#949013"
				: "#369413"
			: "#000000",
	};

	return (
		<div
			style={style}
			className={`border-gray-600 w-full aspect-square flex items-center justify-center border-2 rounded`}
		>
			{letter ? letter.letter : ""}
		</div>
	);
}
