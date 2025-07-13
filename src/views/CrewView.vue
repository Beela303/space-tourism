<script>
import DouglasHurley from '@/components/DouglasHurley.vue';

export default {
    components: {
        DouglasHurley,
    },

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

        <DouglasHurley />
    </div>
</template>

<style lang="scss">
@import '../assets/variables-mixins.scss';

.crew-desktop-bg {
    background-image: url("../assets/crew/background-crew-desktop.jpg") !important;
}

.crew-mobile-bg {
    background-image: url("../assets/crew/background-crew-tablet.jpg") !important;
}


#crew-body {
    padding: 48px 165px;
    padding-bottom: 0;

    p {
        @include TEXT-PRESET-5;
        color: $WHITE;

        #title-number {
            @include TITLE-NUMBER;

            font-size: 28px;
            margin-right: 28px;
        }
    }

    #crew {
        color: $WHITE;
        display: flex;

        #crew-info {
            width: 50%;
            margin-top: 197px;

            #role {
                @include TEXT-PRESET-4;
                opacity: 50.42%;
                margin-bottom: 16px;
            }

            #name {
                @include TEXT-PRESET-3;
                margin-bottom: 24px;
            }

            #description {
                @include TEXT-PRESET-9;
                color: $BLUE-300;

                margin-bottom: 197px;
            }

            #crew-nav {
                margin-top: 40px;
                margin-bottom: 48px;

                a {
                    input {
                        color: #979797;

                        width: 15px;
                        height: 15px;
                        margin-right: 40px;

                        cursor: pointer;

                        &:hover {
                            color: $WHITE;
                        }
                    }
                }
            }
        }

        #image {
            width: 50%;

            img {
                height: 100vh;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    #crew-body {
        padding: 40px;
        padding-bottom: 0;

        p {
            #title-number {
                font-size: 20px;
                margin-right: 24px;
            }
        }

        #crew {
            text-align: center;
            justify-content: center;

            display: block;

            #crew-info {
                width: 100%;
                margin-top: 24px;

                #role {
                    margin-top: 40px;
                    opacity: 50%;
                }

                #description {
                    margin-bottom: 24px;
                }

                #crew-nav {
                    margin-top: 0;
                    margin-bottom: 32px;

                    a {
                        input {
                            width: 10px;
                            height: 10px;

                            margin-right: 16px;
                        }
                    }
                }
            }

            #image {
                width: 100%;

                img {
                    height: 50vh;
                }
            }
        }
    }

}

@media screen and (max-width: 375px) {
    body {
        background-image: url("../assets/crew/background-crew-mobile.jpg") !important;
    }

    #crew-body {
        padding: 24px;
        padding: 0;

        p {
            text-align: center;

            #title-number {
                font-size: 16px;
            }
        }

        #crew {
            #crew-info {
                margin-top: 24px;

                #role {
                    margin-top: 40px;
                }

                #description {
                    margin-top: 8px;
                    margin-bottom: 36px;
                }

            }

            #image {
                margin-top: 32px;
            }
        }
    }
}
</style>