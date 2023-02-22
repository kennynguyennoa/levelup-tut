<div class="container">
	<form method="POST">
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
