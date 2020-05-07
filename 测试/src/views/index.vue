<template>
  <div>
    <div class="nav">
      <ul class="md">
        <li>
          <img src="../images/Lifestyle方案一_29.png" alt="" />
        </li>
        <li>首页</li>
        <li>DEAL</li>
        <li>LIFESTYLE</li>
        <li>MARKET</li>
        <li>朋友圈</li>
        <li>
          <div style="margin-top: 15px;">
            <el-input
              placeholder="请输入内容"
              v-model="input3"
              class="input-with-select"
            >
              <el-select v-model="select" slot="prepend" placeholder="MARKET">
                <el-option label="DEAL" value="1"></el-option>
                <el-option label="LIFESTYLE" value="2"></el-option>
                <el-option label="MARKET" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </li>
      </ul>
    </div>

    <div class="leftstyle md">
      <li style="margin:20px 0">
        <img src="../images/Lifestyle方案一_37.png" alt="" />
        <span style="margin-left:10px;">首页 > Lifestyle</span>
      </li>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="hotsort md">
      <ul class="leftBox">
        <li>
          <img src="../images/Lifestyle方案一_73.png" alt="" />
          <h5>热门排行</h5>
        </li>
      </ul>
      <ul class="rightBox">
        <li>彩妆</li>
        <li>香水</li>
        <li>洗发沐浴</li>
        <li>口腔护理</li>
        <li>∨</li>
      </ul>
    </div>

    <Swiper></Swiper>

    <div class="classifySort md">
      <li style="margin:20px 0">
        <img src="../images/Lifestyle方案一_73.png" alt="" />
        <h5>分类筛选</h5>
      </li>
      <li class="oval">我要发布</li>
    </div>

    <div class="ulBox md">
      <ul class="firstBox">
        <li>
          <img src="../images/Lifestyle方案一_77.png" alt="" />
          <span style="display:block">男装</span>
        </li>
        <li>
          <img src="../images/Lifestyle方案一_77.png" alt="" />
          <span style="display:block">男装</span>
        </li>
        <li>
          <img src="../images/Lifestyle方案一_77.png" alt="" />
          <span style="display:block">男装</span>
        </li>
        <li>
          <img src="../images/Lifestyle方案一_77.png" alt="" />
          <span style="display:block">男装</span>
        </li>
        <li>
          <img src="../images/Lifestyle方案一_77.png" alt="" />
          <span style="display:block">男装</span>
        </li>
        <li>
          <img src="../images/Lifestyle方案一_77.png" alt="" />
          <span style="display:block">男装</span>
        </li>
        <li>
          <img src="../images/Lifestyle方案一_77.png" alt="" />
          <span style="display:block">男装</span>
        </li>
        <li>
          <img src="../images/Lifestyle方案一_77.png" alt="" />
          <span style="display:block">男装</span>
        </li>
        <li>
          <img src="../images/Lifestyle方案一_77.png" alt="" />
          <span style="display:block">男装</span>
        </li>
        <li>
          <img src="../images/Lifestyle方案一_77.png" alt="" />
          <span style="display:block">男装</span>
        </li>
      </ul>
      <ul class="secondBox">
        <li>T恤</li>
        <li>T恤</li>
        <li>T恤</li>
        <li>T恤</li>
        <li>T恤</li>
        <li>T恤</li>
        <li>T恤</li>
        <li>T恤</li>
        <li>T恤</li>
        <li>更多∧</li>
      </ul>
      <ul class="thirdBox">
        <li>
          <img src="../images/Lifestyle方案一_115.png" alt="" />
        </li>
        <li>
          <img src="../images/Lifestyle方案一_115.png" alt="" />
        </li>
        <li>
          <img src="../images/Lifestyle方案一_115.png" alt="" />
        </li>
        <li>
          <img src="../images/Lifestyle方案一_115.png" alt="" />
        </li>
        <li>
          <img src="../images/Lifestyle方案一_115.png" alt="" />
        </li>
        <li>
          <img src="../images/Lifestyle方案一_115.png" alt="" />
        </li>
        <li>
          <img src="../images/Lifestyle方案一_115.png" alt="" />
        </li>
        <li>
          <img src="../images/Lifestyle方案一_115.png" alt="" />
        </li>
        <li>
          <img src="../images/Lifestyle方案一_115.png" alt="" />
        </li>
        <li>
          更多∧
        </li>
      </ul>
    </div>

    <div class="end md">
      <ul class="endNav">
        <li>最新发布</li>
        <li>最新发布</li>
        <li>最新发布</li>
        <li>最新发布</li>
      </ul>

      <ul class="endBot">
        <li>
          <div class="imgBox">
            <img src="../images/Lifestyle方案一_154.png" alt="" />
          </div>

          <div class="fontBox">
            <p>
              结果；事故的内部减肥结果；事故的内部减肥结果；事故的内部减肥结果；事故的内部减肥结果；事故的内部减肥结果；事故的内部减肥结果；事故的内部减肥结果；事故的内部减肥结果；事故的内部减肥
            </p>
            <p>
              就花掉撒街坊邻居就分手了看到结构嗯啊哈教室里飞就花掉撒街坊邻居就分手了看到结构嗯啊哈教室里飞就花掉撒街坊邻居就分手了看到结构嗯啊哈教室里飞就花掉撒街坊邻居就分手了看到结构嗯啊哈教室里飞
            </p>
            <p>
              <span>
                <i>
                  <img src="../images/Lifestyle方案一_69.png" alt="" />
                </i>
                <i>200</i>
              </span>
              <span>
                <i>
                  <img src="../images/Lifestyle方案一_69.png" alt="" />
                </i>
                <i>200</i>
              </span>
              <span>
                <i>
                  <img src="../images/Lifestyle方案一_69.png" alt="" />
                </i>
                <i>200</i>
              </span>
              <span>hahha/hahaha/hahaha/haha/hh</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { getImgData } from "../api";
