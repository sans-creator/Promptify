# Huffman Coding Problem

## Problem Statement

In a fictional land, characters are assigned varying levels of importance based on their frequencies of occurrence. A group of rebels is determined to encode their secret messages efficiently using the Huffman coding algorithm. Your mission is to assist them by implementing Huffman coding.

You need to determine the encoded messages for a given set of characters and their corresponding frequencies.

## Input Format

- The first line contains an integer N, representing the number of characters in the message
- The following N lines each contain two space-separated values:
  - A character symbol (uppercase/lowercase letter or special character)
  - The frequency of occurrence of that character as an integer

## Output Format

The output consists of N lines, each containing:
- A character followed by a colon and a space
- The encoded binary message for that character using '0' and '1' from the Huffman tree

## Constraints

- 1 ≤ N ≤ 10
- Characters will be uppercase and lowercase English letters
- 1 ≤ frequency ≤ 10000

## Sample Test Cases

### Input 1
```
5
A 2
B 3
C 4
D 5
E 6
```

### Output 1
```
A: 010
B: 011
C: 00
D: 10
E: 11
```

### Input 2
```
5
X 10
S 20
Z 5
P 15
Q 30
```

### Output 2
```
X: 1111
S: 10
Z: 1110
P: 110
Q: 0
```

## Compilation and Execution

To compile the program:
```bash
g++ -o huffman_coding huffman_coding.cpp -std=c++11
```

To run the program:
```bash
./huffman_coding < input.txt
```

Or provide input interactively:
```bash
./huffman_coding
```

## Algorithm

The implementation uses the Huffman coding algorithm:

1. Create leaf nodes for each character with their frequencies
2. Build a min-heap priority queue with all nodes
3. Repeatedly extract two nodes with minimum frequency and merge them
4. Continue until only one node (the root) remains
5. Generate binary codes by traversing the tree (left=0, right=1)

### Key Implementation Details

- Uses a priority queue (min-heap) to efficiently extract minimum frequency nodes
- When frequencies are equal, prioritizes internal nodes over leaf nodes for consistent results
- When merging nodes with equal frequencies where one is internal and one is leaf, places the leaf node as the left child
- Maintains insertion order to ensure stable sorting
