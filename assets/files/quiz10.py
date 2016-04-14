def whoami(r):
    while next(iter(r)):
        print("before")
        yield next(r)
        print("after")

def mysterious(m):
    while m > 0:
        yield m
        m -= 1

# Will this ever terminate?
# If so, what's the output?
for x in whoami(mysterious(4)):
    print(x)
