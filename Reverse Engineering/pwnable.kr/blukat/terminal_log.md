```
blukat@pwnable:~$ ls -l
total 20
-r-xr-sr-x 1 root blukat_pwn 9144 Aug  8  2018 blukat
-rw-r--r-- 1 root root        645 Aug  8  2018 blukat.c
-rw-r----- 1 root blukat_pwn   33 Jan  6  2017 password
blukat@pwnable:~$ cat password 2>/dev/null
cat: password: Permission denied
blukat@pwnable:~$ ./blukat
guess the password!
cat: password: Permission denied
congrats! here is your flag: Pl3as_DonT_Miss_youR_GrouP_Perm!!
```