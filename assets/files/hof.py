# Returned function

def mult_by_x(x):
    def inner(y):
        return y * x
    return inner

# Global?

def alt_mult_by_x(x):
    return alt_inner

def alt_inner(y):
    return y * x

# Called function

def apply(f, x):
    return f(x)

def id(x):
    return x

# print(id(id)(id(13)))

def combine_funcs(op):
    def combined(f, g):
        def val(x):
            return op(f(x), g(x))
        return val
    return combined
