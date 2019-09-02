package main

import (
	"bufio"
	"fmt"
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

func main() {
	// sc.Split(bufio.ScanWords)

	N := nextInt()

	var players [][]int

	for i := 0; i < N; i++ {
		players = append(players, intArray(strings.Split(nextLine(), " ")))
	}

	days := 0
	match_count := 0
	max_match := N * (N - 1) / 2

	for x := 0; x < max_match; x++ {
		no_match_today := true
		var played []int

		for i, _ := range players[0 : len(players)-1] {
			main_p := i

			if exist(main_p, played) {
				continue
			}

			if len(players[main_p]) > 0 {
				opponent_p := players[main_p][0]

				if exist(opponent_p, played) || len(players[opponent_p]) == 0 {
					continue
				}

				if main_p == players[opponent_p][0] {
					no_match_today = false
					players[main_p] = players[main_p][1:]
					players[opponent_p] = players[opponent_p][1:]
					played = append(played, main_p)
					played = append(played, opponent_p)

					match_count += 1

					if match_count == max_match {
						fmt.Println(days + 1)
						os.Exit(0)
					}
				}
			}
		}

		if no_match_today {
			fmt.Println(-1)
			os.Exit(0)
		}

		days += 1
	}

	if days == 0 {
		fmt.Println(days)
	} else {
		fmt.Println(-1)
	}

}
