<script>
import Vehicle from '@/components/Vehicle.vue';

export default {
    components: {
        Vehicle,
    }
}
</script>

<template>
    <div id="technology">
        <p id="title"><span id="title-number">03</span>SPACE LAUNCH 101</p>

        <Vehicle />
    </div>
</template>

<style lang="scss">
@import '../assets/variables-mixins.scss';

body {
    background-image: url("../assets/technology/background-technology-desktop.jpg");
}

.active-tech button {
    color: $BLUE-900 !important;
    background-color: $WHITE;

    transition: $TRANSITION;
}

#technology {
    padding: 48px 165px;
    padding-right: 0;

    p {
        @include TEXT-PRESET-5;

        #title-number {
            @include TITLE-NUMBER;
            font-size: 28px;
        }
    }

    #transportation {
        display: flex;

        #buttons {
            width: 80px;
            height: 304px;

            margin-top: 215px;
            margin-bottom: 215px;
            margin-right: 64px;

            button {
                @include TEXT-PRESET-4;
                color: $WHITE;

                width: 80px;
                height: 80px;
                margin-bottom: 32px;

                border: 2px solid $WHITE;
                border-radius: 50%;

                transition: $TRANSITION;

                &:hover {
                    color: $BLUE-900;
                    background-color: $WHITE;

                    transition: $TRANSITION;
                }
            }
        }

        #info {
            width: 491px;
            height: 301px;

            margin-top: 215px;
            margin-bottom: 215px;
            margin-right: 32px;

            #terminology {
                @include TEXT-PRESET-4;
                color: $WHITE;

                margin-bottom: 16px;
                opacity: 50.42%;
            }

            #transport {
                @include TEXT-PRESET-3;
                color: $WHITE;

                margin-bottom: 24px;
            }

            p:last-child {
                @include TEXT-PRESET-9;
                color: $BLUE-300;
            }
        }

        #image {
            width: 50%;
            margin-top: 67px;
            margin-bottom: 67px;

            img {
                width: 600px;
                height: 600px;
            }
        }
    }
}

@media screen and (min-width: 769px) {
    #img-tablet {
        display: none;
    }
}

@media screen and (max-width: 768px) {
    body {
        background-image: url("../assets/technology/background-technology-tablet.jpg");
    }

    #img-desktop {
        display: none;
    }

    #technology {
        padding: 0;

        p {
            padding: 40px;
            padding-bottom: 24px;

            #title-number {
                font-size: 25px;
            }
        }

        #transportation {
            flex-flow: column;

            justify-content: center;
            text-align: center;

            #buttons {
                width: auto;
                height: auto;

                margin: 32px 40px 0 0;

                order: 2;

                button {
                    width: 56px;
                    height: 56px;

                    margin-right: 16px !important;
                    margin-bottom: 0;

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }

            #info {
                width: auto;
                height: 396px;

                margin: 40px 40px 0 0;

                order: 3;

                #transport {
                    margin-bottom: 16px;
                }
            }

            #image {
                width: 100%;
                margin: 64px 32px 0 0;

                order: 1;

                img {
                    width: 100%;
                    height: 357px;
                }
            }
        }
    }
}

@media screen and (max-width: 375px) {
    body {
        background-image: url("../assets/technology/background-technology-mobile.jpg") !important;
    }

    #technology {
        padding: 0;

        p {
            margin-bottom: 24px;
            text-align: center;

            #title-number {
                font-size: 16px;
            }
        }

        #transportation {
            #buttons {
                button {
                    width: 40px;
                    height: 40px;
                }
            }

            #info {
                height: 243px;
                margin: 40px 48px 0 0;
            }

            #image {
                margin: 64px 32px 0 0;

                img {
                    height: 258px;
                }
            }
        }
    }
}
</style>