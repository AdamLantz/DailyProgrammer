# Description

You are handed two buckets, one can hold 3 liters and the other 5 liters of water.

You are allowed to:
* fill a bucket with water until it is full
* empty a bucket
* transfer water from one bucket into the other until the target bucket is full

In the original riddle, you are to describe the actions that need to be done in order to get exactly 4 liters of water.

Example solution:
```
Two buckets (3L, 5L):
Fill 5L -> (0,5)
5L to 3L -> (3,2)
Empty 3L -> (0,2)
5L to 3L -> (2,0)
Fill 5L -> (2,5)
5L to 3L -> (3,4)
```
Another solution:
```
Fill 3L -> (3,0)
3L to 5L -> (0,3)
Fill 3L -> (3,3)
3L to 5L -> (1,5)
Empty 5L -> (1,0)
3L to 5L -> (0,1)
Fill 3L -> (3,1)
3L to 5L -> (0,4)
```
Your task is to find a path of actions to obtain a target volume l <= max(m, n) liters of water, given two buckets of size m, n, where m and n are coprime.

## Input Description

The input will be three numbers representing m, n, and l respectively.
## Output Description

The format of the output will be a list of pairs representing the contents of the buckets m and n at each step:

`[(0, 0), (3, 0), (0, 3), (3, 3), (1, 5), (1, 0), (0, 1), (3, 1), (0, 4)]`

If there is no solution, print `"no solution"`.

## Challenge Input
```
3 5 4
6 16 7
101 317 64
571 317 420
1699 1409 1334
```

## Challenge Output
```
[(0, 0), (3, 0), (0, 3), (3, 3), (1, 5), (1, 0), (0, 1), (3, 1), (0, 4)]
no solution
[(0, 0), (101, 0), (0, 101), ... (0, 280), (101, 280), (64, 317)]
[(0, 0), (571, 0), (254, 317), ... (571, 166), (420, 317)]
[(0, 0), (1699, 0), (290, 1409), ... (0, 1044), (1699, 1044), (1334, 1409)]
```