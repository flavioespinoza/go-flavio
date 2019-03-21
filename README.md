# go_flavio

## X-Team Challenge to Build an App in Go and Vue

**Start Time:** Tuesday, 19 Mar 2019 @ 11:05 AM (MST)

## Baisc comparisons to TypeScript

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
	_log("hello flavio")
	addNoReturn(4, 6) // No return value
	_log(addWithReturn(4, 7))
	_log(sqRoot(16))
	_log(sqRootAdd(16, 1))
	_log("Hello World!")
	
}

// NOTE: func() hoist like expressive functions in TypeScript

// My sugar syntax for console logs
func _log(item interface{}) {
	fmt.Println(item)
}

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

```