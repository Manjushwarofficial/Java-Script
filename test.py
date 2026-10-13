


for i in range(1, 11):
    if i % 2 == 0:
        print(i, "is even")
    else:
        print(i, "is odd")


students = ["Aman", "Rahul", "Priya", "Neha", "Arjun"]
marks = [78, 45, 92, 33, 67]

total = 0
passed = 0
failed = 0

print("Student Result System")
print("---------------------")

for i in range(len(students)):
    name = students[i]
    score = marks[i]
    total = total + score

    if score >= 90:
        grade = "A+"
        passed = passed + 1
    elif score >= 75:
        grade = "A"
        passed = passed + 1
    elif score >= 60:
        grade = "B"
        passed = passed + 1
    elif score >= 40:
        grade = "C"
        passed = passed + 1
    else:
        grade = "F"
        failed = failed + 1

        print("Name:", name)
        print("Marks:", score)
        print
def fizzBuzz(n):
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)


