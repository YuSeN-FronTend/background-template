<template>
  <div mdui-container-fluid>
    <header class="mdui-appbar  mdui-appbar-fixed" >
        <div class="mdui-toolbar mdui-color-indigo">
          <a href="javascript:" class="mdui-btn mdui-btn-icon mdui-ripple" id="toggle" @click="toggleChange"><i
              class="mdui-icon material-icons">menu</i></a>
          <a href="javascript:" class="mdui-typo-headline">YANGSHUO</a>
          <a href="javascript:" class="mdui-typo-title">Book-manage-system</a>
          <div class="mdui-toolbar-spacer"></div>
          <a href="javascript:" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">refresh</i></a>
          <a href="javascript:" class="mdui-btn mdui-btn-icon" @click="unit"><i class="mdui-icon material-icons">keyboard_return</i></a>
        </div>
    </header>
          <div class="mdui-drawer" id="drawer" :class="toggle?'menu-close':''">
            <ul class="mdui-list" mdui-collapse @click="changeRouter">
              <li class="mdui-collapse-item" v-for="item in router" :key="item.name">
                <div class="mdui-collapse-item-header mdui-list-item mdui-ripple" :data-path="(item.children&&item.children.length!=0)?'':item.path">
                  <i class="mdui-list-item-icon mdui-icon material-icons point-event"  :class="`mdui-text-color-${item.mate.color}`">{{item.mate.icon}}</i>
                  <div class="mdui-list-item-content point-event">{{item.name}}</div>
                  <i class="mdui-collapse-item-arrow mdui-icon material-icons point-event" v-if="item.children&&item.children.length!=0">keyboard_arrow_down</i>
                </div>
                <ul class="mdui-collapse-item-body mdui-list mdui-list-dense">
                  <li class="mdui-list-item mdui-ripple" v-for="items in item.children" :key="items.name" :data-path="items.path">{{items.name}}</li>
                </ul>
              </li>
            </ul>
        </div>
        <div class="main" style="height: auto !important;margin-top: 64px;padding: 20px;"><router-view></router-view></div>
    </div>
</template>
<script>
import router from '../static/menu.js'
import arrayToTree from '@/utils/arrayToTree.js'
let menuList = arrayToTree(router)
console.log(menuList);
let inst = null
export default {
 components: {},
 data() {
 return {
   router: menuList,
   toggle:false
 }
 },
 computed: {},
 created () {},
 mounted () {
   inst = new mdui.Drawer('#drawer');
   inst.open();

   this.$nextTick(()=>{
     mdui.mutation();
   })
 },
 methods: {
   toggleChange() {
     this.toggle = !this.toggle
    //  let $ = mdui.$;
    //  inst.toggle();
   },
   changeRouter(e){
     this.$router.push(e.target.dataset.path);
   },
   unit(){
     this.$router.push('/login')
   }
 }
}
</script>

<style lang="scss">
@mixin transition {
    -webkit-transition: all .5s cubic-bezier(0, 0, .2, 1);
      transition: all .5s cubic-bezier(0, 0, .2, 1);
}
#drawer{
  top: 64px;
  @include transition
}
.menu-close{
  transform: translateX(-240px);
}
.main{
  margin-left: 240px;
  @include transition
}
.menu-close~div.main{
  margin-left: 0px;
}

.point-event{
  pointer-events: none;
}
/* @media (min-width: 1024px) {
  .mdui-drawer-body-left{
  padding-left: 0px;
  }

} */
</style>
