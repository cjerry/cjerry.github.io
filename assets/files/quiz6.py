# How well do you understand the different flavors of variables?
# If the code will error, write all the output before the error.
class Quiz:
    ex = 1
    def __init__(self, why):
        why = 1

    def zed(self, zee):
        self.why = zee

q = Quiz(10)

Quiz.total = 2
Quiz.value = 2
q.zed(2)

print(q.ex)
print(Quiz.why)
print(q.ex)
print(Quiz.why)
