import {io} from "socket.io-client"

const socket = io("http://192.168.1.187:3001")
export default socket
