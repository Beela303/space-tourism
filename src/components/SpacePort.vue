<script>
import Vehicle from '@/components/Vehicle.vue';

export default {
    components: {
        Vehicle,
    },

    data() {
        return {
            screenWidth: window.innerWidth,
        };
    },

    computed: {
        techbackgroundClass() {
            if (this.screenWidth < 768) {
                return "tech-mobile-bg";
            } else {
                return "tech-desktop-bg";
            }
        },

        techpageBackgroundClass() {
            const routeName = this.$route.name;
            return `${routeName}-page-bg`;
        },
    },

    mounted() {
        window.addEventListener("resize", this.updateScreenWidth);
    },

    beforeDestroy() {
        window.removeEventListener("resize", this.updateScreenWidth);
    },

    methods: {
        updateScreenWidth() {
            this.screenWidth = window.innerWidth;
        },
    },
}
</script>

<template>
    <div id="transportation" :class="[techbackgroundClass, techpageBackgroundClass]">
        <p id="title"><span id="title-number">03</span>SPACE LAUNCH 101</p>

        <div id="buttons">
            <router-link exact-active-class="active-tech" to="/technology"><button
                    type="button">1</button></router-link>
            <router-link exact-active-class="active-tech" to="/technology/spaceport"><button
                    type="button">2</button></router-link>
            <router-link exact-active-class="active-tech" to="/technology/spacecapsule"><button
                    type="button">3</button></router-link>
        </div>

        <div id="info">
            <p id="terminology">THE TERMINOLOGY...</p>
            <p id="transport">SPACEPORT</p>
            <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport
                for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated
                to take advantage of the Earth’s rotation for launch.</p>
        </div>

        <div id="image">
            <img src="../assets/technology/image-spaceport-portrait.jpg" id="img-desktop" alt="Spaceport">
            <img src="../assets/technology/image-spaceport-landscape.jpg" id="img-tablet" alt="Spaceport">
        </div>
    </div>
</template>

<style lang="scss"></style>