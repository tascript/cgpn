<script lang='ts'>
  import { onMount, onDestroy } from 'svelte'
  import { fade } from 'svelte/trainsition'
  export let display: boolean
  onMount(() => {
  })
  onDestroy(() => {
  })
</script>

<div
  class="modal"
>
  <div class="content">
    <slot></slot>
  </div>
</div>

<style>
  .modal {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100px;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>
