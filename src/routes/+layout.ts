import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const all_ep_res: Response = await fetch("https://syntax.fm/api/shows")
	const all_ep_data = await all_ep_res.json();

	return {
		all_episodes: all_ep_data
	};
};
