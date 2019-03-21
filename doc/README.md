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

// package <name>   
// Required
package main

// import: Similar to npm packages but executed at run-time
// Required
import (
	"fmt"
	"math"
)

// Executable func: Same name as package
// Required
func main() {
	
	_log("Hello Flavio!")
	// => Hello Flavio!
	
	addNoReturn(4, 6) 
	// No return value
	// console log show 10, but this is executed 
	// inside of the `addNoReturn` function

	_log(addWithReturn(4, 7))
	// => 11

	_log(sqRoot(16))
	// => 4

	_log(sqRootAdd(16, 1))
	// => 5
	
	_log(multipleReturns(25, 5))
	// => 30 20 5 125
	
}

// NOTE: func() hoist like expressive functions in TypeScript

// My sugar syntax for console logs
var _log = fmt.Println

// Argument Types are required similar to TypeScript
func addNoReturn(x int, y int) {
	var sum int = x + y
	_log(sum)
}

// Types are required for Return values
// Return Types are defined after arguments
func addWithReturn(x float64, y float64) float64 {
	var sum = x + y
	return sum
}

// Examples with un-nammed return value
func sqRoot(n float64) float64 {
	return math.Sqrt(n)
}

func sqRoot2(n float64) (float64) {
	return math.Sqrt(n)
}

// Example with named return value
func sqRootAdd(n float64, a float64) (result float64) {
	result = math.Sqrt(n) + a
	return result
}

// Multiple return values
func multipleReturns(num int, operator int) (add int, subtract int, divide int, multiply int) {
	add = num + operator
	subtract = num - operator
	divide = num / operator
	multiply = num * operator
	return
}


```