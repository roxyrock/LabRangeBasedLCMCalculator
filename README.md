# Smallest Common Multiple 

## Overview
This project implements a function that calculates the smallest common multiple (SCM) of two numbers and all the integers between them.
The function handles unordered input and uses the Euclidean algorithm to compute the greatest common divisor (GCD), which is then used to derive the least common multiple (LCM).

#### Range Construction: 
Given an input array of two numbers, the function:
- Determines the minimum and maximum values
- Builds an array containing all integers in the range [min, max]

✔️ GCD (Greatest Common Divisor)
The project uses the Euclidean algorithm, an efficient method to compute the GCD of two numbers.
✔️ LCM (Least Common Multiple)
✔️ Progressive LCM
To find the smallest common multiple of the entire range, the algorithm applies the LCM function progressively across the array