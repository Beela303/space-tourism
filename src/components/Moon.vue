<template>
    <div id="planet">
        <div id="image">
            <img src="../assets/destination/image-moon.webp" alt="The Moon">
        </div>

        <div id="description">
            <div id="other-planets">
                <ul>
                    <li>
                        <router-link exact-active-class="active-destination" to="/destination">Moon</router-link>
                    </li>
                    <li>
                        <router-link exact-active-class="active-destination" to="/destination/mars">Mars</router-link>
                    </li>
                    <li>
                        <router-link exact-active-class="active-destination" to="/destination/europa">Europa</router-link>
                    </li>
                    <li>
                        <router-link exact-active-class="active-destination" to="/destination/titan">Titan</router-link>
                    </li>
                </ul>
            </div>

            <p id="planet-title">MOON</p>

            <p id="planet-description">
                See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain
                perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2
                and Apollo 11 landing sites.
            </p>

            <hr />

            <div id="info">
                <div id="distance">
                    <p class="info-title">AVG. DISTANCE</p>
                    <p class="info-num-days">384,400 KM</p>
                </div>

                <div id="travel-time">
                    <p class="info-title">EST. TRAVEL TIME</p>
                    <p class="info-num-days">3 DAYS</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>