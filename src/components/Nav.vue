<script>
export default {
    data() {
        return {
            isActive: false
        };
    },

    methods: {
        openNav() {
            this.isActive = true;
        },

        closeNav() {
            this.isActive = false;
        }
    },
}
</script>

<template>
    <div id="nav">
        <div id="logo">
            <router-link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <g fill="none" fill-rule="evenodd">
                        <circle cx="24" cy="24" r="24" fill="#FFF" />
                        <path fill="#0B0D17"
                            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
                    </g>
                </svg>
            </router-link>
        </div>

        <hr>
        <div class="menu">
            <span id="open-menu" @click="openNav">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                    <g fill="#D0D6F9" fill-rule="evenodd">
                        <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                    </g>
                </svg>
            </span>
        </div>

        <div id="glass-nav" :class="{ active: isActive }">
            <div class="menu">
                <span id="close-menu" @click="closeNav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                        <g fill="#D0D6F9" fill-rule="evenodd">
                            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                        </g>
                    </svg>
                </span>
            </div>

            <ul>
                <li>
                    <router-link exact-active-class="active-page" to="/"><span class="menu-number">00</span>
                        HOME</router-link>
                </li>
                <li>
                    <router-link exact-active-class="active-page" to="/destination"><span class="menu-number">01</span>
                        DESTINATION</router-link>
                </li>
                <li>
                    <router-link exact-active-class="active-page" to="/crew"><span class="menu-number">02</span>
                        CREW</router-link>
                </li>
                <li>
                    <router-link exact-active-class="active-page" to="/technology"><span class="menu-number">03</span>
                        TECHNOLOGY</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/variables-mixins.scss';

.active-page {
    padding-bottom: 30px;
    border-bottom: 8px solid $WHITE;
}

#nav {
    display: flex;
    justify-content: space-between;

    hr {
        width: 560px;
        height: .5px;

        margin-top: 87.5px;
        margin-left: 64px;
    }

    #logo {
        width: 48px;
        height: 48px;

        padding: 64px;
    }

    #glass-nav {
        background-color: rgba(255, 255, 255, .1);

        //width: 768px; //900
        width: 90%;
        height: 96px;

        padding: 35px;
        margin-top: 38.5px;

        backdrop-filter: blur(10px);
        --webkit-backdrop-filter: blur(10px);

        /*
            border: 1px solid rgba(255, 255, 255, .3);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

            filter: blur(2px);
            --webkit-filter: blur(2px);*/

        ul {
            display: flex;
            justify-content: space-between;

            li {
                margin-right: 48px;

                &:first-child {
                    margin-left: 150px;
                }

                &:last-child {
                    margin-right: 64px;
                }

                &:hover {
                    border-bottom: 8px solid $WHITE;
                }

                a {
                    color: $WHITE;
                    @include TEXT-PRESET-8();
                    //font-size: 12px;

                    display: flex;

                    .menu-number {
                        margin-right: 12px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    #nav {

        hr {
            display: none;
        }

        #logo {
            width: 160px;
            padding: 24px;
        }

        #glass-nav {
            width: 640px;
            /* 640 */

            padding: 38.5px;
            margin-top: 0;

            ul {
                li {
                    &:first-child {
                        margin-left: 117px;
                    }

                    &:last-child {
                        margin-right: 40px;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 375px) {

    .menu,
    #open-menu,
    #close-menu {
        display: none;
    }
}

@media screen and (max-width: 375px) {
    .active-page {
        padding-right: 155px;
        padding-bottom: 0;

        border-bottom: 0;
        border-right: 5px solid $WHITE;
    }

    #nav {
        justify-content: space-between;

        #logo {
            width: 40px;
            height: 40px;
        }

        .menu {
            height: 85px;
            margin-right: 24px;
            margin-bottom: 48px;

            display: flex;
            justify-content: end;

            span {
                width: 24px;
                height: 21px;
            }

            #open-menu {
                padding: 33.5px;
            }
        }

        #glass-nav.active {
            display: block;
        }

        #glass-nav {
            background: $OPEN-MENU-BG;

            width: 100%;
            height: 100vh;

            /*width: 254px;
            margin-left: 121px;*/

            position: fixed;
            display: none;


            .menu {
                margin-right: 0px;
            }

            ul {
                margin-top: 48px;
                display: block;

                li {
                    margin-left: 32px;
                    margin-bottom: 32px;

                    &:first-child {
                        margin-left: 32px;
                    }

                    &:hover {
                        border-right: 200px solid $WHITE;
                    }

                    a {
                        font-size: 14px;
                    }
                }
            }
        }
    }

}
</style>