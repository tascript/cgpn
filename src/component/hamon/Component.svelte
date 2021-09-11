<script lang='ts'>
  import { onMount, onDestroy } from 'svelte'
  import { spring } from 'svelte/motion'
  import { handleMouseover } from './lib/event'
  import type { Position } from './lib/interface'

  let position = spring<Position>({ x: 0, y: 0 }, {
    stiffness: 0.1,
    damping: 0.1,
    precision: 0.1
  })
  
  onMount(() => {
    window.addEventListener('mousemove', handleMouseover as EventListener)
  })
  onDestroy(() => {
    window.removeEventListener('mousemove', handleMouseover as EventListener)
  })
</script>

<div class="circle"
	style="transform:translate({$position.x}px,{$position.y}px)"
></div>

<style>
	.circle {
		--width: 30px;
    --height: 30px;
    border-radius: 50%;
		width: var(--width);
		height: var(--height);
		background-color: #4682b4;
	}
</style>
