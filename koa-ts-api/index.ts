import app from './app';
import config from './app/config'
import WS from './app/wss/websocket'


const server = app.listen(config.server.port);
// 初始化 Websocket
WS.init(server)

