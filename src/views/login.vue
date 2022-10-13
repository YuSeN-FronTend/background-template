<template>
  <div class="login">
    <div class="login-box mdui-card mdui-hoverable">
      <div style="max-width: 400px;margin-top: 20px;">
        <div class="mdui-card-media  mdui-theme-accent-cyan">
          <!-- <img src="../assets/back1.jpg" /> -->
              <div class="mdui-textfield mdui-textfield-floating-label" style="width: 300px;margin-top: 40px;">
                <i class="mdui-icon material-icons">account_circle</i>
                <label class="mdui-textfield-label">User name</label>
                <input class="mdui-textfield-input" type="text" required/>
                <div class="mdui-textfield-error">用户名不能为空</div>
              </div>
              <div class="mdui-textfield mdui-textfield-floating-label" style="width: 300px;">
                <i class="mdui-icon material-icons">lock</i>
                <label class="mdui-textfield-label">Message</label>
                <input class="mdui-textfield-input" type="text" pattern="^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*$" required/>
                <div class="mdui-textfield-error">密码至少 6 位，且包含大小写字母</div>
                <!-- <div class="mdui-textfield-helper">请输入至少 6 位，且包含大小写字母的密码</div> -->
              </div>
        </div>
        <div class="mdui-card-actions" style="display:flex;justify-content: center;align-items: center;">
          <button class="mdui-btn mdui-ripple" @click="login" style="color:white">login</button>
          <button class="mdui-btn mdui-ripple" style="color:white">apply</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dynamicRoutes from '@/static/menu.js'
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
  },
  methods: {
    login(){
      this.$store.commit('DYNAMIC_ROUTES', dynamicRoutes)
      sessionStorage.setItem('data', JSON.stringify(dynamicRoutes))
      this.$router.push('/layout');
      // this.$router.addRoute({ path: '/api', name: 'api', component: () => import('../views/authority/api') })
    }
  },
};
</script>
<style lang="scss">
.login{
    height: 100%;
    width: 100%;
    position: relative;
    background-color: rgba(0, 0, 0, .2);
    display: flex;
    justify-content: center;
    align-items: center;
    &-box{
      height: 348px;
      width: 560px;
      background: url('../assets/back1.jpg') no-repeat;
      background-size: 100% 100%;
      // background-color: rgba(0, 0, 0, .2);
      display: flex;
      justify-content: center;
      // align-items: center;
    }
  }
  .login::before{
    content: '';
    filter: blur(5px);
    background: url('../assets/back1.jpg') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
</style>
