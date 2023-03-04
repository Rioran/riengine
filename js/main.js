class RiEngine {
    constructor() {
        this.story = STORY;
        this.game_div = document.getElementById('game_div');
        this.goto(1);
    }
    goto(episode_id) {
        let html = '';
        const episode = this.story[episode_id];
        html = `<div${INFO_DIV_ARGS}>${episode.info}</div>`;
        html += this._get_choices_html(episode.choices);
        this.game_div.innerHTML = html;
    }
    _get_choice_html(choice) {
        return `<div${CHOICE_DIV_ARGS} onclick="goto(${choice.result.goto})">${choice.html}</div>`;
    }
    _get_choices_html(choices) {
        let result = '', choice = 0;
        for (choice of choices) {
            result += this._get_choice_html(choice);
        }
        return result;
    }
}

game = new RiEngine();

function goto(episode_id) {
    game.goto(episode_id);
}
