```
random@pwnable:~$ ls -l
total 20
-r--r----- 1 random_pwn root     49 Jun 30  2014 flag
-r-sr-x--- 1 random_pwn random 8538 Jun 30  2014 random
-rw-r--r-- 1 root       root    301 Jun 30  2014 random.c
random@pwnable:~$ python
>>> 0x6b8b4567 ^ 0xdeadbeef
3039230856
random@pwnable:~$ ./random
3039230856
Good!
Mommy, I thought libc random is unpredictable...
```