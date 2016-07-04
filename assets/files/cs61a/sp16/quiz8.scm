(define (mystery lst fn)
  (if (eq? lst nil)
    nil
    (cons (fn (car lst))
          (mystery (cdr lst) fn))
    )
  )

; QUIZ QUESTIONS
; Q1. What is the output of:
(mystery '(1 2 3) (lambda (x) (* x 3)))
"*** YOUR ANSWER HERE ***"

; Q2. What should fn be to fulfill the following doctest:
(define fn "*** YOUR ANSWER HERE ***")

(mystery '(1 2 3) fn) ; Input
((1) (4) (9))         ; Output
