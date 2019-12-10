<template>
  <div class="v_home">
    <div>
      <img class="w-100" :src="PNGs.TopBanner" alt="">
    </div>
    <div class="v_stu_info">
      <div class="v_stu_info_title v_stu_name_active">
        <div class="v_stu_name">
          <div>
            <div>新</div>
          </div>
        </div>
      </div>
      <p></p>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import QrCode from '@/assets/images/qrCode.png'
import TopBanner from '@/assets/images/topBanner.png'
import LeftBorder from '@/assets/images/border_left.png'
import RightBorder from '@/assets/images/border_right.png'

export default {
  name: 'V_home',
  data () {
    return {
      PNGs: {
        QrCode,
        TopBanner,
        LeftBorder,
        RightBorder
      }
    }
  }
}
</script>

<style scoped>
.v_stu_info {
  width: 95%;
  margin: 0 auto
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
</style>
