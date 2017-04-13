## user-level memory management
Process is a running program, a process has five conceptually different areas of memory allocated to it:
* text section: where executable code resides, all instances of a program share the same text segment.
* data section: statically allocated and global data initialized with none-zero values live in the data segment.
* bss: Block Started by Symbol, static data with zero values do not occupy space in disk, but auto-filled zero in memory.
* heap: allocate space where malloc() comes from, start immediately after bss area.
* stack: where local variables and function parameters are allocated, will be released after function returns.

All text section allocated separately in memory, shared by all instances of the same program and marked as read only.
Other four areas stick together, each instance of process has its own space and marked as none-executable.
Data section, bss and heap starts from low address, heap grows upward. Stack starts from high address and grows downward.

```
ll a.out
size a.out
```
Executable file often bigger in disk than allocated in memory because it has symbols and shared libraries.
Symbols are a list of program's variables and function names, which won't be allocated into memory.
One can use `strip` to remove symbols from an executable file.

### threads
Threads share program memory, only have their own stack.

##
