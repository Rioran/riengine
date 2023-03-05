const INI_SETTINGS = { // list all values you'll use or suffer errors, numeric only
    "hp": 60,
    "attack": 4,
    "space_marine": 0,
    "assault_ship_pilot": 0,
    "combat_medic": 0,
}

const STORY = {
    1: { // game always starts with 1 on screen
        "info": "<h3>The story begins with a headache...</h3>Siren. Red light is flashing. You are slowly getting conscious.<br><br>Remember who you are?",
        "choices": [
            {
                "html": "A space marine.",
                "result": {
                    "set": {
                        "space_marine": 1,
                    },
                    "goto": 2,
                }
            }, {
                "html": "An assault ship pilot.",
                "result": {
                    "set": {
                        "assault_ship_pilot": 1,
                    },
                    "goto": 2,
                }
            }, {
                "html": "A combat medic.",
                "result": {
                    "set": {
                        "combat_medic": 1,
                    },
                    "goto": 2,
                }
            }
        ],
    },
    2: {
        "info": "<h3>Caution!</h3>Nearby wire is bursting with electric sparks. And it's nearing you. Though your seatbelt got stuck...",
        "choices": [
            {
                "html": "Violently shake and push against the belt. It'll probably hurt...",
                "result": {
                    "increment": {
                        "hp": -4,
                    },
                    "goto": 4,
                }
            }, {
                "html": "Allow wire to zip you. It'll hurt a lot...",
                "result": {
                    "increment": {
                        "hp": -7,
                    },
                    "goto": 3,
                }
            }, {
                "html": "Luckily, space marines carry a knife just for the occasion.",
                "recquired": {
                    "type": "hidden",
                    "space_marine": 1,
                },
                "result": {
                    "goto": 4,
                }
            }
        ],
    },
    3: {
        "info": "<h3>Ouch! For real!</h3>You are smelling your burnt flash. Though, activated by electricity, your belt mechanism clicked promissingly.",
        "choices": [
            {
                "html": "Sheesh, let's hurry out of this doom chair!",
                "result": {
                    "goto": 4,
                }
            }
        ],
    },
    4: {
        "info": "<h3>One minor effort later</h3>You observe a small pilot cabin with several empty seats. Not a soul around. No vision through a front glass. A loud noise of air leaving the ship.<br><br>Door to the next room is covered with steaming blaster shots.",
        "choices": [
            {
                "html": "I feel healthy.",
                "recquired": {
                    "type": "normal",
                    "hp": 60,
                },
                "result": {
                    "goto": 1,
                }
            },
            {
                "html": "I better check my gas mask.",
                "result": {
                    "goto": 5,
                }
            },
            {
                "html": "Hey, door, please open.",
                "result": {
                    "goto": 7,
                }
            },
            {
                "html": "I want to turn on the front glass visors.",
                "result": {
                    "goto": 8,
                }
            },
        ],
    }
}