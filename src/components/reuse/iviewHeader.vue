<template>
    <div>
      <Header :style="{position: 'relative', width: '100%'}">
        <Menu :style="{opacity: '100%' }" mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem :v-bind="menuItem"
                      v-for="item in menuItem"
                      :name="item.name"
                      :to="item.path"
                      :key="item.name"
            >
              <Icon :type="item.meta.icon"></Icon>
              {{item.name}}
            </MenuItem>
          </div>
        </Menu>
      </Header>
    </div>
</template>

<script>
export default {
  data () {
    return {
      menuItem: [{
        path: '/home',
        name: '主页',
        meta: {
          icon: 'md-musical-notes'
        }
      },
      {
        path: '/frontLearn',
        name: '前端学习',
        meta: {
          icon: 'ios-musical-note-outline'
        }
      },
      {
        path: '/backLearn',
        name: '后端学习',
        meta: {
          icon: 'ios-musical-note'
        }
      }
      ]
    }
  }
}
</script>

<style scoped>
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    z-index: 1
  }
  .layout-nav{
    width: 720px;
    margin: 0 auto;
    margin-right: 20px;
    z-index: 1
  }
</style>
