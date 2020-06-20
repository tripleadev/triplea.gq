<template>
  <div class="layout">
    <nav class="nav">
      <g-link to="/" class="nav__link">TripleA</g-link>
      <g-link to="/contact" class="nav__link">Contact Us</g-link>
    </nav>
    <slot/>
    <footer>
      <span>Copyright {{ new Date().getFullYear() }} © TripleA</span>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  .layout {
    width: 100vw;
    min-height: 150vh;
  }

  .nav {
    width: 100vw;
    position: sticky;
    top: 0;
    display: flex;
    padding: 10px;
    font-size: 1em;
    /* justify-content: flex-end; */
    background-color: rgba(255, 255, 255, .75);

    .nav__link {
      padding-right: 10px;
    }

    .nav__link:last-of-type {
      padding-right: 0;
    }
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: var(--gray4);
  }
</style>