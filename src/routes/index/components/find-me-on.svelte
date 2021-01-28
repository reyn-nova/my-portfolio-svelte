<script>
  export let id = ""
  export let options = []
</script>

<div
  class="container"
  {id}
>
  <div
    class="title"
  >
    Connect With Me On...
  </div>

  <div
    class="medias-container"
  >
    {#each options as option}
      <a
        class="media-button"
        href={option.url}
      >
        {option.title}
      </a>
    {/each}
  </div>
</div>

<style>
  a {
    text-decoration-line: none;
  }

  .container {
    background-color: rgb(50, 50, 50);
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .title {
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
  }

  .title::selection {
    color: black;
    background-color: crimson;
  }

  .medias-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .media-button {
    align-items: center;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 500;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
    width: 65px;
  }

  .media-button:hover {
    border-color: crimson;
    color: crimson;
  }
</style>