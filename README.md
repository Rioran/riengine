# Riengine
Rioran engine for an interactive book experience.

## Playable demo:
https://rioran.github.io/riengine/game

## TODO:
- main-loop like class
    - for changing questions and vizzez
    - storing the shared state
- class for a single question
    - to rule conditions
    - to force to goto a specific question if conditions are met (loss of hp == game over screen)
    - mechanic of limits
- allow players to make inputs like strings and numbers
- play sounds on episode opening

## DONE:
- basic movement through nodes of story
- shared state for values
- choices can increment values
- choices can set values
- marked choices are hidden if requirements are not met
- default choices are visible but colored if requirements are not met
