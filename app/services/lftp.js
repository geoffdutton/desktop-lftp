import pty from 'pty.js';
import { EventEmitter } from 'events';

export default class LftpService extends EventEmitter {
  constructor({hostname, username, password}) {
    super();
    this.hostname = hostname;
    this.username = username;
    this.password = password;
    this.pty = null;
  }

  connect() {
    this.pty = pty.spawn('lftp', ['-u', `${this.username},${this.password}`, this.hostname], {
      name: 'xterm-color',
      cols: 80,
      rows: 30,
      cwd: process.env.HOME,
      env: process.env
    });
    this.pty.on('data', this.onData.bind(this));
  }

  onData(data) {
    this.emit('data', [data]);
  }

  send(cmd) {
    this.pty.write(`${cmd}\r`);
  }

  disconnect() {
    this.send('exit');
    this.pty.destroy();
    this.pty = null;
  }
}
