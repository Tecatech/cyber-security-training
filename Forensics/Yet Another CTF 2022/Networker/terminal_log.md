```
$ ./secret.exe
$ strings secret.exe | tail -n 1 | xargs echo | base64 -d
SHKIB{MakE_W1rE_ShArK_gReaT_agE1n}
```