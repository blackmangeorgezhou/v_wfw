<template>
  <div class="v_home">
    <!-- 顶部图片 -->
    <div>
      <img class="w-100" :src="PNGs.TopBanner" alt="">
    </div>
    <!-- 学员信息 -->
    <div style="margin-bottom: 1rem">
      <div class="v_stu_info1">
        <div class="v_stu_info1_h" style="display: flex">
          <div v-for="stu in studentInfos" :key="stu.stuCode" style="display: flex">
            <div v-if="activeName === stu.stuName" class="v_stu_active">
              <div class="v_stu_active_name"><p>{{stu.stuName.substring(stu.stuName.length - 1, stu.stuName.length)}}</p></div>
            </div>
            <div v-else class="v_stu_inactive">
              <p @click="active(stu.stuName)" class="v_stu_inactive_name">{{stu.stuName}}</p>
            </div>
            <img class="v_stu_info1_h" :src="activeName === stu.stuName ? PNGs.LeftBorder : PNGs.RightBorder" alt="左" srcset="">
          </div>

           <div class="v_stu_inactive">
              <p @click="addStu" class="v_stu_add">
                <span>+</span>
                <span>添加学员</span>
              </p>
            </div>
            <img class="v_stu_info1_h" :src="PNGs.RightBorder" alt="左" srcset="">
        </div>
      </div>
      <div class="v_stu_info">
        <div class="v_stu_info2">
          <div class="v_stu_info2_1">
            <p>
              <span class="v_stu_info2_1_C1">{{activeStuInfo.stuName}}</span>
              <span class="v_stu_info2_1_C2">{{activeStuInfo.stuCode}}</span>
            </p>
            <p style="margin-left: .625rem">
              <the-subject :subjects="activeStuInfo.subjects"></the-subject>
            </p>
          </div>
          <div class="v_stu_info2_2">
            <img :src="PNGs.QrCode" alt="二维码" srcset="">
          </div>
        </div>
      </div>
    </div>

    <!-- 学员服务 -->
    <div class="v_content">
      <div id="v_stu_service">
        <the-title :title="'学员服务'" :tClass="'font-size-20'"></the-title>
        <div class="v_stu_service_icon">
          <the-icon v-for="d in stuServices" :info="d" :key="d.name" :width="pIconW"></the-icon>
        </div>
      </div>
    </div>
    <p class="v_item_gap">&nbsp;</p>

    <!-- 报名 -->
    <div class="v_content">
      <div class="v_sign">
        <the-title :title="'报名'" :tClass="'font-size-20'"></the-title>
        <div style="padding: .5rem 0">
          <p class="v_sign_item">报名</p>
          <div class="v_sign_item2">
            <p class="v_sign_item v_sign_item2_child">诊断</p>
            <p class="v_sign_item v_sign_item2_child">社群</p>
          </div>
        </div>
      </div>
    </div>
    <p class="v_item_gap">&nbsp;</p>

    <!-- 了解新东方 -->
    <div class="v_content">
      <div class="v_learnXDF">
        <the-title :title="'了解新东方'" :tClass="'font-size-20'"></the-title>
        <div class="v_stu_service_icon">
          <the-icon v-for="d in learnXDFs" :info="d" :key="d.name" :width="pIconW"></the-icon>
        </div>
      </div>
    </div>
    <p class="v_item_gap">&nbsp;</p>

    <!-- 活动 -->
    <div class="v_content">
      <div class="v_activity">
        <the-title :title="'活动'" :tClass="'font-size-20'"></the-title>
        <div class="v_stu_service_icon">
          <the-icon v-for="d in activities" :info="d" :key="d.name" :width="pIconW"></the-icon>
        </div>
      </div>
    </div>
    <p class="v_item_gap">&nbsp;</p>

    <!-- 学习 -->
    <div class="v_content">
      <div class="v_study">
        <the-title :title="'学习'" :tClass="'font-size-20'"></the-title>
        <div class="v_stu_service_icon">
          <the-icon v-for="d in studyItems" :info="d" :key="d.name" :width="pIconW"></the-icon>
        </div>
      </div>
    </div>
    <p class="v_item_gap">&nbsp;</p>

    <div class="v_footer">
      <p>咨询电话：<a href="tel:4008228682">400-8228-682</a></p>
      <p>版权所有：新东方教育科技集团有限公司</p>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import QrCode from '@/assets/images/qrCode.png'
import TopBanner from '@/assets/images/topBanner.png'
import LeftBorder from '@/assets/images/border_left.png'
import RightBorder from '@/assets/images/border_right.png'
import stuServiceIconTemp from '@/assets/images/PPC.png'

import TheIcon from '@/components/PIcon'
import TheTitle from '@/components/Title'
import TheSubject from '@/components/Subject'

