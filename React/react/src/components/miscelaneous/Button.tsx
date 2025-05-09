"use client";

export default function Button({
	children,
	onClick,
}: {
	children: React.ReactNode;
	onClick?: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className="bg-gray-700 text-white py-1 px-5 rounded cursor-pointer duration-200 ease-in-out hover:bg-gray-800"
		>
			{children}
		</button>
	);
}
