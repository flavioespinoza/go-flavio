package main

import (
	"flag"
	"html/template"
	"log"
	"net/http"
	"strconv"
	"github.com/gorilla/websocket"
	"github.com/logrusorgru/aurora"
)

// Syntax for console logs
var _log = log.Println
var _logByte = log.Printf

// Color options for logs
var _black = aurora.Black
var _white = aurora.Gray
var _cyan = aurora.Cyan
var _yellow = aurora.Brown
var _magenta = aurora.Magenta
var _blue = aurora.Blue
var _red = aurora.Red
var _green = aurora.Green

// Client HTML template
var homeTemplate = template.Must(template.ParseFiles("templates/client.html"))

// Port, Host and Http Sevice Address
var port = 6001
var host = "127.0.0.1:" + strconv.Itoa(port)
var addr = flag.String("addr", host, "http service address")

// WebSocket Options
var upgrader = websocket.Upgrader{} // use default options

// Listen for request
func onMessage(res http.ResponseWriter, req *http.Request) {
	var connection, connErr = upgrader.Upgrade(res, req, nil)

	// Connection Error
	if connErr != nil {
		_log(_red("upgrader.Upgrade() Error:"), _yellow(connErr))
		return
	}
	defer connection.Close()

	// Connection Message
	for {
		var msgType, msgByte, errRead = connection.ReadMessage()

		// Connection Read Error
		if errRead != nil {
			_log(_red("connection.ReadMessage() Error:"), _yellow(errRead))
			break
		}

		// Connection Message Recieved
		_logByte("connection.ReadMessage() Recieved: %s", _cyan(msgByte))

		// Connection Write Error
		var errWrite = connection.WriteMessage(msgType, msgByte)
		if errWrite != nil {
			_log(_red("connection.WriteMessage() Error:"), _yellow(errWrite))
			break
		}
	}
}

func home(res http.ResponseWriter, req *http.Request) {
	homeTemplate.Execute(res, "ws://"+req.Host+"/onMessage")
}

func main() {
	flag.Parse()
	log.SetFlags(0)
	http.HandleFunc("/onMessage", onMessage)
	http.HandleFunc("/", home)
	log.Fatal(http.ListenAndServe(*addr, nil))
}
