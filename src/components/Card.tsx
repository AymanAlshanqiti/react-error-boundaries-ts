import { useEffect, useState } from 'react';

interface CardProps {
	title: string;
	description: string;
	maxCount: number;
}

export default function Card({ title, description, maxCount }: CardProps) {
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		/**
		 * to track the count user enter and if it matched the maximum number,
		 * the system should throw an error
		 *  */
		if (count > maxCount) {
			throw new Error(`the maximum member count is ${maxCount}`);
		}
	}, [count, maxCount]);

	return (
		<div className="flex flex-col justify-between basis-full md:basis-1/4 gap-3 border-2 border-indigo-200 hover:border-indigo-300 rounded-lg p-4">
			<div className="flex flex-col gap-3">
				<h1 className="font-bold text-lg text-indigo-600"># {title}</h1>

				<p className="text-indigo-500">{description}</p>

				<h4 className="flex gap-1 text-md text-gray-500">
					الحد الأقصى : <pre className="font-bold text-red-600">{maxCount}</pre>
				</h4>
				<h4 className="flex gap-1 text-md text-gray-500">
					عدد المشاركين الحالي :{' '}
					<pre className="font-bold text-indigo-600">{count}</pre>
				</h4>
			</div>

			<button
				className="bg-indigo-500 h-12 text-white font-bold"
				onClick={() => setCount(count + 1)}
			>
				اضغطني
			</button>
		</div>
	);
}
