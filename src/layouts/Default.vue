<template>
  <div class="layout">
    <slot/>
    <footer>
      <span>Copyright {{ new Date().getFullYear() }} © TripleA</span>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  .layout {
    width: 100vw;
    min-height: 100vh;
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: var(--gray4);
    font-size: .9em;
  }
</style>