<template>
  <div>
    <div class="back_add">
      <div class="threeImg">
        <div class="Containt">
          <div class="iconleft" @click="zuohua">
            <i class="el-icon-arrow-left"></i>
          </div>
          <ul :style="{'left':calleft + 'px'}" v-on:mouseover="stopmove()" v-on:mouseout="move()">
            <li v-for="(item,index) in superurl" :key="index">
              <img :src="item.img"/>
          <p>
            小宝宝促销
          </p>
          <p>
            <span>全场5折</span>
            <span>
              <img src="../images/Lifestyle方案一_69.png" alt="" />
              <i>15</i>
            </span>
          </p>
            </li>
          </ul>
          <div class="iconright" @click="youhua">
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      superurl: [
        {
          url: "",
          img:
            "img/Lifestyle方案一_50.2ff82cca.png"
        },
        {
          url: "",
          img:
            "img/Lifestyle方案一_50.12ff82cca.png"
        },
        {
          url: "",
          img:
          "img/Lifestyle方案一_50.2ff82cca.png"
        },
        {
          url: "",
          img:
          "img/Lifestyle方案一_50.12ff82cca.png"
        },
        {
          url: "",
          img:
           "img/Lifestyle方案一_50.2ff82cca.png"
        },
        {
          url: "",
          img:"img/Lifestyle方案一_50.12ff82cca.png"
        }
      ],
      calleft: 0
    };
  },
  created() {
    this.move();
  },
  methods: {
    //移动
    move() {
    //   this.timer = setInterval(this.starmove, 5000);
    },
    //开始移动
    starmove() {
      this.calleft -= 245;
      if (this.calleft < -1200) {
        this.calleft = 0;
      }
    },
    //鼠标悬停时停止移动
    stopmove() {
      clearInterval(this.timer);
    },
    //点击按钮左移
    zuohua() {
      this.calleft -= 245;
      if (this.calleft < -1200) {
        this.calleft = 0;
      }
    },
    //点击按钮右移
    youhua() {
      this.calleft += 245;
      if (this.calleft > 0) {
        this.calleft = -245;
      }
    }
  }
};
</script>

<style lang='less' scoped>

#divAdd {
  background-color: #ededed;
  width: 1000px;
  margin: 0px auto;
}

.divAdd-con {
  margin: 0px auto;
  width: 1000px;
  overflow: auto;
  padding: 30px 0px;
}

.divAdd-con img {
  float: left;
}

.indexrt {
  margin: 0px 40px;
}

.divAddleft img {
  float: left;
  margin-bottom: 7px;
}

.divAddleft {
  float: left;
  display: inline;
  width: 370px;
}

.divAddrt {
  float: right;
  display: inline;
  margin-top: 7px;
}

.back_add {
  background-color: #ededed;
}

.divAdd-con img {
  border: none;
}

a:focus,
a:hover {
  color: #23527c;
}

.threeImg {
  height: 158px;
  background: #ededed;
  min-width: 1000px;
}

.threeImg .Containt ul {
  margin: 0 auto;
  width: 2400px;
  position: absolute;
  left: 0px;
  cursor: pointer;
  height: 250px;
}

.threeImg .Containt ul li {
  width: 220px;
  margin-right: 40px;
  margin-top: 10px;
  float: left;
  height: 250px;
}

.threeImg .Containt ul li >img {
  width: 220px;
}

.Containt {
  position: relative;
  width: 1000px;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
}

.iconleft {
  position: absolute;
  width: 20px;
  height: 80px;
  top: 10px;
  z-index: 99999;
  padding-top: 48px;
  background-color: #ddd;
  vertical-align: middle;
}

.iconright {
  position: relative;
  left: 978px;
  top: 70px;
  background-color: #ddd;
  /*position: absolute;*/
  width: 20px;
  height: 80px;
  top: 10px;
  z-index: 99999;
  padding-top: 48px;
  background-color: #ddd;
  vertical-align: middle;
}
</style>