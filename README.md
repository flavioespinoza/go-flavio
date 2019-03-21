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
    . "github.com/logrusorgru/aurora"
    "github.com/flavioespinoza/go-flavio/numbers"
    "github.com/flavioespinoza/go-flavio/strings"

    "github.com/flavioespinoza/go-flavio/strings/greetings" 
    greet "strings"// Nested package as alias 'greet'
)

var _log = fmt.Println

func main() {

	_log(Brown("number.IsPrime(19)"), Cyan(numbers.IsPrime(19)))

	_log(Magenta(greeting.WelcomeText))

	_log(strings.Reverse("flavioespinoza"))

	_log(str.Count("Go is Awesome. I love Go", "Go"))
}

```