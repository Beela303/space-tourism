<template>
    <div id="destination">
        <p id="title"><span id="title-number">01</span>PICK YOUR DESTINATION</p>

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

                <p id="planet-title">TITAN</p>

                <p id="planet-description">
                    The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home
                    (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                </p>

                <hr />

                <div id="info">
                    <div id="distance">
                        <p class="info-title">AVG. DISTANCE</p>
                        <p class="info-num-days">1.6 BIL. KM</p>
                    </div>

                    <div id="travel-time">
                        <p class="info-title">EST. TRAVEL TIME</p>
                        <p class="info-num-days">7 YEARS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>