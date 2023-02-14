import type { UserProp } from '$db/fake_auth';
import type { PageServerLoad } from './$types';

export interface DataProp {
	episode: {
		date: number;
		displayDate: string;
		slug: string;
		title: string;
		html: HTMLAllCollection;
	};
	user: UserProp;
}

export const load: PageServerLoad = async ({ fetch, params, setHeaders, locals }) => {
	const res: Response = await fetch(`https://syntax.fm/api/shows/${params.num}`);
	const data: DataProp = await res.json();
	const userData: UserProp = locals.user;

	setHeaders({
		'Cache-Control': 'max-age=3600'
	});

	return {
		episode: data,
		user: userData
	};
};
