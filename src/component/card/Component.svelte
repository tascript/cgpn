<script lang="ts">
</script>

<div class="card--layout">
  <h2 class="card--title">
    <slot name="title">
      <span>CardTitle</span>
    </slot>
  </h2>
  <div class="card--description">
    <slot name="description">
      <p>This is card description.</p>
    </slot>
  </div>
</div>

<style>
  .card--layout {
    width: 300px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 0.25rem;
    box-shadow: 1.5px 1.5px 1.5px 1px rgba(0, 0, 0, 0.5);
    padding: 1rem;
  }
  .card--title {
    margin-top: 0rem;
    padding-left: 0.125rem;
  }
  .card--description {
    padding-left: 0.125rem;
    font-size: 0.8rem;
  }
</style>
