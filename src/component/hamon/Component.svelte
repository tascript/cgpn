<script lang='ts'>
  import { onMount, onDestroy } from 'svelte'
  import { position } from './lib/store'
  import { handleMouseover } from './lib/event'

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
