<script lang='ts'>
  import { spring } from 'svelte/motion'
  import { handleMouseover } from '../lib/hamon'

  interface Position {
    x: number,
    y: number
  }

  let position = spring<Position>({ x: 0, y: 0 }, {
    stiffness: 0.1,
    dumping: 0.1,
    precision: 0.1
  })

	function handleJamOver(event) {
    position.update($position => ({
      x: $position.x + event.detail.dx,
			y: $position.y + event.detail.dy
		}));
	}
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
