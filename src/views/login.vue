<template>
  <div class="login">
    <button @click="login">
      登录
    </button>
  </div>
</template>

<script>
import dynamicRoutes from '@/static/menu.js'
console.log(dynamicRoutes)
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    login(){
      setTimeout(() => {
        this.$store.commit('DYNAMIC_ROUTES', dynamicRoutes)
        this.$router.push('/layout');
      }, 200);
      // this.$router.addRoute({ path: '/api', name: 'api', component: () => import('../views/authority/api') })
    }
  },
};
</script>

<style scoped>
  .login{
    height: 100%;
    width: 100%;
  }
</style>
