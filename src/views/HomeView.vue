<script setup>
</script>

<template>
  <div id="home">
    <div id="text">
      <p>SO, YOU WANT TO TRAVEL TO <br><span id="space-text">SPACE</span></p>
      <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of
        on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>

    <div id="circle">
      <router-link to="/destination"><button type="button">EXPLORE</button></router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/variables-mixins.scss';

body {
  overflow-x: hidden !important;

  background-image: url("../assets/home/background-home-desktop.jpg") !important;
}

#home {
  padding: 128px 165px; //128 165
  display: flex;

  #text {
    //width: 540px;
    //height: 343px;
    //margin-top: 90px; //289

    p {
      @include TEXT-PRESET-5;
      color: $BLUE-300;

      #space-text {
        @include TEXT-PRESET-1;
        color: $WHITE;

        margin-top: 24px;
      }

      &:last-child {
        @include TEXT-PRESET-9;
        color: $BLUE-300;
        margin-top: 40px;
      }
    }
  }

  #circle {
    margin-top: 40px;
    margin-left: 200px; //268

    button {
      @include TEXT-PRESET-4;

      color: $BLUE-900;
      background: $WHITE;

      width: 272px;
      height: 272px;

      border-radius: 50%;

      &:hover {
        width: 300px;
        height: 300px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  body {
    background-image: url("../assets/home/background-home-tablet.jpg") !important;
  }

  #home {
    height: 334px;

    padding: 128px auto; //128 50

    justify-content: center !important;
    justify-self: center !important;
    text-align: center !important;

    display: block;

    #circle {
      margin-left: 0;

      button {
        margin-top: 66px;
        margin-bottom: 128px;

        justify-self: center;
        text-align: center;
        justify-content: center;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  #space-text {
    font-size: 60px !important;
  }

  #circle {
    button {
      font-size: 20px !important;
    }
  }
}

@media screen and (max-width: 375px) {
  body {
    background-image: url("../assets/home/background-home-mobile.jpg");
  }

  #home {
    height: 294px;
    padding: 24px;
    padding-bottom: 120px;

    #circle {
      button {
        width: 141px;
        height: 141px;

        margin-top: 119px;
        margin-bottom: 143px;

        &:hover {
          width: 160px;
          height: 160px;
        }
      }
    }
  }
}
</style>