<script lang='ts'>
  import { onMount, onDestroy } from 'svelte'
  export let display: boolean
  onMount(() => {
  })
  onDestroy(() => {
  })
</script>

<div class="modal {display ? 'modal--fadein' : 'modal--fadeout'}">
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
  .modal--fadein {
    animation: fadein 0.3s
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .modal--fadeout {
    animation: fadeout 0.3s
  }
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
