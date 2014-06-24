/**
 * Created by shavit on 6/24/14.
 */

var ServerConnector ={
    openSocket:function(address){
        return io.connect(address);
    },
    addSocketEvent:function(socket,event,next){
        socket.on(event,function(data){
            next(data);
        });
    }
}

module.exports = ServerConnector;


