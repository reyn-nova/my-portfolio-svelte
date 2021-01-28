<script>
  export let options = []
</script>

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

<style>
  a {
		color: black;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-size: 14px;
    font-weight: bold;
    text-decoration: none;
  }
  
	.top-navigation {
		align-items: center;
		background-color: rgb(235, 235, 235);
		display: flex;
		height: 60px;
		justify-content: flex-end;
    position: fixed;
    top: 0;
		width: 100vw;
  }
  
  .button {
    align-items: center;
    border-radius: 5px;
    display: flex;
    margin-right: 10px;
    height: 35px;
    padding-left: 10px;
    padding-right: 10px;
  }

	.button:hover {
    background-color: rgb(50, 50, 50);
		color: crimson;
  }
  
  .icon-container {
    margin-right: 7.5px;
  }
</style>