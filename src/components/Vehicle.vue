<template>
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
            <p id="transport">LAUNCH VEHICLE</p>
            <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's
                surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in
                operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
        </div>

        <div id="image">
            <img src="../assets/technology/image-launch-vehicle-portrait.jpg" id="img-desktop" alt="Launch Vehicle">
            <img src="../assets/technology/image-launch-vehicle-landscape.jpg" id="img-tablet" alt="Launch Vehicle">
        </div>
    </div>
</template>

<style lang="scss"></style>