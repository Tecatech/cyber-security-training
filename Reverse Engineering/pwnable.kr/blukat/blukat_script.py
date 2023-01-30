#!/usr/bin/env python3
import gdb

gdb.execute('info variables')
gdb.execute('disassemble main')

gdb.execute('break *(&main + 74)')
gdb.execute('run')

gdb.execute('x/s 0x6010a0')

gdb.execute('quit')