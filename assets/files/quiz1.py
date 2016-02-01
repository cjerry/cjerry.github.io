# QUIZ 01

def test():
    pop = False
    quiz = False
    while not pop or not quiz:
        quiz = quiz or pop and 10 or 0
        pop = pop and not quiz or 20 and 30
        print(pop, quiz)

# Q: What is the output of test()?
# Hint: not 10 == False
# Hint: not > and > or (order of ops)
