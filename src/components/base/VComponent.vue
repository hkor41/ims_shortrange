<template>
  <section class="mb-12 text-center">
    <h1
      class="font-weight-bold mb-2 headline text-uppercase"
      v-text="`${heading}`"
    />

    <!-- <span
      class="font-weight-light subtitle-1"
    >
    Edit a project, or view a project's change logs.
      <a
        :href="`https://vuetifyjs.com/${link}`"
        rel="noopener"
        target="_blank"
        class="secondary--text"
        style="text-decoration:none;"
      >
        full documentation
      </a>
    </span> -->
  </section>
</template>

<script>
  export default {
    name: 'VComponent',

    props: {
      heading: {
        type: String,
        default: '',
      },
      link: {
        type: String,
        default: '',
      },
    },
  }
</script>
