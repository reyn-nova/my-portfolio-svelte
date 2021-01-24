<script>
  export let id = ""
  export let services = []
</script>

<div
	class="portfolio-background"
	{id}
>
	<div
		class="portfolio-container-title"
	>
		My Services
	</div>

	<div
		class="portfolio-container"
	>
		{#each services as service}
			<div
				class="portfolio"
			>
				<img
					alt={`${service.thumbnail_url} Thumbnail`}
					class="portfolio-image"
					src={service.thumbnail_url}
				>

				<div
					class="portfolio-title"
				>
					{service.title}
				</div>

				<div
					class="portfolio-subtitle"
				>
					{service.subtitle}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
  .portfolio-background {
		align-items: center;
		background-color: rgb(247, 247, 247);;
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 70px);
		padding: 10px;
		justify-content: center;
	}

	.portfolio-container-title {
		color: black;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-size: 36px;
		font-weight: bold;
		margin-bottom: 40px;
		margin-top: 40px;
		max-width: 675px;
		text-align: center;
	}

	.portfolio-container-title::selection {
		color: white;
		background: limegreen;
	}

	.portfolio-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.portfolio {
		background-color: white;
		border-radius: 20px;
		width: 250px;
		margin: 10px;
		padding: 20px;
	}

	.portfolio-image {
		border-radius: 10px;
		height: 250px;
		object-fit: cover;
		width: 250px;
	}

	.portfolio-title {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-weight: bold;
		margin-top: 20px;
	}

	.portfolio-title::selection {
		color: white;
		background: limegreen;
	}

	.portfolio-subtitle {
		color: gray;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-size: 14px;
		margin-top: 5px;
	}

	.portfolio-subtitle::selection {
		color: white;
		background: limegreen;
	}
</style>