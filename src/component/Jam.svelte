<script lang='ts'>
  import { spring } from 'svelte/motion'

  interface Position {
    x: number,
    y: number
  }

  let position = spring<Position>({ x: 0, y: 0 }, {
    stiffness: 0.1,
    dumping: 0.1,
    precision: 0.1
  })

</script>
