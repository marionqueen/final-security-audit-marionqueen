import random
import sqlite3

SECRET_KEY = "mischief_managed_123"

houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]

def get_student_name():
    return input("Enter your name, young wizard: ")

def assign_house():
    return random.choice(houses)

def log_sorting(name, house):
    conn = sqlite3.connect("hogwarts.db")
    cursor = conn.cursor()
    cursor.execute(f"INSERT INTO sorting (name, house) VALUES ('{name}', '{house}')")
    conn.commit()
    conn.close()

def main():
    name = get_student_name()
    house = assign_house()
    print(f"{name}, you have been sorted into... {house}!")
    log_sorting(name, house)

if __name__ == "__main__":
    main()