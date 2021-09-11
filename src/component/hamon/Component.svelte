<script lang='ts'>
  import { onMount, onDestroy } from 'svelte'
  import { position, isAnimate } from './lib/store'
  import { handleMouseover, handleMousedown, handleMouseUp } from './lib/event'

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

<div class="circle {$isAnimate === true ? 'circle--animation' : ''}"
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
  .circle--animation {
    animation: hamon 0.25s;
  }

  @keyframes hamon {
  from {
    width:  0px;
    height: 0px;
  }
  to {
    width:  var(--width);
    height: var(--height);
  }
}
</style>
