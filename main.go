package main

import (
	"bufio"
	"fmt"
	"math"
	"math/big"
	"os"
	"strconv"
	"strings"
)

var sc = bufio.NewScanner(os.Stdin)
var out = bufio.NewWriter(os.Stdout)

func nextLine() string {
	sc.Scan()
	return sc.Text()
}

func nextInt() uint64 {
	sc.Scan()
	i, e := strconv.ParseUint(sc.Text(), 10, 64)
	if e != nil {
		panic(e)
	}
	return i
}

func intArray(n []string) []int {
	var m []int
	for i, _ := range n {
		v, _ := strconv.Atoi(n[i])
		m = append(m, v)
	}
	return m
}

func uint64Array(n []string) []uint64 {
	var m []uint64
	for i, _ := range n {
		v, _ := strconv.ParseUint(n[i], 10, 64)
		m = append(m, v)
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

func remove(x []uint64, y int) []uint64 {
	var newArray []uint64
	for i, _ := range x {
		if i != y {
			newArray = append(newArray, x[i])
		}
	}
	return newArray
}

func descendSort(a []uint64) []uint64 {
	for i := 0; i < len(a); i++ {
		for i := 0; i < len(a)-1; i++ {
			if a[i] < a[i+1] {
				tmp := a[i+1]
				a[i+1] = a[i]
				a[i] = tmp
			}
		}
	}
	return a
}

func maxAndIndex(a []uint64) (uint64, int) {
	max := uint64(0)
	ind := 0
	for i, v := range a {
		if v > max {
			max = v
			ind = i
		}
	}
	return max, ind
}

func sum(a []uint64) uint64 {
	sum := uint64(0)
	for _, v := range a {
		sum += v
	}
	return sum
}

func main() {
	// sc.Split(bufio.ScanWords)
	NM := uint64Array(strings.Split(nextLine(), " "))
	n := NM[0]
	m := NM[1]

	stuff := uint64Array(strings.Split(nextLine(), " "))

	if n == 1 {
		d := math.Pow(2, float64(m))
		fmt.Println(uint64(math.Floor(float64(stuff[0]) / d)))
		os.Exit(0)
	}

	for i := uint64(0); i < m; i++ {
		_, maxIndex := maxAndIndex(stuff)
		stuff[maxIndex] = uint64(math.Floor(float64(stuff[maxIndex]) / float64(2)))
	}

	fmt.Println(sum(stuff))
}
