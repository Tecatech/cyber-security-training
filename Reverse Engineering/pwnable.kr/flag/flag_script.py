#!/usr/bin/env python3
import gdb

gdb.execute('set print asm-demangle on')
gdb.execute('disassemble main')

gdb.execute('x/s *0x6c2070')

gdb.execute('quit')