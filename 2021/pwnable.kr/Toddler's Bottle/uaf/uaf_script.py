import gdb

gdb.execute('set print asm-demangle on')
gdb.execute('disassemble main')

gdb.execute('break *(&main+84)')
gdb.execute('run')

gdb.execute('heap chunks')
gdb.execute('dereference 0x614ee0')
gdb.execute('dereference 0x0000000000401570')

gdb.execute('delete')
gdb.execute('break *(&main+484)')
gdb.execute('run')

gdb.execute('heap chunks')
gdb.execute('dereference 0x614ee0')
gdb.execute('dereference 0x0000000000401570')

gdb.execute('heap bins')

gdb.execute('delete')
gdb.execute('run 24 uaf_payload.txt')

gdb.execute('heap chunks')
gdb.execute('dereference 0x614ee0')

gdb.execute('quit')