# go_flavio

## X-Team Challenge to Build an App in Go and Vue

**Start Time:** Tuesday, 19 Mar 2019 @ 11:05 AM (MST)

## Baisc comparisons to TypeScript

Path
```bash
/Users/<UserName>/go/src/github.com/flavioespinoza/go-flavio
```

Run main Go app
```bash
go run goflavio.go
```

goflavio.go
```go

package main

import (
	"fmt"
	"github.com/logrusorgru/aurora"
	"github.com/flavioespinoza/go-flavio/numbers"
	"github.com/flavioespinoza/go-flavio/strings"
	"github.com/flavioespinoza/go-flavio/strings/greetings" 
	greet "strings"
)

// Syntax for console logs
var _log = fmt.Println

// Color options for logs
var _black = aurora.Black
var _white = aurora.Gray
var _cyan = aurora.Cyan
var _yellow = aurora.Brown
var _magenta = aurora.Magenta
var _blue = aurora.Blue
var _red = aurora.Red
var _green = aurora.Green

func main() {

	_log(_yellow("number.IsPrime(19)"), _cyan(numbers.IsPrime(19)))

	_log(_magenta(greeting.WelcomeText))

	_log(strings.Reverse("flavioespinoza"))

	_log(greet.Count("Go is Awesome. I love Go", "Go"))
	
}

```