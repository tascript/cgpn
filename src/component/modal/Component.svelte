<script lang='ts'>
  import { onMount, onDestroy } from 'svelte'
  import { fade } from 'svelte/transition'
  export let display: boolean
  onMount(() => {
  })
  onDestroy(() => {
  })
</script>

{#if display}
  <div
    class="modal"
    transition:fade
    on:mousedown={() => display = false}
  >
    <div class="content">
      <slot></slot>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100px;
    background: rgba(0, 0, 0, .5);
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>
