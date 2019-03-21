package main

import (
	"fmt"
	. "github.com/logrusorgru/aurora"
	"github.com/flavioespinoza/go-flavio/numbers"
	"github.com/flavioespinoza/go-flavio/strings"	

	"github.com/flavioespinoza/go-flavio/strings/greetings" 
	greet "strings"
)

var _log = fmt.Println

func main() {

	_log(Brown("number.IsPrime(19)"), Cyan(numbers.IsPrime(19)))

	_log(Magenta(greeting.WelcomeText))

	_log(strings.Reverse("flavioespinoza"))

	_log(greet.Count("Go is Awesome. I love Go", "Go"))
}