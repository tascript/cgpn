<script lang='ts'>
  import { onMount, onDestroy } from 'svelte'

  onMount(() => {
  })
  onDestroy(() => {
  })
</script>

<div class="modal">
  <div class="box">
    <div>
      <p>text</p>
    </div>
  </div>
</div>

<style>
  .modal {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100px;
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>
