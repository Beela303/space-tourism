<script>
</script>

<template>
    <div id="destination">
        <p id="title"><span id="title-number">01</span>PICK YOUR DESTINATION</p>

        <div id="planet">
            <div id="image">
                <img src="../assets/destination/image-europa.webp" alt="EUROPA">
            </div>

            <div id="description">
                <div id="other-planets">
                    <ul>
                        <li>
                            <router-link to="/destination">Moon</router-link>
                        </li>
                        <li>
                            <router-link to="/destination/mars">Mars</router-link>
                        </li>
                        <li>
                            <router-link to="/destination/europa">Europa</router-link>
                        </li>
                        <li>
                            <router-link to="/destination/titan">Titan</router-link>
                        </li>
                    </ul>
                </div>

                <p id="planet-title">Europa</p>

                <p id="planet-description">
                    The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an
                    icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your
                    snug wintery cabin.
                </p>

                <hr />

                <div id="info">
                    <div id="distance">
                        <p class="info-title">AVG. DISTANCE</p>
                        <p class="info-num-days">628 MIL. KM</p>
                    </div>

                    <div id="travel-time">
                        <p class="info-title">EST. TRAVEL TIME</p>
                        <p class="info-num-days">3 YEARS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>