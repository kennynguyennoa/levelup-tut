import type { UserProp } from '$db/fake_auth';
import type { PageServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';

import { LUT_API } from '$env/static/private';

console.log('LUT_API', LUT_API);

export interface DataProp {
	episode: {
		date: number;
		displayDate: string;
		slug: string;
		title: string;
		html: HTMLAllCollection;
	};
	user: UserProp;
	message: string;
}

export const load: PageServerLoad = async ({ fetch, params, setHeaders, locals }) => {
	if (!locals?.user?.id) throw redirect(307, '/');

	const res: Response = await fetch(`https://syntax.fm/api/shows/${params.num}`);
	const data: DataProp = await res.json();
	const userData: UserProp = locals.user;

	if (data.message) {
		throw error(404, { message: data.message });
	}

	setHeaders({
		'Cache-Control': 'max-age=3600'
	});

	return {
		episode: data,
		user: userData
	};
};
