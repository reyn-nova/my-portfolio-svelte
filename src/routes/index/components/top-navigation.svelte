<script>
  export let options = []
</script>

<main>
  <div
		class="top-navigation"
  >
    {#each options as option}
      <a
        class="button"
        href={option.url}
      >
        {#if option.icon != undefined}
          <div
            class="icon-container"
          >
            <svelte:component this={option.icon}/>
          </div>
        {/if}

        {option.title}
      </a>
    {/each}
	</div>
</main>

<style>
  a {
		color: black;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-size: 14px;
		font-weight: bold;
		text-decoration-line: none;
  }
  
	.top-navigation {
		align-items: center;
		background-color: white;
		display: flex;
		height: 50px;
		justify-content: flex-end;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
		width: 100vw;
  }
  
  .button {
    align-items: center;
    display: flex;
    margin-right: 20px;
  }

	.button:hover {
		color: limegreen;
  }
  
  .icon-container {
    margin-right: 7.5px;
  }
</style>