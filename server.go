package main

import (
	"strconv"
	"log"
	"flag"
	"html/template"
	"net/http"
	"github.com/gorilla/websocket"
	"github.com/logrusorgru/aurora"
)

// Syntax for console logs
var _log = log.Println
var _logF = log.Printf

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
var port = 7001
var host = "127.0.0.1:" + strconv.Itoa(port)
var addr = flag.String("addr", host, "http service address")

// WebSocket Options
var upgrader = websocket.Upgrader{} // use default options

// Listen for request
func echo(res http.ResponseWriter, req *http.Request) {
	connection, err := upgrader.Upgrade(res, req, nil)
	if err != nil {
		_log(_red("upgrade:"), _yellow(err))
		return
	}
	defer connection.Close()
	for {
		mt, message, err := connection.ReadMessage()
		if err != nil {
			_log(_red("read:"), _yellow(err))
			break
		}
		_logF("recv: %s", _cyan(message))
		err = connection.WriteMessage(mt, message)
		if err != nil {
			_log(_red("write:"), _yellow(err))
			break
		}
	}
}

func home(res http.ResponseWriter, req *http.Request) {
	homeTemplate.Execute(res, "ws://"+req.Host+"/echo")
}

func main() {
	flag.Parse()
	log.SetFlags(0)
	http.HandleFunc("/echo", echo)
	http.HandleFunc("/", home)
	log.Fatal(http.ListenAndServe(*addr, nil))
}