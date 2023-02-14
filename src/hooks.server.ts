import { auth, type UserProp } from '$db/fake_auth';

type HandleProps = {
	event: {
		locals: {
			user: UserProp;
		};
	};
	resolve: (event: object) => object;
};

export async function handle({ event, resolve }: HandleProps) {
	const user = auth();
	event.locals.user = user;
	return resolve(event);
}
