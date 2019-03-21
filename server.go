package main

import (
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

var addr = flag.String("addr", "localhost:7001", "http service address")

var upgrader = websocket.Upgrader{} // use default options

func echo(w http.ResponseWriter, r *http.Request) {
	c, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		_log("upgrade:", err)
		return
	}
	defer c.Close()
	for {
		mt, message, err := c.ReadMessage()
		if err != nil {
			_log(_red("read:"), _yellow(err))
			break
		}
		_logF("recv: %s", _cyan(message))
		err = c.WriteMessage(mt, message)
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

var homeTemplate = template.Must(template.ParseFiles("templates/client.html"))