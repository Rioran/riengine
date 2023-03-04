const STORY = {
    1: {
        "info": "<h1>Welcome to the game!</h1><p>Choose your class:</p>",
        "choices": [
            {
                "html": "<p>I will be a pokemon trainer!</p>",
                "result": {
                    "set": {
                        "pokemon_trainer": 1,
                    },
                    "goto": 2,
                }
            }, {
                "html": "<p>Let me be a dovakin.</p>",
                "result": {
                    "set": {
                        "dovakin": 1,
                    },
                    "goto": 2,
                }
            }
        ]
    },
    2: {
        "info": "<h1>You made it to the second question!</h1>",
        "choices": [
            {
                "html": "<p>Let me get back to the start.</p>",
                "result": {
                    "goto": 1,
                }
            },
        ]
    },
}