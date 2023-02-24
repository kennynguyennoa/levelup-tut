import { fail } from '@sveltejs/kit';

interface ActionProps {
	locals: App.Locals;
	request: Request;
}

export const actions = {
	default: async ({ locals, request }: ActionProps) => {
		if (!locals?.user?.roles?.includes('admin'))
			return fail(401, { error_message: 'Un-Authorized' });

		const data = await request.formData();
		const email = data.get('email');
		const name = data.get('name');
		const message = data.get('message');

		console.log(name, email, message);

		return {
			message: 'Email sent successfully!'
		};
	}
};
