<script>
export default {}
</script>

<template>
    <div id="technology">
        <p id="title"><span id="title-number">03</span>SPACE LAUNCH 101</p>

        <div id="transportation">

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
                <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the
                    seaport
                    for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
                    situated
                    to take advantage of the Earth’s rotation for launch.</p>
            </div>

            <div id="image">
                <img src="../assets/technology/image-spaceport-portrait.jpg" id="img-desktop" alt="Spaceport">
                <img src="../assets/technology/image-spaceport-landscape.jpg" id="img-tablet" alt="Spaceport">
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>