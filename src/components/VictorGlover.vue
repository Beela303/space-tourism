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
                <p id="role">PILOT</p>
                <p id="name">Victor Glover</p>
                <p id="description">Pilot on the first operational flight of the SpaceX Crew Dragon to the International
                    Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member
                    of
                    Expedition 64, and served as a station systems flight engineer.
                </p>
                <div id="crew-nav">
                    <router-link to="/crew"><input type="radio" name="" id=""></router-link>
                    <router-link to="/crew/Mark-Shuttleworth"><input type="radio" name="" id=""></router-link>
                    <router-link to="/crew/Victor-Glover"><input type="radio" name="" id=""></router-link>
                    <router-link to="/crew/Anousheh-Ansari"><input type="radio" name="" id=""></router-link>
                </div>
            </div>

            <div id="image">
                <img src="../assets/crew/image-victor-glover.webp" alt="Victor Glover">
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>