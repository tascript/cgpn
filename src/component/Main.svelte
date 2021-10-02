<script lang="ts">
  import Hamon from './hamon/Component.svelte'
  import Modal from './modal/Component.svelte'
  import Card from './card/Component.svelte'
  let display = false
</script>

<main>
  <Hamon repeat={3} />
  <Modal bind:display>
    <h2>This is cgpn</h2>
  </Modal>
  <button on:click={() => (display = true)}>Modal</button>
  <Card>
    <span slot="title">cgpn</span>
    <span slot="description">cgpn is omoshiroi svelte components.</span>
  </Card>
</main>

<style>
</style>
