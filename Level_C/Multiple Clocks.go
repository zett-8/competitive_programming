
package main

import (
	"bufio"
	"fmt"
	"math/big"
	"os"
	"strconv"
)

var sc = bufio.NewScanner(os.Stdin)
var out = bufio.NewWriter(os.Stdout)

func nextLine() string {
	sc.Scan()
	return sc.Text()
}

func nextInt() int {
	sc.Scan()
	i, e := strconv.Atoi(sc.Text())
	if e != nil {
		panic(e)
	}
	return i
}

func intArray(n []string) []int {
	var m []int
	for i, _ := range n {
		v, _ := strconv.Atoi(n[i])
		m = append(m, v-1)
	}
	return m
}

func intExistIn(v int, arr []int) bool {
	for _, a := range arr {
		if a == v {
			return true
		}
	}

	return false
}

func gcd(m, n uint64) uint64 {
	x := new(big.Int)
	y := new(big.Int)
	z := new(big.Int)
	a := new(big.Int).SetUint64(m)
	b := new(big.Int).SetUint64(n)
	return z.GCD(x, y, a, b).Uint64()
}

func main() {
	// sc.Split(bufio.ScanWords)
	// strings.Split(nextLine(), " ")

	N := nextInt()

	var nums []int

	for i := 0; i < N; i++ {
		nums = append(nums, nextInt())
	}

	for len(nums) > 1 {
		tmp := nums[0:2]
		nums = nums[2:]

		x := gcd(uint64(tmp[0]), uint64(tmp[1]))
		mx := uint64(tmp[0]) / x * uint64(tmp[1])

		nums = append(nums, int(mx))
	}

	fmt.Println(nums[0])
}
