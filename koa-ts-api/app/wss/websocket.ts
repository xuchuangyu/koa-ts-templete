
import { log } from 'console';
import { Server } from 'http'
import { Server as socketServer } from 'socket.io'



class ws{
  static online=0;
  // @ts-ignore
  static ws:any = null;
  static init(server:Server){
    log('init')
    this.ws = new socketServer(server, {
      cors: {
        origin: "http://localhost:8888",
        credentials: true,
      },
    });
    this.ws.on('connection',async (socket:any)=>{
      try{
        socket.on('login',async(socket:any)=>{
          console.log('login')
        })
      }catch(err){
        console.log(err)
      }

    })

  }

  static sendToClient(Data:any){
    let iskeep = false // 加个变量做下发成功判断
        // if (!(this.ws instanceof WebSocket.Server)) {
        //     return iskeep;
        // }
        // const {id } = Data
        // this.ws.clients.forEach((client:any) => {
        //     if (client.readyState === WebSocket.OPEN && client.id === id) { 
        //         // 发送给指定匹配id
        //         client.send(JSON.stringify(Data));
        //         iskeep = true
        //     }
        // });
        return iskeep; 
  }
}

export default ws
