import type { PageLoad } from './$types';

type TData = {
	title: string;
};

export const load: PageLoad = async ({ fetch }) => {
	const res: Response = await fetch('https://syntax.fm/api/shows/latest');
	const data: TData = await res.json();

	return {
		title: data.title
	};
};
