import type { PageServerLoad } from './$types';

export type DataProp = {
	episode: {
		date: number;
		displayDate: string;
		slug: string;
		title: string;
		html: HTMLAllCollection;
	};
};

export const load: PageServerLoad = async ({ fetch, params, setHeaders }) => {
	const res: Response = await fetch(`https://syntax.fm/api/shows/${params.num}`);
	const data: DataProp = await res.json();

	setHeaders({
		'Cache-Control': 'max-age=60'
	});

	return {
		episode: data
	};
};
