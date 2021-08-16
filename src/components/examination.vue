<template>
<!-- 结构的搭建 -->
  <div class="box">
    <div class="top">
      <span>{{ num1 }}</span>
      <span>:</span>
      <span>{{ num2 }}</span>
      <span>:</span>
      <span>{{ num3 }}</span>
    </div>
    <div class="btn">
      <button :flag="flag" @click="remove">{{ remo }}</button>
      <button :flag="flag" @click="click">{{ mess }}</button>
    </div>
    <div class="bottom">
      <ul>
        <li v-for = "(item,index) in list" :key = "index"><span>计时{{item.id}}</span><span>{{item.name}}</span></li>
      </ul>
    </div>
    <footer>
      <div v-for = "(item,index) in box" :key= "index">
        <p>{{item.name}}</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  // 数据的声明
  data() {
    return {
      num:0,
      num1: "00",
      num2: "00",
      num3: "00",
      flag: "true",
      mess: "开始",
      remo: "复位",
      list:[],
      box:[
        {
          name:"世界时钟",
          src:"./assets/logo1.png"
        },
        {
          name:"闹钟",
          src:"./assets/logo1.png"
        },
        {
          name:"秒表",
          src:"./assets/logo1.png"
        },
        {
          name:"计时器",
          src:"./assets/logo1.png"
        },
      ]
    };
  }, 
  interval: "", // 用来进行计时器的清除
  methods: {
    // 方法的调用
    click() {
      // 首先进行判定按钮是开始还是暂停
      if (this.flag == true) {
        this.flag = false;
        this.mess = "开始";
        this.remo = "复位";
      } else {
        this.flag = true;
        this.mess = "暂停";
        this.remo = "计次";
      }
      // 开始的情况下 进行秒表的计时
      if (this.flag == true) {
        // 通过setInterval 来进行调用 使其自增 且当到达指定时间时 进行上一和归零
        this.interval = setInterval(() => {
          this.num3++;
          if (this.num3 < 10) {
            this.num3 = "0" + this.num3;
          }
          if (this.num3 >= 60) {
            this.num3 = "00";
            this.num2++;
            if (this.num2 < 10) {
              this.num2 = "0" + this.num2;
            }
            if (this.num2 >= 60) {
              this.num2 = "00";
              this.num1++;
              if (this.num1 < 10) {
                this.num1 = "0" + this.num1;
              }
            }
          }
        }, 20);
      } else { // 点击暂停时 进行定时器的清除
        clearInterval(this.interval);
      }
    },
    // 复位按钮的判定 及 计次
    remove() {
      // 判断 是 复位  则全部清零
      if (this.flag == false) {
        this.num1 = "00";
        this.num2 = "00";
        this.num3 = "00";
      } else { // 否则 添加至数组 进行渲染
        this.num ++ 
        this.list.unshift({name:this.num1 + ":" + this.num2 + ":" + this.num3,id:this.num})
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// 样式的编译
.box {
  background-color: #000;
  width: 100%;
  height: 100vh;
  .top {
    width: 100%;
    height: 30%;
    color: #fff;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    span {
      font-size: 50px;
    }
  }
  .btn {
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
    button {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid transparent;
    }
  }
  .bottom{
    margin-top: 50px;
    color: #fff;
    font-size: 20px;
    ul{
      li{
        margin-bottom: 10px;
        display: flex;
        justify-content: space-around;
      }
    }
  }
  footer{
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    position: fixed;
    bottom:0px;
    left:0px;
    width: 100%;
    height: 50px;
    background-color: #131313;
    div:nth-child(3){
      color: #f99c2e;
    }
  }
}
</style>