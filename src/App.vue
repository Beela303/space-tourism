<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
  //COLORS
  $BLUE-900: #0B0D17;
  $BLUE-900: #D0D6F9;
  $WHITE: #FFFFFF;

  //TYPOGRAPHY
  $TEXT-PRESET-1-FONT: "Bellefair", serif;
  $TEXT-PRESET-5-FONT: "Barlow Condensed", sans-serif;
  $TEXT-PRESET-9-FONT: "Barlow", sans-serif;

  //MIXIN
  @mixin TEXT-PRESET-1 {
    font-family: $TEXT-PRESET-1-FONT;
    font-size: 144px;

    line-height: normal;
    letter-spacing: 0;
  }

  @mixin TEXT-PRESET-2 {
    font-family: $TEXT-PRESET-1-FONT;
    font-size: 100px;

    line-height: normal;
    letter-spacing: 0;
  }

  @mixin TEXT-PRESET-3 {
    font-family: $TEXT-PRESET-1-FONT;
    font-size: 56px;

    line-height: normal;
    letter-spacing: 0;
  }

  @mixin TEXT-PRESET-4 {
    font-family: $TEXT-PRESET-1-FONT;
    font-size: 32px;

    line-height: normal;
    letter-spacing: 0;
  }

  @mixin TEXT-PRESET-5 {
    font-family: $TEXT-PRESET-5-FONT;
    font-size: 28px;

    line-height: normal;
    letter-spacing: 4px;
  }

  @mixin TEXT-PRESET-6 {
    font-family: $TEXT-PRESET-1-FONT;
    font-size: 28px;

    line-height: normal;
    letter-spacing: 0;
  }

  @mixin TEXT-PRESET-7 {
    font-family: $TEXT-PRESET-5-FONT;
    font-size: 14px;

    line-height: normal;
    letter-spacing: 2px;
  }

  @mixin TEXT-PRESET-8 {
    font-family: $TEXT-PRESET-5-FONT;
    font-size: 16px;

    line-height: normal;
    letter-spacing: 2px;
  }

  @mixin TEXT-PRESET-9 {
    font-family: $TEXT-PRESET-9-FONT;
    font-size: 18px;

    line-height: normal;
    letter-spacing: 0;
  }

  // SPACING
  $SPACING-1600: 128px;
  $SPACING-1200: 96px;
  $SPACING-1000: 80px;
  $SPACING-800: 64px;
  $SPACING-600: 48px;
  $SPACING-500: 40px;
  $SPACING-400: 32px;
  $SPACING-300: 24px;
  $SPACING-200: 16px;
  $SPACING-150: 12px;
  $SPACING-100: 8px;
  $SPACING-50: 4px;
  $SPACING-25: 2px;



  /*.pollen {
    @include TEXT-PRESET-1;
  }*/

  // GENERAL
    
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  //  font-family: 'sansita', sans-serif;

    text-decoration: none;
  }

  body {
    overflow-x: hidden;
  }

  button {
    appearance: none;
    border: none;
    outline: none;
    background: none;

    cursor: pointer;
  }

  li {
    list-style-type: none;
  }


</style>