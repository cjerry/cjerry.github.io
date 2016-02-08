def test(f, x):
    if f(x) % 2 == 0:
        return lambda g, x: g(lambda x: x * x, x)
    else:
        return f(x)

def tester():
    return test(lambda s: s // 2, 20)(test, 7)


# What would display in the interpreter:
# >>> tester()
# ???
# Hint: draw an environment diagram?
