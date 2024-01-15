DROP TABLE IF EXISTS StudentCourses;
DROP TABLE IF EXISTS Students;

-- Create students table
CREATE TABLE Students (
    id INTEGER NOT NULL PRIMARY KEY,
    name TEXT,
    imageUrl TEXT
);

-- Create student-courses table
CREATE TABLE StudentCourses (
    id INTEGER NOT NULL PRIMARY KEY,
    name TEXT,
    grade TEXT,
    studentId INTEGER NOT NULL,
    FOREIGN KEY (studentId) REFERENCES Students(id)
);

-- Insert some dummy student data
INSERT INTO Students (name, imageUrl) VALUES
    ('Pikachu', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png'),
    ('Charizard', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png'),
    ('Bulbasaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png'),
    ('Squirtle', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png'),
    ('Jigglypuff', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/39.png'),
    ('Meowth', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/52.png'),
    ('Psyduck', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png'),
    ('Eevee', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/133.png'),
    ('Snorlax', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/143.png'),
    ('Mewtwo', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png');

-- Insert some dummy student-course data
INSERT INTO StudentCourses (name, grade, studentId) VALUES
    ('CS718', 'B', 1),
    ('CS719', 'A+', 1),
    ('CS718', 'D+', 2),
    ('CS719', 'B+', 2),
    ('CS732', 'C', 2),
    ('CS719', 'A', 3),
    ('CS732', 'A+', 3),
    ('CS718', 'B-', 4),
    ('CS719', 'B', 4),
    ('CS732', 'B+', 4),
    ('CS719', 'D+', 5),
    ('CS732', 'B', 5),
    ('CS718', 'A', 5),
    ('CS718', 'B+', 6),
    ('CS732', 'A+', 7),
    ('CS719', 'B+', 7),
    ('CS718', 'C', 8),
    ('CS719', 'A+', 8),
    ('CS732', 'B', 9),
    ('CS718', 'B+', 10);