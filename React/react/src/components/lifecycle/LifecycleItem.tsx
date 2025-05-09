"use client";

import { useEffect } from "react";

export default function LifecycleItem() {
	useEffect(() => {
		// Pokud je to v development módu tak se to děje i při montování
		return () => console.log("Zníčeno");
	}, []);

	return <span className="font-bold mt-3 text-4xl">Baf</span>;
}
