<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { applyAction, deserialize } from '$app/forms';

	type FormProps = {
		error_message: string;
		message: string;
	};

	export let form: FormProps;

	$: console.log('form', form);

	async function handleForm(event: Event) {
		// this === form element
		// creating form data
		const data = new FormData(this);
		//sending our own fetch post request
		const res = await fetch(this.action, {
			method: 'POST',
			body: data
		});

		// get datra by deserializing the response
		const result = deserialize(await res.text());
		// see if the result is a success
		// if success, reload all loaded data
		if (result.type === 'success') {
			await invalidateAll();
		}
		// population form
		// will redirect if thrown redirect in action
		// show error page if thrown error
		applyAction(result);
	}
</script>

{#if form?.error_message}
	<p>{form.error_message}</p>
{/if}

{#if form?.message}
	<p>{form.message}</p>
{:else}
	<div class="container">
		<!-- <form
			use:enhance={({ form, data, action, cancel }) => {
				//form => form data
				//data => formData object
				//action => url form posts
				//cancel() => cancel form submission

				return ({ result, update }) => {
					update();
					//result => "ActionResult"
					//update() => runs all of the default use:enhance actions
				};
			}}
			action="/contact?/email"
			method="POST"
		> -->
		<form on:submit|preventDefault={handleForm} action="/contact?/email">
			<!-- Action = route => ?/ + action_name -->
			<label for="name"
				>Name:
				<input type="text" name="name" id="name" required />
			</label>
			<label for="email"
				>Email:
				<input type="email" name="email" id="email" required />
			</label>
			<label for="message"
				>Message:
				<textarea name="message" id="message" required />
			</label>
			<button type="submit"> Send email </button>
		</form>
	</div>
{/if}

<style>
	.container {
		margin-top: 40px;
	}
	label {
		display: grid;
		width: fit-content;
	}
	form {
		display: grid;
		gap: 20px;
	}
	button {
		background-color: #000;
		color: #fff;
		border: none;
		padding: 10px 20px;
		width: fit-content;
		border-radius: 5px;
		cursor: pointer;
	}
</style>
