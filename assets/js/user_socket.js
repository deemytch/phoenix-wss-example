import {Socket} from "phoenix"
let socket = new Socket("/socket", {params: {token: window.userToken}});
socket.connect();
let messagesContainer = document.querySelector("#messages");

const startWebSockets = (page, per_page, order) => {
  let channel = socket.channel("view_stats", { page: page, per_page: per_page, order: order })
  channel.join()
    .receive("ok", resp => { console.log("Харашо, слушай!", resp) })
    .receive("error", resp => { console.log("Плохо, никуда не годится!", resp) })

  channel.on("coffee", payload => {
    let messageItem = document.createElement("p")
    messageItem.innerText = `[${Date()}] ${payload.body}`
    messagesContainer.appendChild(messageItem)
  });
}

window.startWebSockets = startWebSockets;
