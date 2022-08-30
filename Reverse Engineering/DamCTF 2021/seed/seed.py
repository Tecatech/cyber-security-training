#!/usr/bin/env python3
import hashlib
import random
import sys
import time

def seed():
    return round(time.time())

def hash(text):
    return hashlib.sha256(str(text).encode()).hexdigest()

def main():
    s = seed()
    
    while True:
        s -= 1
        random.seed(s, version = 2)
        
        x = random.random()
        flag = hash(x)
        
        if 'b9ff3ebf' in flag:
            with open('./flag', 'w') as f:
                f.write(f"dam{{{flag}}}")
            f.close()
            break
        
        print(f"Incorrect: {x}")
    
    print("Good job <3")

if __name__ == '__main__':
    sys.exit(main())