#!/bin/bash
# Simple Interest formula: SI = (P * R * T) / 100
# where P is principal, R is rate, and T is time

echo "Enter principal amount (P): "
read principal
echo "Enter rate of interest (R): "
read rate
echo "Enter time period (T): "
read time

simple_interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)
echo "Simple Interest: $simple_interest"
