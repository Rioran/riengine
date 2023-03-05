class RiEngine {
    constructor() {
        this.story = STORY;
        this.values = INI_SETTINGS;
        this.episode_old_id = null;
        this.episode_old_choice_id = null;
        this.episode_new_id = null;
        this.game_div = document.getElementById('game_div');
        this.goto(1);
    }
    goto(episode_id, choice_id = null) {
        this.episode_old_choice_id = choice_id;
        this.episode_new_id = episode_id;
        this._check_for_values_to_set();
        this._check_for_values_to_increment();
        this.game_div.innerHTML = this._get_episode_html();
        this.episode_old_id = this.episode_new_id;
    }
    _check_for_values_to_increment() {
        if (this.episode_old_choice_id === null) {return;}
        const choice = this.story[this.episode_old_id].choices[this.episode_old_choice_id];
        if (!('increment' in choice.result)) {return;}
        this._increment_values(choice.result.increment);
    }
    _increment_values(values) {
        for (const [key, value] of Object.entries(values)) {
            this.values[key] += value;
        }
    }
    _check_for_values_to_set() {
        if (this.episode_old_choice_id === null) {return;}
        const choice = this.story[this.episode_old_id].choices[this.episode_old_choice_id];
        if (!('set' in choice.result)) {return;}
        this._set_values(choice.result.set);
    }
    _set_values(values) {
        for (const [key, value] of Object.entries(values)) {
            this.values[key] = value;
        }
    }
    _get_choice_html(choice, index) {
        let div_classes = CHOICE_DIV_CLASS_DEFAULT;
        let onclick = `goto(${choice.result.goto}, ${index})`;
        let div_color = CHOICE_DIV_CLASS_WHITE;
        if ('recquired' in choice) {
            if (!this._are_requirements_met(choice)) {
                if (choice.recquired.type == 'hidden') {return '';}
                div_color = CHOICE_DIV_CLASS_RED;
                onclick = '';
            }
        }
        return `<div class="${div_classes}${div_color}" onclick="${onclick}">${choice.html}</div>`;
    }
    _are_requirements_met(choice) {
        console.log('Time to chekc reqs');
        for (const [key, value] of Object.entries(choice.recquired)) {
            console.log(`${key} - ${value}`);
            if (this.values[key] < value) {return false;}
        }
        console.log('Check passed');
        return true;
    }
    _get_choices_html(choices) {
        let result = '';
        for (const [index, choice] of choices.entries()) {
            result += this._get_choice_html(choice, index);
        }
        return result;
    }
    _get_episode_html() {
        let html = '';
        const episode = this.story[this.episode_new_id];
        html = `<div${INFO_DIV_ARGS}>${episode.info}</div>`;
        html += this._get_choices_html(episode.choices);
        return html;
    }
}

game = new RiEngine();

function goto(episode_id, choice_id) {
    game.goto(episode_id, choice_id);
}