import Swiper from "../components/swiper";
export default {
  name: "INDEX",
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      select: ""
    };
  },
  components: {
    Swiper
  },
  created() {
    getImgData({ api: "1" }).then(data => {
      console.log(data);
    });
  },
  methods: {
    left() {
      console.log(this.$refs.click);
    },
    right() {
      console.log(this.$refs.click);
    }
  }
};
</script>

<style lang="less">
.nav {
  height: 100px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ccc;
  .md {
    height: 100px;
    line-height: 100px;
    // box-shadow: black;
    li {
      line-height: 55px;
      display: inline-block;
      margin: 0px 11px;
    }
    img {
      vertical-align: middle;
    }
  }
}
.hotsort {
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  ul {
    li {
      display: inline-block;
      cursor: pointer;
    }
  }
  .leftBox {
    float: left;
    li {
      font-size: 20px;
      h5 {
        display: inline-block;
        margin-left: 5px;
      }
      img {
        vertical-align: middle;
      }
    }
  }
  .rightBox {
    float: right;
    li {
      margin: 0 10px;
      font-size: 10px;
    }
  }
}
.classifySort {
  margin-top: 20px;
  position: relative;
  li {
    display: inline-block;
    h5 {
      display: inline-block;
      margin-left: 5px;
      font-size: 16.6px;
    }
    img {
      vertical-align: middle;
    }
  }
  .oval {
    position: absolute;
    top: 40px;
    right: 0;
    height: 30px;
    width: 50px;
    line-height: 20px;
    text-align: center;
    border-radius: 5px;
    background: rgb(240, 190, 53);
    font-size: 10px;
    font-weight: 500;
    color: #fff;
    z-index: -1;
  }
}
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

.threeImg .Containt ul li > img {
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
.ulBox {
  ul {
    display: flex;
    li {
      flex: 1;
      display: inline-block;
      text-align: center;
      img {
        margin-top: 10px;
      }
      span {
        height: 35px;
        cursor: pointer;
      }
    }
  }
  .firstBox {
    background: #fff;
  }
  .secondBox {
    background: #ccc;
    li {
      margin: 27px 0;
      cursor: pointer;
    }
  }
  .thirdBox {
    border-top: 1px solid#b0b0b0;
    background: #ccc;
    li {
      margin: 15px 0;
      cursor: pointer;
      line-height: 44px;
      img {
        vertical-align: middle;
      }
    }
  }
}
.end {
  ul {
    li {
      display: inline-block;
    }
  }
  .endNav {
    margin-top: 20px;
    li {
      height: 30px;
      width: 80px;
      font-size: 14px;
      text-align: center;
      line-height: 30px;
      margin: 0 5px;
      border: 1px solid rgb(240, 190, 53);
      border-radius: 9px;
    }
  }
  .endBot {
    li {
      display: block;
      height: 250px;
      background: #fff;
      margin-top: 20px;
      border-bottom: 1px solid #ddd;
      width: 800px;
      > div {
        display: inline-block;
        span {
          p {
            overflow: hidden;
          }
        }
      }
      .imgBox {
        margin: 20px;
      }
      .fontBox {
        height: 209px;
        width: 385px;
        p {
          display: inline-block;
          height: 65px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        p:nth-child(2) {
          color: #bbb;
        }
        p:last-child {
          padding-top: 40px;
          box-sizing: border-box;
          width: 385px;
          color: #bbb;
          span {
            margin: 0 5px;
          }
        }
      }
    }
  }
}
.el-select .el-input {
  width: 110px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__arrow--left {
  left: 0;
}
.el-carousel__arrow--right {
  right: 0;
}
.el-carousel__arrow {
  border-radius: 0;
  width: 20px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__indicators {
  display: none;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
