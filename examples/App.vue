<template>
  <div id="app">
    <distForm :model="model" labelWidth="100px">
      <distFormItem label="用户名">
        <distInput
          placeholder="请输入用户名"
          v-model="model.username"
        ></distInput
      ></distFormItem>
      <distFormItem label="选择">
        <distSwitch v-model="model.active"></distSwitch
      ></distFormItem>
    </distForm>

    <div class="row">
      <distButton @click="clickEvent" type="default">123</distButton>
      <distButton disabled type="primary">123</distButton>
      <distButton plain type="success">123</distButton>
      <distButton round type="info">123</distButton>
      <distButton circle type="warning">123</distButton>
      <distButton icon="el-icon-delete" type="danger">删除</distButton>
    </div>

    <div class="row">
      <distButton type="primary" @click="DialogShow(true)">弹窗</distButton>
      <distDialog top="300px" width="60%" :visible.sync="dialogShow">
        <div slot="title">插槽标题</div>
        <div>内容内容</div>
        <div slot="footer">
          <distButton
            type="primary"
            @click="DialogShow(false)"
            style="margin-right:20px"
            >确定</distButton
          >
          <distButton type="warning" @click="DialogShow(false)"
            >取消</distButton
          >
        </div>
      </distDialog>
    </div>

    <div class="row">
      <distInput
        placeholder="请输入用户名"
        type="text"
        name="myInput"
        v-model="username"
      />
      <br />
      <distInput
        placeholder="请输入密码"
        type="password"
        v-model="userpassword"
        clearable
        showPassword
      />
      <br />
      <distInput disabled />
    </div>

    <div class="row">
      <distSwitch
        v-model="switchValue"
        activeColor="red"
        inactiveColor="blue"
        name="username"
      ></distSwitch>
    </div>

    <div class="row">
      <distRadio :label="1" v-model="gender">男</distRadio>
      <distRadio :label="0" v-model="gender">女</distRadio>

      <distRadioGroup v-model="gender">
        <distRadio :label="1">男</distRadio>
        <distRadio :label="0">女</distRadio>
      </distRadioGroup>
    </div>

    <div class="row">
      <distCheckbox v-model="active">是否选中</distCheckbox>

      <distCheckboxGroup v-model="hobby">
        <distCheckbox label="抽烟"></distCheckbox>
        <distCheckbox label="喝酒"></distCheckbox>
        <distCheckbox label="烫头"></distCheckbox>
      </distCheckboxGroup>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      dialogShow: false,
      username: "",
      userpassword: "",
      switchValue: false,
      gender: 1,
      active: false,
      hobby: ["抽烟"],
      model: {
        active: "",
        username: ""
      }
    };
  },
  components: {},
  methods: {
    clickEvent() {
      alert("点击了按钮");
    },
    DialogShow(bool) {
      this.dialogShow = bool;
    }
  }
};
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  .Button {
    margin-right: 20px;
  }
}
</style>
