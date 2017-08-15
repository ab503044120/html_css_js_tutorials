<template>
  <div class="login-box">
    <div class="login-container">
      <div class="login-title">后台管理系统</div>
      <div class="login-form">
        <el-form>
          <el-form-item class="">
            <el-input placeholder="请输入用户名" v-model="name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入密码" v-model="password"></el-input>
          </el-form-item>
          <el-button type="primary" class="login-form-btn" @click="submit">
            确定
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data: () => {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'LOGIN'
    ]),
    ...mapMutations([
      'login'
    ]),
    submit () {
      this.login({ name: this.name })
    }
  }
}
</script>

<style scoped>
.login-box {
  position: relative;
  height: 100%;
  width: 100%;
  background: #324157
}

.login-container {
  position: absolute;
  width: 300px;
  height: 160px;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -80px;
}

.login-title {
  text-align: center;
  margin-bottom: 30px;
  color: white;
  font: bold 20px/20px 微软雅黑
}

.login-form {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  padding: 15px;
}

.login-form-btn {
  width: 100%;
  height: 36px;
}
</style>
