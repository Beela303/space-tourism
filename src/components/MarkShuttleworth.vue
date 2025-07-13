<script>
export default {
    data() {
        return {
            screenWidth: window.innerWidth,
        };
    },

    computed: {
        crewbackgroundClass() {
            if (this.screenWidth < 768) {
                return "crew-mobile-bg";
            } else {
                return "crew-desktop-bg";
            }
        },

        crewpageBackgroundClass() {
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
    <div id="crew-body" :class="[crewbackgroundClass, crewpageBackgroundClass]">
        <p id="title"><span id="title-number">02</span>MEET YOUR CREW</p>

        <div id="crew">
            <div id="crew-info">
                <p id="role">MISSION SPECIALIST</p>
                <p id="name">Mark Shuttleworth</p>
                <p id="description">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
                    the
                    Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space
                    as a
                    space tourist.
                </p>

                <div id="crew-nav">
                    <router-link to="/crew"><input type="radio" name="" id=""></router-link>
                    <router-link to="/crew/Mark-Shuttleworth"><input type="radio" name="" id=""></router-link>
                    <router-link to="/crew/Victor-Glover"><input type="radio" name="" id=""></router-link>
                    <router-link to="/crew/Anousheh-Ansari"><input type="radio" name="" id=""></router-link>
                </div>
            </div>

            <div id="image">
                <img src="../assets/crew/image-mark-shuttleworth.webp" alt="Mark Shuttleworth">
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
