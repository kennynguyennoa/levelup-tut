<script lang="ts">
	import { enhance } from '$app/forms';

	type FormProps = {
		error_message: string;
		message: string;
	};

	export let form: FormProps;

	$: console.log('form', form);
</script>

{#if form?.error_message}
	<p>{form.error_message}</p>
{/if}

{#if form?.message}
	<p>{form.message}</p>
{:else}
	<div class="container">
		<form use:enhance method="POST">
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
