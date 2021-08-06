import sockets from './sockets';
import ui from './ui';

const room = sessionStorage.getItem('room');
const name = sessionStorage.getItem('name');

if (!room || !name) window.location.href = '/';

window.onload = () => {
    window.socket = io({transports: ['websocket'], upgrade: false});
    sockets.init();
    ui.getById("controls-toggle").onclick = ui.hideControlsPane;

    if (room) {
        socket.emit('join', { room, name });
        document.title = `Magic Maze · ${room}`;
    }
}
