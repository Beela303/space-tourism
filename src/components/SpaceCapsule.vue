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
                <p id="transport">SPACE CAPSULE</p>
                <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the
                    Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It
                    includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
            </div>

            <div id="image">
                <img src="../assets/technology/image-space-capsule-portrait.jpg" id="img-desktop" alt="Space Capsule">
                <img src="../assets/technology/image-space-capsule-landscape.jpg" id="img-tablet" alt="Space Capsule">
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>