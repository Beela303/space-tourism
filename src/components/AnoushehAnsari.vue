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
                <p id="role">FLIGHT ENGINEER</p>
                <p id="name">Anousheh Ansari</p>
                <p id="description">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former
                    NASA
                    astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>

                <div id="crew-nav">
                    <router-link to="/crew"><input type="radio" name="" id=""></router-link>
                    <router-link to="/crew/Mark-Shuttleworth"><input type="radio" name="" id=""></router-link>
                    <router-link to="/crew/Victor-Glover"><input type="radio" name="" id=""></router-link>
                    <router-link to="/crew/Anousheh-Ansari"><input type="radio" name="" id=""></router-link>
                </div>
            </div>

            <div id="image">
                <img src="../assets/crew/image-anousheh-ansari.webp" alt="Anousheh Ansari">
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
