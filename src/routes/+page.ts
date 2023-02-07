import type { PageLoad } from './$types';

type TData = {
	title: string;
};

export const load: PageLoad = async ({ fetch }) => {
	const res: Response = await fetch('https://syntax.fm/api/shows/latest');
	const all_ep_res: Response = await fetch("https://syntax.fm/api/shows")
	const data: TData = await res.json();
	const all_ep_data = await all_ep_res.json();

	return {
		title: data.title,
		all_episodes: all_ep_data
	};
};
