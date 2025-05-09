"use client";

import { useState } from "react";
import LifecycleItem from "./LifecycleItem";
import Button from "../miscelaneous/Button";

export default function Lifecycle() {
	const [open, setOpen] = useState<boolean>(true);

	return (
		<section className="w-full h-dvh items-center justify-center flex flex-col gap-2">
			<h1 className="font-bold text-3xl">Lifecycle</h1>
			<div className="flex flex-col gap-2 text-center">
				<Button onClick={() => setOpen(!open)}>
					{open ? "Skrýt" : "Zobrazit"}
				</Button>
				{open ? <LifecycleItem /> : null}
			</div>
		</section>
	);
}
