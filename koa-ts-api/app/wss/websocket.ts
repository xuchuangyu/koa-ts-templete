
import { Server } from 'http'
import { Server as socketServer } from 'socket.io'



class ws{
  static online=0;
  // @ts-ignore
  static ws:any = null;
  static init(server:Server){
    this.ws = new socketServer(server, {
      cors: {
        origin: "http://localhost:3000",
        credentials: true,
      },
    });
    //@ts-ignore
    let _global=global as any;
    _global.onlineUsers = {} ;
    this.ws.on('connection',async (socket:any)=>{
      try{
        //@ts-ignore
        global.chatSocket = socket;
        socket.on("add-user", (userId:string) => {
          _global.onlineUsers[userId]=socket.id;
          socket.emit("r-online-user", _global.onlineUsers);

        });
        socket.on("send-msg", (data:any) => {
        const sendUserSocket = _global.onlineUsers[data.to];
          if (sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-recieve", data.msg);
          }
        });
        let hearBeatTimeout:any=null
        socket.on('hearbeat',(data:number)=>{
          //@ts-ignore
          clearTimeout(hearBeatTimeout)
          socket.emit("r-online-user", _global.onlineUsers);
          closeHearbeat()
        })
        function closeHearbeat(){
          hearBeatTimeout=setTimeout(()=>{
            let key:any=toUserIdBySocketId()
            delete _global.onlineUsers[key]
          },15000)
        }
        function toUserIdBySocketId(){
            for(let key in _global.onlineUsers){
                let item = _global.onlineUsers[key];
                if(item==socket.id)  {
                  return key;
                }
           }
        }
      }catch(err){
        console.log(err)
      }

    })

  }
}

export default ws
