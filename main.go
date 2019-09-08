package main

import (
	"bufio"
	"fmt"
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

func main() {
	// sc.Split(bufio.ScanWords)
	// strings.Split(nextLine(), " ")

	n := nextInt()
	n = n + 1
	t := uint64Array(strings.Split(nextLine(), " "))

	// sort.Slice(s, func(x, y int) bool { return s[x] > s[y] })
	s := descendSort(t)

	var ans []uint64

	ans = append(ans, s[0])
	s = s[1:]

	for len(s) > 0 {
		var tmp []uint64

		for _, parent := range ans {
			ch := 0
			for i, _ := range s {
				if parent > s[i] {
					child := s[i]
					s = remove(s, i)
					tmp = append(tmp, child)
					ch = 1
					break
				}
			}

			if ch == 0 {
				fmt.Println("No")
				return
			}
		}

		ans = append(ans, tmp...)
		ans = descendSort(ans)
	}

	fmt.Println("yes")
}
