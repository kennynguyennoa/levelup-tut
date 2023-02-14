export interface UserProp {
	id: string;
	name: string;
	email: string;
	roles: string[];
}

export function auth() {
	return {
		id: '123',
		name: 'John Doe',
		email: 'john@doe.com',
		roles: ['admin']
	};
}
