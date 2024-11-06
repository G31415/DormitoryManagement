<template>
  <!-- <div>
    宿舍管理系统
  </div> -->


  <div class="login-container">
    <!-- <div style="margin-right: 150px; min-width: 300px">
      <img alt="" src="../../public/login_Team.png" style="width: 600px" />
    </div> -->
    <div class="login-box" >
      <div style="color: rgb(255, 255, 255); font-size: 30px; text-align: center; padding: 10px 0">登陆</div>
      <el-form ref="form" :model="form" :rules="rules" size="large">
        <el-form-item prop="username" class="password-input">
          <el-input v-model="form.username" clearable prefix-icon="avatar" placeholder="请输入账户名"></el-input>
        </el-form-item>

        <el-form-item prop="password" class="password-input">
          <el-input v-model="form.password" prefix-icon="lock" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item :model="form" prop="identity">
          <el-radio v-model="form.identity" label="stu" style="color: rgb(255, 255, 255)">学生</el-radio>
          <el-radio v-model="form.identity" label="dormManager" style="color: rgb(255, 255, 255)">宿舍管理员</el-radio>
          <el-radio v-model="form.identity" label="admin" style="color: rgb(255, 255, 255)">系统管理员</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button :disabled="!disabled" style="width: 100%" type="primary" @click="login">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script src="@/assets/js/Login.js"></script>
<style scoped>
@import '../assets/css/Login.css';

.login-container {
  width: 100%;
  height: 100%;
  background-image: url('../assets/background.png');
  background-size: cover;
  background-position: center;
}

.login-box {
  position: absolute;
  top: 40%;
  left: 75%;

  margin-left: -170px;
  margin-top: -120px;
  width: 320px;
  height: 330px;
  font-size: 18px;
  padding: 5px;

  background: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.4);
  /*边框阴影  水平阴影0 垂直阴影15px 模糊25px 颜色黑色透明度0.5*/
  border-radius: 5px;
  /*边框圆角，四个角均为15px*/
  text-align: center;

}

.password-input {
  width: 310px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
}

</style>