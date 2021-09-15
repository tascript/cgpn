<script lang='ts'>
  import { onMount, onDestroy } from 'svelte'
  import { position, isAnimate } from './lib/store'
  import { handleMouseover, handleMousedown, handleMouseUp } from './lib/event'

  export let repeat: number

  onMount(() => {
    window.addEventListener('mousemove', handleMouseover as EventListener)
    window.addEventListener('mousedown', handleMousedown)
    window.addEventListener('mouseup', handleMouseUp)
  })
  onDestroy(() => {
    window.removeEventListener('mousemove', handleMouseover as EventListener)
    window.removeEventListener('mousedown', handleMousedown)
    window.removeEventListener('mouseup', handleMouseUp)
  })
</script>

{#each Array(repeat) as _, i}
<div class="circle--layout" style="transform:translate({$position.x}px,{$position.y}px)">
  <div class="circle--base {$isAnimate ? 'circle--animation' : ''}" style="animation-delay: {.15 * i}s;">
  </div>
</div>
{/each}

<style>
  .circle--layout {
    --width: 100px;
    --height: 100px;
    position: absolute;
    width: var(--width ); 
		height: var(--height);  
    display: flex;
    justify-content: center;
    align-items: center;
  }
	.circle--base {
    border-radius: 50%;
		width: var(--width);
		height: var(--height);
    opacity: 0;
		border: solid 2px #4682b4;
	}
  .circle--animation {
    animation: hamon 1s;
  }

  @keyframes hamon {
  from {
    width:  0px;
    height: 0px;
    opacity: 1;
  }
  to {
    width:  var(--width);
    height: var(--height);
    opacity: 0;
  }
}
</style>
