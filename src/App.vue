<template>
  <div id="app">
    <div class="background">
      <div class="img">
        <img class="kv_bg" src="./assets/img/kv_bg.png" alt />
        <div class="top">
          <img class="logo_nav" src="./assets/img/logo_nav.png" alt />
          <div class="nav">
            <div class="home">
              <img class="home_on" src="./assets/img/home_on.png" alt />
            </div>
            <div class="sale">SALE</div>
            <div class="marketplace">MARKETPLACE</div>
            <div class="staking">STAKING</div>
          </div>
        </div>
        <div class="center">
          <img class="slogan" src="./assets/img/slogan.png" alt />
        </div>
        <div class="btn">
          <div class="button">
            <div class="button_1">
              <div class="span">Whitepaper</div>
            </div>
            <!-- Whitepaper -->
            <div class="button_2">
              <div class="span">Marketplace</div>
            </div>
            <!-- Marketplace -->
          </div>
        </div>
      </div>
    </div>
    <div class="metaverse">
      <div class="img">
        <img class="part1_bg1" src="./assets/img/part1_bg1.png" alt />
        <div class="kuang">
          <img class="part1_kuang_1" src="./assets/img/part1_kuang_1.png" alt />
        </div>
        <div class="bottom">
          <img class="part1_pic1" src="./assets/img/part1_pic1.png" alt />
        </div>
        <div class="content">
          <div class="title">ZOMBIE METAVERSE</div>
          <div class="box">
            <div class="line">Zombiekingdom NFT-gameFIi ecosystem.</div>
            <div
              class="line"
            >The game combines different types of games, breaking down the barriers between games, allowing players to use the same character to enter the zombie metaverse.</div>
            <div
              class="line"
            >It enables players to come together to build and manage a new metaverse and create a unique community culture within the zombie metaverse</div>
          </div>
        </div>
      </div>
    </div>
    <div class="role">
      <div class="img">
        <img class="part2_bg1" src="./assets/img/part2_bg1.png" alt />
        <div class="content">
          <div class="role_er">
            <img v-if="num == 1" class="boy_pic1" src="./assets/img/women_pic1_l.png" alt />
            <img v-if="num == 2" class="boy_pic1" src="./assets/img/men_pic1_l.png" alt />
            <img v-if="num == 3" class="boy_pic1" src="./assets/img/boy_pic1_l.png" alt />
            <img v-if="num == 4" class="boy_pic1" src="./assets/img/girl_pic1_l.png" alt />
            <img class="part2_bottom" src="./assets/img/part2_bottom.png" alt />
            <img v-if="num == 1" class="boy_bg2" src="./assets/img/women_bg2.png" alt />
            <img v-if="num == 2" class="boy_bg2" src="./assets/img/men_bg2.png" alt />
            <img v-if="num == 3" class="boy_bg2" src="./assets/img/boy_bg2.png" alt />
            <img v-if="num == 4" class="boy_bg2" src="./assets/img/girl_bg2.png" alt />
          </div>
        </div>
        <div class="bottom">
          <div class="box">
            <div class="box_1" @click="change(1)">
              <img v-if="num == 1" class="part2_bg3" src="./assets/img/women_bg1.png" alt />
              <img v-else class="part2_bg3" src="./assets/img/part2_bg3.png" alt />
              <div v-if="num == 1" class="img_checked">
                <img class="women_pic2_s" src="./assets/img/women_pic2_s.png" alt />
              </div>
              <div v-else class="img">
                <img class="women_pic3_s" src="./assets/img/women_pic3_s.png" alt />
              </div>
              <div class="box_name">
                <div class="span">JENNY</div>
              </div>
            </div>
            <div class="box_2" @click="change(2)">
              <img v-if="num == 2" class="part2_bg3" src="./assets/img/men_bg1.png" alt />
              <img v-else class="part2_bg3" src="./assets/img/part2_bg3.png" alt />
              <div v-if="num == 2" class="img_checked">
                <img class="women_pic2_s" src="./assets/img/men_pic2_s.png" alt />
              </div>
              <div v-else class="img">
                <img class="women_pic3_s" src="./assets/img/men_pic3_s.png" alt />
              </div>
              <div class="box_name">
                <div class="span">JANNY</div>
              </div>
            </div>
            <div class="box_3" @click="change(3)">
              <img v-if="num == 3" class="part2_bg3" src="./assets/img/boy_bg1.png" alt />
              <img v-else class="part2_bg3" src="./assets/img/part2_bg3.png" alt />
              <div v-if="num == 3" class="img_checked">
                <img class="women_pic2_s" src="./assets/img/bog_pic2_s.png" alt />
              </div>
              <div v-else class="img">
                <img class="women_pic3_s" src="./assets/img/bog_pic3_s.png" alt />
              </div>
              <div class="box_name">
                <div class="span">DENNY</div>
              </div>
            </div>
            <div class="box_4" @click="change(4)">
              <img v-if="num == 4" class="part2_bg3" src="./assets/img/girl_bg1.png" alt />
              <img v-else class="part2_bg3" src="./assets/img/part2_bg3.png" alt />
              <div v-if="num == 4" class="img_checked">
                <img class="women_pic2_s" src="./assets/img/girl_pic2_s.png" alt />
              </div>
              <div v-else class="img">
                <img class="women_pic3_s" src="./assets/img/girl_pic3_s.png" alt />
              </div>
              <div class="box_name">
                <div class="span">FIVE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrestle">
      <div class="img">
        <img class="part3_bg" src="./assets/img/part3_bg.png" alt />
        <div class="content">
          <img class="part_pic1" src="./assets/img/part_pic1.png" alt="">
          <div class="img">
            <img class="Arena" src="./assets/img/Arena.png" alt="">
          </div>
          <div class="text">
            <div class="span">"Arena" is the main mode of player-versus-player (PvP) and the only way to get the ZOB.</div>
          </div>
          <!-- <div id="lottie"></div> -->
          <!-- <div id="bm" style="width: 500px;height: 500px"></div> -->
          <!-- <canvas id="canvas" width="398" height="588"></canvas> -->
        </div>
      </div>
    </div>
    <div class="mainland">
      <div class="img">
        <img class="part4_bg" src="./assets/img/part4_bg.png" alt />
        <div class="content">
          <div class="box">
            <div class="box_1">
              <div class="kuang">
                <img src="./assets/img/landloard1_bg.png" alt />
              </div>
              <div class="top">
                <img src="./assets/img/Landlord 1.png" alt />
              </div>
              <div class="text">
                <div class="text_1">Landlord</div>
                <div class="text_2">1</div>
              </div>
            </div>
            <div class="box_2">
              <div class="kuang">
                <img src="./assets/img/landloard2_bg.png" alt />
              </div>
              <div class="top">
                <img src="./assets/img/landloard2.png" alt />
              </div>
              <div class="text">
                <div class="text_1">Landlord</div>
                <div class="text_2">2</div>
              </div>
            </div>
            <div class="box_3">
              <div class="kuang">
                <img src="./assets/img/landloard3_bg.png" alt />
              </div>
              <div class="top">
                <img src="./assets/img/landloard3.png" alt />
              </div>
              <div class="text">
                <div class="text_1">Landlord</div>
                <div class="text_2">3</div>
              </div>
            </div>
            <div class="box_4">
              <div class="kuang">
                <img src="./assets/img/landloard4_bg.png" alt />
              </div>
              <div class="top">
                <img src="./assets/img/landloard4.png" alt />
              </div>
              <div class="text">
                <div class="text_1">Landlord</div>
                <div class="text_2">4</div>
              </div>
            </div>
            <div class="box_5">
              <div class="kuang">
                <img src="./assets/img/landloard5_bg.png" alt />
              </div>
              <div class="top">
                <img src="./assets/img/landloard5.png" alt />
              </div>
              <div class="text">
                <div class="text_1">Landlord</div>
                <div class="text_2">5</div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="img">
              <img class="tips_landlords" src="./assets/img/tips_landlords.png" alt />
            </div>
            <div class="center">
              <div class="text">Landlords can upgrade and customize their holdings to</div>
              <div class="text">accommodate shops, summon beacons, produce resources, place</div>
              <div class="text">NPCs, and even serve as access points to dungeons!</div>
            </div>
            <div class="btn">
              <div class="button">
                <div class="span">Learn More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="laboratory">
      <div class="img">
        <img class="part5_bg" src="./assets/img/part5_bg.png" alt />
        <div class="content">
          <img class="part5_pic1" src="./assets/img/part5_pic1.png" alt />
          <div class="kuang">
            <img class="part5_kuang" src="./assets/img/part5_kuang.png" alt="">
          </div>
          <div class="title">
            <img class="shiyanshi" src="./assets/img/shiyanshi.png" alt="">
          </div>
          <div class="text_1">
            <div class="span">Invest in virus NFTs to synthesize</div>
            <div class="span">zombies, and the combination of viruses</div>
            <div class="span">will generate different zombies.</div>
          </div>
          <div class="text_2">
            <div class="span"> The heroes need to obtain more</div>
            <div class="span">synthesis information to combine zombie</div>
            <div class="span">NFTs</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import animationData from "./assets/img/Arena.json";
import lottie from "lottie-web";
export default {
  data() {
    return {
      num: 1,
    };
  },
  components: {},
  created() {
    
  },
  mounted() {
    // this.svgFun();
  },
  methods: {
    change(e) {
      this.num = e;
    },
    // svgFun() {
    //   let params = {
    //     container: document.getElementById("lottie"),
    //     renderer: "svg",
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //   };
    //   console.log(params);
      
    //   let anim;
    //   console.log(lottie.loadAnimation(params));
    //   anim = lottie.loadAnimation(params);
      
    // },
  }
};
</script>

<style lang='less'>
@import url("./assets/css/App.less");
#app {
  width: 100%;
  height: auto;
  margin: 0%;
  padding: 0%;
}
</style>
