<script>
  export let photo = {
    alt: '',
    url: ''
  }

  export let greeting = '', tagline = '', description = ''
</script>

<main>
  <div
		class="self-details"
	>
		<img
			alt={photo.alt}
			class="self-photo"
			height="150"
			src={photo.url}
			width="150"
		>

		<div
			class="self-name"
		>
			{greeting}
		</div>

		<div
			class="self-tagline"
		>
			{tagline}
		</div>

		<div
			class="self-description"
		>
			{@html description}
		</div>
	</div>
</main>

<style>
  .self-details {
		background-color: white;
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: 50px;
		padding-left: 20px;
		padding-right: 20px;
		min-height: 550px;
		height: calc(100vh - 50px);
	}

	.self-photo {
		border: lightgray solid 2px;
		background-color: lightgray;
		border-radius: 50%;
		object-fit: cover;
	}

	.self-name {
		color: black;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		margin-top: 20px;
	}

	.self-name::selection {
		color: white;
		background: limegreen;
	}

	.self-tagline {
		color: black;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-size: 36px;
		font-weight: bold;
		margin-top: 20px;
		max-width: 675px;
		text-align: center;
	}

	.self-tagline::selection {
		color: white;
		background: limegreen;
	}

	.self-description {
		color: gray;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-size: 14px;
		margin-top: 50px;
		max-width: 675px;
		text-align: center;
  }
  
  :global(.self-description strong::selection) {
    color: white;
		background: limegreen;
  }

	.self-description::selection {
		color: white;
		background: limegreen;
	}
</style>