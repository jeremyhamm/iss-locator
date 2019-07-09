<template>
  <div class="d-flex justify-content-center m-5">
    <b-spinner label="Loading..." variant="primary" style="width: 3rem; height: 3rem;"></b-spinner>
  </div>
</template>

<script>
  import { BSpinner } from 'bootstrap-vue';
  export default {
    name: 'Loader',
    components: {
      'b-spinner': BSpinner
    }
  }
</script>