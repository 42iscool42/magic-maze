import game from './game';
import ui from './ui';
import helpers from './helpers';

export default {
    allActions: [],
    roles: '',
    id: '',
    name: '',

    setRoles(roles) {
        // Save my role in window.role
        this.roles = roles;

        if (game.players.length === 1) {
            this.allActions = roles;
            // First role in shuffled array
            this.roles = [roles[0]];

            let html = `<p>Current action: <span id="currentAction">${helpers.displayNameForRole(this.roles[0])}</span></p>
            <button id="nextAction">Next action</button>`;
            ui.setHTML('roles', html);

            ui.addEvent('nextAction', 'click', (e) => {
                if (ui.hasClass(e.srcElement.id, 'disabled')) return;
                this.nextAction();
            });
        }
    },

    nextAction() {
        let i = this.allActions.indexOf(this.roles[0]);
        i = i + 1 === this.allActions.length ? 0 : i + 1;
        this.roles = [this.allActions[i]];

        ui.setHTML('currentAction', helpers.displayNameForRole(this.roles[0]));
    },
}
