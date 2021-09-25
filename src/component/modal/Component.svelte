<script lang="ts">
  import { fade } from 'svelte/transition'
  export let display: boolean
</script>

{#if display}
  <div
    class="modal--layout"
    transition:fade
    on:mousedown={() => (display = false)}
  >
    <div class="modal--card--layout">
      <div class="modal--card">
        <slot />
      </div>
    </div>
  </div>
{/if}

<style>
  .modal--layout {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);
  }
  .modal--card--layout {
    position: relative;
    min-width: 300px;
    background: white;
    border-radius: 0.3rem;
  }
  .modal--card {
    margin: 0 2rem;
  }
</style>
