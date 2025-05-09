"use client";

import { Guess } from "@/utils/types";
import Row from "./Row";

type Props = {
	guesses: Guess[];
};

export default function Grid({ guesses }: Props) {
	return (
		<section className="grid grid-cols-5 grid-rows-6 gap-2">
			{Array.from({ length: 6 }, (_, i) => (
				<Row key={i} data={guesses[i] ?? null} />
			))}
		</section>
	);
}
