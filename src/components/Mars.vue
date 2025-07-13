<template>
    <div id="destination">
        <p id="title"><span id="title-number">01</span>PICK YOUR DESTINATION</p>

        <div id="planet">
            <div id="image">
                <img src="../assets/destination//image-mars.webp" alt="Mars">
            </div>

            <div id="description">
                <div id="other-planets">
                    <ul>
                        <li>
                            <router-link exact-active-class="active-destination" to="/destination">Moon</router-link>
                        </li>
                        <li>
                            <router-link exact-active-class="active-destination"
                                to="/destination/mars">Mars</router-link>
                        </li>
                        <li>
                            <router-link exact-active-class="active-destination"
                                to="/destination/europa">Europa</router-link>
                        </li>
                        <li>
                            <router-link exact-active-class="active-destination"
                                to="/destination/titan">Titan</router-link>
                        </li>
                    </ul>
                </div>

                <p id="planet-title">MARS</p>

                <p id="planet-description">
                    Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest
                    planetary mountain in our solar system. It’s two and a half times the size of Everest!
                </p>

                <hr />

                <div id="info">
                    <div id="distance">
                        <p class="info-title">AVG. DISTANCE</p>
                        <p class="info-num-days">225 MIL. KM</p>
                    </div>

                    <div id="travel-time">
                        <p class="info-title">EST. TRAVEL TIME</p>
                        <p class="info-num-days">9 MONTHS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>