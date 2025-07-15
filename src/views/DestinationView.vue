<script>
import Moon from '../components/Moon.vue'

export default {
    components: {
        Moon,
    },
}
</script>

<template>
    <div id="destination">
        <p id="title"><span id="title-number">01</span>PICK YOUR DESTINATION</p>

        <Moon />
    </div>
</template>

<style lang="scss">
@import '../assets/variables-mixins.scss';

body {
    background-image: url("../assets/destination/background-destination-desktop.jpg");
}

.active-destination {
    padding-bottom: 13px;
    border-bottom: 5px solid $WHITE;
}

#destination {
    padding: 48px 165px;

    p {
        @include TEXT-PRESET-5;
        color: $WHITE;

        #title-number {
            @include TITLE-NUMBER;
        }
    }

    #planet {
        margin-top: 70px; //133

        display: flex;
        justify-content: space-between;

        #image {
            margin-right: 79px;

            //img {
            //width: 539px;
            //height: 734px;
            //}
        }

        #description {
            #other-planets {
                ul {
                    margin-bottom: 40px;

                    display: flex;

                    li {
                        @include TEXT-PRESET-8;

                        margin-right: 13px;

                        &:hover {
                            padding-bottom: 13px;
                            border-bottom: 5px solid $WHITE;
                        }

                        a {
                            color: $WHITE;
                        }
                    }
                }
            }

            #planet-title {
                @include TEXT-PRESET-2;
                color: $WHITE;

                margin-bottom: 16px;
            }

            #planet-description {
                @include TEXT-PRESET-9;
                color: $BLUE-300;
            }

            hr {
                margin: 40px 0;
            }

            #info {
                display: flex;
                margin-bottom: 181px;

                #distance,
                #travel-time {
                    width: 50%;
                }

                .info-title {
                    @include TEXT-PRESET-7;
                    color: $BLUE-300;

                    height: 17px;
                    margin-bottom: 12px;
                }

                .info-num-days {
                    @include TEXT-PRESET-6;
                    color: $WHITE;

                    height: 32px;
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    body {
        background-image: url("../assets/destination/background-destination-tablet.jpg");
    }

    #destination {
        padding: 40px;

        #planet {
            width: 100%;
            margin-top: 36.2px;

            justify-self: center;
            justify-content: center;
            text-align: center;

            display: block;

            #image {
                margin-right: 0;

                img {
                    width: 300px;
                    height: 300px;
                }
            }

            #description {
                #other-planets {
                    ul {
                        margin-top: 43px;
                        justify-content: center;

                        li {
                            margin-right: 32px;
                        }
                    }
                }

                #planet-title {
                    margin-top: 24px;
                }

                #planet-description {
                    margin-top: 16px;
                }

                hr {
                    margin: 24px 0;
                }

                #info {
                    margin-bottom: 51.5px;
                }
            }
        }
    }
}

@media screen and (max-width: 375px) {
    body {
        background-image: url("../assets/destination/background-destination-tablet.jpg") !important;
    }

    #destination {
        padding: 24px;

        #title {
            text-align: center;
        }

        #planet {
            margin-top: 26.5px;

            #image {
                img {
                    width: 150px;
                    height: 150px;
                }
            }

            #description {
                #other-planets {
                    ul {
                        margin-top: 32px;
                    }
                }

                #planet-title {
                    font-size: 50px;
                }

                #info {
                    display: block;

                    #distance,
                    #travel-time {
                        width: 100%;
                    }

                    .info-num-days {
                        margin-bottom: 24px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 330px) {
    #destination {
        padding: 5px;

        #other-planets {
            ul {
                overflow-x: scroll;
            }
        }
    }
}
</style>