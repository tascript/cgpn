<script lang="ts">
  import Hamon from './hamon/Component.svelte'
  import Modal from './modal/Component.svelte'
  const display = false
</script>

<main>
  <Hamon repeat={3}/>
  <Modal display={display}>
    <p>text</p>
  </Modal>
</main>

<style>
</style>
