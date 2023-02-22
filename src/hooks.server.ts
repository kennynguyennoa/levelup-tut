import { auth } from '$db/fake_auth';
import type { Handle, HandleFetch } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

type HandleServerError = (props: {
	error: Error;
	event: {
		request: Request;
		context: Record<string, unknown>;
		params: Record<string, unknown>;
	};
}) => {
	status?: string | number;
	headers?: Record<string, string>;
	body?: unknown;
	message?: string;
};

//runs first because of sequence
const logger: Handle = async ({ event, resolve }) => {
	const start_time = Date.now();
	const response = await resolve(event);
	console.log(`${Date.now() - start_time}ms ${event.request.method} ${event.url.pathname}`);

	return response;
};

//runs second because of sequence
const authorize: Handle = ({ event, resolve }) => {
	const user = auth();
	event.locals.user = user;
	return resolve(event);
};

export const handle: Handle = sequence(logger, authorize);

// Intercept fetch
export const handleFetch: HandleFetch = ({ fetch, request }) => {
	return fetch(request);
};

export const handleError: HandleServerError = ({ error, event }) => {
	//logger(error, event)
	return {
		message: error.message,
		status: error.message === 'Not found' ? 404 : 500
	};
};
