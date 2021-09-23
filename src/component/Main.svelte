<script lang="ts">
  import Hamon from './hamon/Component.svelte'
  import Modal from './modal/Component.svelte'
  let display = false
</script>

<main>
  <Hamon repeat={3}/>
  <Modal bind:display={display}>
    <h2>This is Modal</h2>
  </Modal>
  <button on:click={() => display = true}>Modal</button>
</main>

<style>
</style>
