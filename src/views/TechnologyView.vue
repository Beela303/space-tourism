<script>
export default {

}
</script>

<template>
    <div id="technology">
        <p id="title"><span id="title-number">03</span>TECH</p>
    </div>
</template>

<style lang="scss">
@import '../assets/variables-mixins.scss';

body {
    background-image: url("../assets/technology/background-technology-desktop.jpg");
}

#technology {
    p {
        @include TEXT-PRESET-5;

        #title-number {
            @include TITLE-NUMBER;
        }
    }
}

@media screen and (max-width: 768px) {
    body {
        background-image: url("../assets/technology/background-technology-tablet.jpg");
    }
}

@media screen and (max-width: 375px) {
    body {
        background-image: url("../assets/technology/background-technology-mobile.jpg");
    }

    #technology {
        #title {
            text-align: center;
        }
    }
}
</style>