export default {
  name: 'V_home',

  components: {
    TheIcon,
    TheTitle,
    TheSubject
  },

  mounted () {
    const servicesEle = document.getElementById('v_stu_service')
    const sW = servicesEle.clientWidth
    this.pIconW = sW / 4
  },

  computed: {
    activeStuInfo () {
      return this.studentInfos.find(x => x.stuName === this.activeName)
    }
  },

  data () {
    return {
      pIconW: 50,
      PNGs: {
        QrCode,
        TopBanner,
        LeftBorder,
        RightBorder,
        stuServiceIconTemp
      },

      stuServices: [
        {
          name: '我的课程',
          link: ''
        },
        {
          name: '订单查询',
          link: ''
        },
        {
          name: '客户之声',
          link: ''
        },
        {
          name: '二维码打卡',
          link: ''
        },
        {
          name: '自助转班',
          link: ''
        },
        {
          name: '预约补课',
          link: ''
        },
        {
          name: '班级微信群',
          link: ''
        },
        {
          name: '教材购买',
          link: ''
        },
        {
          name: '电子发票',
          link: ''
        },
        {
          name: '续班通道',
          link: ''
        },
        {
          name: '成长报告',
          link: ''
        },
        {
          name: '商家优惠',
          link: ''
        },
        {
          name: '关注班级',
          link: ''
        }
      ],

      learnXDFs: [
        {
          name: '课程简介',
          link: ''
        },
        {
          name: '附近校区',
          link: ''
        },
        {
          name: '教师介绍',
          link: ''
        },
        {
          name: '新东方简介',
          link: ''
        }
      ],

      activities: [
        {
          name: '老带新',
          link: ''
        },
        {
          name: '公益活动',
          link: ''
        }
      ],

      studyItems: [
        {
          name: '知识小课堂',
          link: ''
        },
        {
          name: '小店铺',
          link: ''
        }
      ],

      activeName: '苏小新',
      studentInfos: [
        {
          stuName: '苏小新',
          stuCode: 'XZ882294',
          subjects: ['语', '数', '英']
        }
      ]
    }
  },

  methods: {
    active (stuName) {
      this.activeName = stuName
    },

    addStu () {
      Toast.success('添加成功')

      if (this.studentInfos.length >= 2) {
        Toast.fail('暂无学员')
        return
      }

      this.studentInfos.push({
        stuName: '苏小东',
        stuCode: 'DZ882294',
        subjects: ['语', '数', '物']
      })
    }
  }
}
</script>

<style scoped>
.v_stu_info1{
  width: 95%;
  margin: 0 auto
}

.v_stu_info1_h {
  height: 30px;
}

.v_stu_active, .v_stu_inactive {
  width: 100px;
  border-radius: 8px 0 0;
  display: flex;
  /* align-items: center; */
  justify-content: center;
}

.v_stu_add {
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  color: #00bfaf;
}

.v_stu_active {
  background-color: #f0f0f0;
}

.v_stu_active_name {
  text-align: center;
  padding: 4px;
  color: #00bfaf;
  font-size: 28px;
  /* background-color:  #dfdede; */
  background-color: #f0f0f0;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  line-height: 50px;
  margin-top: -33px;
}

.v_stu_active_name>p:nth-child(1) {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dfdede;
  border-radius: 50%;
}

.v_stu_inactive_name {
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  color: #999
}

.v_stu_inactive {
  background-color: #fff;
}

.v_stu_info {
  width: 95%;
  padding: .875rem 0;
  margin: 0 auto;
  background-color: #f0f0f0;
  border-radius: 0 8px 8px;
}

.v_stu_info2 {
  padding: 0 .625rem;
}

.v_stu_info2, .v_stu_info2_1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.v_stu_info2_2>img {
  width: 35px;
}

.v_stu_info2_1_C1 {
  color: #666666
}

.v_stu_info2_1_C2 {
  color: #999999
}

.v_stu_info2_1_C1, .v_stu_info2_1_C2 {
  /* font-weight: 600 */
  font-size: 17px;
}

.v_stu_info2_1_subject {
  padding: .25rem;
  margin: .125rem;
  color: #fff;
  border-radius: 4px;
  background-color: #ff9900;
  font-size: 8px;
}

.v_stu_info_title, .v_stu_name {
  height: 3.5rem;
  width: 6rem;
  text-align: center;
  font-size: 1.25rem
}

.v_stu_name_active {
  background-color: #f0f0f0
}

.v_stu_name_inactive {
  background-color: #fff
}

.v_stu_info, .v_content {
  width: 95%;
  margin: 0 auto;
}

.v_stu_service_icon {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
}

.v_sign_item {
  height: 90px;
  border-radius: 8px;
  background-color: #009380;
  text-align: center;
  line-height: 90px;
  font-size: 26px;
  color: #ccc;
}

.v_sign_item2 {
  display: flex;
  justify-content: space-between;
  margin-top: .5rem
}

.v_sign_item2_child {
  font-size: 22px !important;
  width:48%
}

.v_item_gap {
  line-height: 1.5rem;
  background-color: #f5f5f5;
}

.v_footer {
  text-align: center;
  padding: 1rem 1rem .5rem;
  color: #999999;
}

.v_footer>p {
  line-height: 1.625rem
}
</style>
