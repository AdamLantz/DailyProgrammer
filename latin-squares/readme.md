# Description

A Latin square is an n × n array filled with n different symbols, each occurring exactly once in each row and exactly once in each column.

Examples:
```
1
```

```
1 2
2 1
```

```
1 2 3
3 1 2
2 3 1
```
In this challenge, you have to check whether a given array is a Latin square.

## Input Description

Input will be length of the array followed by n x n numbers. The array will fill the square from left to right starting from above.

## Output Description

If it is a Latin square, then display true. Else, display false.

## Challenge Input
```
5
1 2 3 4 5 5 1 2 3 4 4 5 1 2 3 3 4 5 1 2 2 3 4 5 1
2
1 3 3 4
4
1 2 3 4 1 3 2 4 2 3 4 1 4 3 2 1
```

## Challenge Output
```
true
false
false
```

# Challenge Source
https://www.reddit.com/r/dailyprogrammer/comments/6v29zk/170821_challenge_328_easy_latin_squares/