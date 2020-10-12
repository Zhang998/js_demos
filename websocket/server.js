const WebSocket = require('ws');
let ws = new WebSocket.Server({port:"8889"},()=>{
    console.log("链接到8889");
    
})
var clients = [];
var sendToAll = (msg) => {
    for (let client of clients) {
        client.send(msg)
    }
}
setInterval(() => {
    // sendToAll("心跳"+JSON.stringify(clients) )
    sendToAll("心跳"+clients.length )
}, 6000);
ws.on('connection', (client) => {
    console.log("有一个游客进入");
    clients.push(client);
    client.on('message',(data)=>{
        if (data.includes("黄")) {
            client.send("系统怀疑你在开车，已被踢出群聊")
            clients.splice(clients.indexOf(client),1)
            client.close();
            sendToAll("有人开车，已被踢出群聊")
        } else {
            sendToAll(data)
        }
        
    })
    client.on("close",(client)=>{
        // clients.splice(clients.indexOf(client),1)
        console.log("有一个游客离开",client);
        
    })
})