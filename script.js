// ===================================
// PAGE NAVIGATION
// ===================================

function showPage(pageName, clickedButton = null) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    document
        .getElementById(pageName)
        .classList.add("active-page");


    const buttons =
        document.querySelectorAll(".nav-btn");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    if (clickedButton) {
        clickedButton.classList.add("active");
    }


    const titles = {
        home: "Dashboard",
        subjects: "Subjects",
        notes: "Study Notes",
        tutorial: "Tutorial",
        quiz: "Practice Quiz",
        planner: "Study Planner",
        progress: "Learning Progress"
    };

    document.getElementById(
        "page-heading"
    ).textContent =
        titles[pageName] || "StudyMate";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    updateProgress();
}


// ===================================
// SUBJECT NOTES
// ===================================

const subjects = {

    python: {

        title: "Python Programming",

        topics: [

            {
                title: "Introduction to Python",

                content: `

                    <h3>What is Python?</h3>

                    <p>
                        Python is a high-level programming
                        language known for its simple and
                        readable syntax.
                    </p>

                    <h3>Why Python?</h3>

                    <ul>
                        <li>Easy to learn</li>
                        <li>Used in Artificial Intelligence</li>
                        <li>Used in Data Science</li>
                        <li>Used in automation</li>
                        <li>Used in web development</li>
                    </ul>

                    <h3>Example</h3>

                    <pre>print("Hello World")</pre>

                `
            },

            {
                title: "Variables and Data Types",

                content: `

                    <h3>Variables</h3>

                    <p>
                        Variables are names used to
                        store values.
                    </p>

                    <pre>
name = "StudyMate"
age = 18
mark = 95.5
                    </pre>

                    <h3>Common Data Types</h3>

                    <ul>
                        <li>int - Whole numbers</li>
                        <li>float - Decimal numbers</li>
                        <li>str - Text</li>
                        <li>bool - True or False</li>
                    </ul>

                `
            },

            {
                title: "Conditional Statements",

                content: `

                    <h3>If Statement</h3>

                    <p>
                        Conditional statements allow a
                        program to make decisions.
                    </p>

                    <pre>
mark = 75

if mark >= 50:
    print("Pass")
else:
    print("Fail")
                    </pre>

                `
            },

            {
                title: "Loops",

                content: `

                    <h3>Loops</h3>

                    <p>
                        Loops repeat a block of code.
                    </p>

                    <h3>For Loop</h3>

                    <pre>
for i in range(5):
    print(i)
                    </pre>

                    <p>
                        Output: 0 1 2 3 4
                    </p>

                `
            },

            {
                title: "Functions",

                content: `

                    <h3>Functions</h3>

                    <p>
                        A function is a reusable block
                        of code.
                    </p>

                    <pre>
def greet(name):
    print("Hello", name)

greet("Student")
                    </pre>

                `
            },

            {
                title: "Lists",

                content: `

                    <h3>Python List</h3>

                    <p>
                        Lists store multiple values.
                    </p>

                    <pre>
subjects = [
    "Python",
    "DBMS",
    "DS"
]

print(subjects[0])
                    </pre>

                `
            }

        ]
    },


    ds: {

        title: "Data Structures",

        topics: [

            {
                title: "Introduction",

                content: `

                    <h3>What are Data Structures?</h3>

                    <p>
                        Data structures are methods
                        used to organize and store data.
                    </p>

                    <p>
                        Examples include arrays,
                        linked lists, stacks,
                        queues and trees.
                    </p>

                `
            },

            {
                title: "Arrays",

                content: `

                    <h3>Array</h3>

                    <p>
                        An array stores multiple
                        elements using indexes.
                    </p>

                    <pre>
numbers = [10, 20, 30, 40]

print(numbers[0])
                    </pre>

                `
            },

            {
                title: "Linked Lists",

                content: `

                    <h3>Linked List</h3>

                    <p>
                        A linked list contains nodes.
                        Each node stores data and a
                        reference to another node.
                    </p>

                `
            },

            {
                title: "Stack",

                content: `

                    <h3>Stack</h3>

                    <p>
                        Stack follows the
                        LIFO principle.
                    </p>

                    <p>
                        LIFO means:
                        Last In, First Out.
                    </p>

                    <p>
                        A stack of plates is a
                        simple real-world example.
                    </p>

                `
            },

            {
                title: "Queue",

                content: `

                    <h3>Queue</h3>

                    <p>
                        Queue follows FIFO.
                    </p>

                    <p>
                        FIFO means:
                        First In, First Out.
                    </p>

                `
            },

            {
                title: "Searching",

                content: `

                    <h3>Searching Algorithms</h3>

                    <p>
                        Searching algorithms help
                        locate a value.
                    </p>

                    <ul>
                        <li>Linear Search</li>
                        <li>Binary Search</li>
                    </ul>

                    <p>
                        Binary search requires
                        sorted data.
                    </p>

                `
            }

        ]
    },


    dbms: {

        title: "Database Management Systems",

        topics: [

            {
                title: "Introduction to DBMS",

                content: `

                    <h3>DBMS</h3>

                    <p>
                        DBMS stands for Database
                        Management System.
                    </p>

                    <p>
                        It helps store, retrieve,
                        organize and manage data.
                    </p>

                    <p>
                        Examples include MySQL,
                        PostgreSQL and Oracle.
                    </p>

                `
            },

            {
                title: "Database Keys",

                content: `

                    <h3>Primary Key</h3>

                    <p>
                        A primary key uniquely
                        identifies each record.
                    </p>

                    <h3>Foreign Key</h3>

                    <p>
                        A foreign key connects
                        related tables.
                    </p>

                `
            },

            {
                title: "SQL",

                content: `

                    <h3>SQL</h3>

                    <p>
                        SQL stands for Structured
                        Query Language.
                    </p>

                    <h3>SELECT</h3>

                    <pre>
SELECT *
FROM students;
                    </pre>

                `
            },

            {
                title: "SQL Commands",

                content: `

                    <h3>Common SQL Commands</h3>

                    <ul>
                        <li>SELECT</li>
                        <li>INSERT</li>
                        <li>UPDATE</li>
                        <li>DELETE</li>
                    </ul>

                    <pre>
INSERT INTO students
VALUES (1, 'Arun');
                    </pre>

                `
            },

            {
                title: "Joins",

                content: `

                    <h3>SQL Joins</h3>

                    <p>
                        Joins combine rows from
                        multiple tables.
                    </p>

                    <ul>
                        <li>INNER JOIN</li>
                        <li>LEFT JOIN</li>
                        <li>RIGHT JOIN</li>
                        <li>FULL JOIN</li>
                    </ul>

                `
            },

            {
                title: "Normalization",

                content: `

                    <h3>Normalization</h3>

                    <p>
                        Normalization reduces
                        unnecessary duplication and
                        improves data organization.
                    </p>

                    <ul>
                        <li>1NF</li>
                        <li>2NF</li>
                        <li>3NF</li>
                    </ul>

                `
            }

        ]
    },


    web: {

        title: "Web Development",

        topics: [

            {
                title: "HTML",

                content: `

                    <h3>HTML</h3>

                    <p>
                        HTML provides the basic
                        structure of a webpage.
                    </p>

                    <pre>
&lt;h1&gt;StudyMate&lt;/h1&gt;

&lt;p&gt;
Welcome to the website.
&lt;/p&gt;
                    </pre>

                `
            },

            {
                title: "CSS",

                content: `

                    <h3>CSS</h3>

                    <p>
                        CSS controls the appearance
                        of HTML elements.
                    </p>

                    <pre>
h1 {
    font-size: 32px;
}
                    </pre>

                `
            },

            {
                title: "JavaScript",

                content: `

                    <h3>JavaScript</h3>

                    <p>
                        JavaScript makes webpages
                        interactive.
                    </p>

                    <pre>
function greet() {
    alert("Hello");
}
                    </pre>

                `
            },

            {
                title: "DOM",

                content: `

                    <h3>Document Object Model</h3>

                    <p>
                        JavaScript can modify
                        webpage content using DOM.
                    </p>

                    <pre>
document
    .getElementById("title")
    .textContent = "StudyMate";
                    </pre>

                `
            },

            {
                title: "Responsive Design",

                content: `

                    <h3>Responsive Website</h3>

                    <p>
                        Responsive designs work
                        properly on phones, tablets
                        and computers.
                    </p>

                    <pre>
@media (max-width: 700px) {

    body {
        font-size: 16px;
    }

}
                    </pre>

                `
            },

            {
                title: "Forms",

                content: `

                    <h3>HTML Forms</h3>

                    <p>
                        Forms collect information
                        from users.
                    </p>

                    <pre>
&lt;input
    type="text"
    placeholder="Enter name"
&gt;

&lt;button&gt;
Submit
&lt;/button&gt;
                    </pre>

                `
            }

        ]
    }

};


// ===================================
// TUTORIAL SYSTEM
// ===================================

let currentSubject = "python";

let currentLesson = 0;


function openSubject(subject) {

    currentSubject = subject;

    currentLesson = 0;

    showPage("tutorial");

    loadTopicMenu();

    loadLesson(0);
}


function loadTopicMenu() {

    const data =
        subjects[currentSubject];

    document.getElementById(
        "tutorial-subject-name"
    ).textContent =
        data.title;

    const list =
        document.getElementById(
            "topic-list"
        );

    list.innerHTML = "";

    data.topics.forEach(
        (topic, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "topic-button";

            button.textContent =
                (index + 1) +
                ". " +
                topic.title;

            button.onclick =
                function () {

                    loadLesson(index);

                };

            list.appendChild(button);

        }
    );

}


function loadLesson(index) {

    currentLesson = index;

    const data =
        subjects[currentSubject];

    const lesson =
        data.topics[index];

    document.getElementById(
        "lesson-title"
    ).textContent =
        lesson.title;

    document.getElementById(
        "lesson-content"
    ).innerHTML =
        lesson.content;


    const topicButtons =
        document.querySelectorAll(
            ".topic-button"
        );

    topicButtons.forEach(
        (button, buttonIndex) => {

            button.classList.remove(
                "selected"
            );

            if (buttonIndex === index) {

                button.classList.add(
                    "selected"
                );

            }

        }
    );


    document.getElementById(
        "previous-btn"
    ).style.visibility =
        index === 0
        ? "hidden"
        : "visible";


    document.getElementById(
        "next-btn"
    ).style.visibility =
        index === data.topics.length - 1
        ? "hidden"
        : "visible";

}


function nextLesson() {

    const total =
        subjects[currentSubject]
            .topics.length;

    if (
        currentLesson <
        total - 1
    ) {

        loadLesson(
            currentLesson + 1
        );

    }

}


function previousLesson() {

    if (currentLesson > 0) {

        loadLesson(
            currentLesson - 1
        );

    }

}


// ===================================
// COMPLETED LESSONS
// ===================================

function markCurrentCompleted() {

    const key =
        currentSubject +
        "-" +
        currentLesson;

    let completed =
        JSON.parse(
            localStorage.getItem(
                "completedLessons"
            )
        ) || [];

    if (
        !completed.includes(key)
    ) {

        completed.push(key);

        localStorage.setItem(
            "completedLessons",
            JSON.stringify(completed)
        );

        alert(
            "Lesson marked as completed!"
        );

    } else {

        alert(
            "You already completed this lesson."
        );

    }

    updateProgress();

}


// ===================================
// QUIZ DATA
// ===================================

const quizzes = {

python: [

{
question: "Which function displays output in Python?",
options: ["print()", "show()", "output()", "write()"],
answer: "print()"
},

{
question: "Which symbol creates a Python comment?",
options: ["#", "//", "--", "/*"],
answer: "#"
},

{
question: "Which data type stores text?",
options: ["str", "int", "bool", "float"],
answer: "str"
},

{
question: "Which keyword defines a function?",
options: ["def", "function", "fun", "define"],
answer: "def"
},

{
question: "Which brackets create a list?",
options: ["[]", "()", "{}", "<>"],
answer: "[]"
},

{
question: "Which operator checks equality?",
options: ["==", "=", "=>", "!="],
answer: "=="
},

{
question: "Which loop iterates through a sequence?",
options: ["for", "switch", "case", "goto"],
answer: "for"
},

{
question: "Which function gives the length?",
options: ["len()", "length()", "size()", "countall()"],
answer: "len()"
},

{
question: "Which value represents Boolean true?",
options: ["True", "true", "TRUE", "Yes"],
answer: "True"
},

{
question: "Which keyword follows an if condition?",
options: ["elif", "elseif", "otherwise", "case"],
answer: "elif"
}

],


ds: [

{
question: "Which structure follows LIFO?",
options: ["Stack", "Queue", "Tree", "Graph"],
answer: "Stack"
},

{
question: "Which structure follows FIFO?",
options: ["Queue", "Stack", "Tree", "Array"],
answer: "Queue"
},

{
question: "Which operation adds to a stack?",
options: ["Push", "Pop", "Search", "Sort"],
answer: "Push"
},

{
question: "Which operation removes from a stack?",
options: ["Pop", "Push", "Insert", "Search"],
answer: "Pop"
},

{
question: "Binary search requires:",
options: ["Sorted data", "Images", "Random data", "Files"],
answer: "Sorted data"
},

{
question: "Which search checks elements sequentially?",
options: ["Linear Search", "Binary Search", "DFS", "Hashing"],
answer: "Linear Search"
},

{
question: "Which structure has connected nodes?",
options: ["Linked List", "Integer", "Float", "Character"],
answer: "Linked List"
},

{
question: "Which structure represents hierarchy?",
options: ["Tree", "Queue", "Stack", "Array"],
answer: "Tree"
},

{
question: "Array elements are usually accessed using:",
options: ["Index", "Password", "URL", "File"],
answer: "Index"
},

{
question: "Which algorithm compares adjacent elements?",
options: ["Bubble Sort", "Binary Search", "DFS", "BFS"],
answer: "Bubble Sort"
}

],


dbms: [

{
question: "DBMS stands for?",
options: [
"Database Management System",
"Data Base Memory System",
"Digital Management System",
"Database Machine Software"
],
answer: "Database Management System"
},

{
question: "Which key uniquely identifies a record?",
options: ["Primary Key", "Foreign Key", "Duplicate Key", "Join Key"],
answer: "Primary Key"
},

{
question: "SQL stands for?",
options: [
"Structured Query Language",
"Simple Query Language",
"System Question Language",
"Structured Queue Logic"
],
answer: "Structured Query Language"
},

{
question: "Which command retrieves data?",
options: ["SELECT", "DELETE", "INSERT", "DROP"],
answer: "SELECT"
},

{
question: "Which command adds rows?",
options: ["INSERT", "SELECT", "DROP", "SHOW"],
answer: "INSERT"
},

{
question: "Which command removes rows?",
options: ["DELETE", "CREATE", "SELECT", "JOIN"],
answer: "DELETE"
},

{
question: "Which clause filters records?",
options: ["WHERE", "TABLE", "FROM", "DATABASE"],
answer: "WHERE"
},

{
question: "Which concept reduces duplicate data?",
options: ["Normalization", "Compilation", "Iteration", "Animation"],
answer: "Normalization"
},

{
question: "Which operation combines related tables?",
options: ["JOIN", "LOOP", "PRINT", "RETURN"],
answer: "JOIN"
},

{
question: "Which key refers to another table?",
options: ["Foreign Key", "Primary Key", "Text Key", "Duplicate Key"],
answer: "Foreign Key"
}

],


web: [

{
question: "Which language structures webpages?",
options: ["HTML", "CSS", "Python", "SQL"],
answer: "HTML"
},

{
question: "Which language styles webpages?",
options: ["CSS", "HTML", "SQL", "Python"],
answer: "CSS"
},

{
question: "Which language adds browser interaction?",
options: ["JavaScript", "HTML", "SQL", "C"],
answer: "JavaScript"
},

{
question: "Which tag creates a main heading?",
options: ["<h1>", "<p>", "<img>", "<br>"],
answer: "<h1>"
},

{
question: "Which tag creates a paragraph?",
options: ["<p>", "<h1>", "<img>", "<title>"],
answer: "<p>"
},

{
question: "Which CSS property changes text size?",
options: ["font-size", "text-size", "size", "font-text"],
answer: "font-size"
},

{
question: "DOM stands for?",
options: [
"Document Object Model",
"Data Object Model",
"Digital Object Method",
"Document Output Method"
],
answer: "Document Object Model"
},

{
question: "Which HTML element creates a button?",
options: ["<button>", "<click>", "<press>", "<submit-button>"],
answer: "<button>"
},

{
question: "Which feature helps responsive design?",
options: [
"Media Queries",
"SQL Queries",
"Print Statements",
"Loops"
],
answer: "Media Queries"
},

{
question: "Which JavaScript function displays an alert?",
options: ["alert()", "print()", "echo()", "message()"],
answer: "alert()"
}

]

};


// ===================================
// QUIZ SYSTEM
// ===================================

let currentQuiz = [];

let quizSubject = "";

let quizQuestion = 0;

let quizScore = 0;


function startQuiz(subject) {

    quizSubject = subject;

    currentQuiz =
        [...quizzes[subject]]
        .sort(
            () =>
                Math.random() - 0.5
        );

    quizQuestion = 0;

    quizScore = 0;

    displayQuestion();

}


function displayQuestion() {

    const box =
        document.getElementById(
            "quiz-box"
        );

    if (
        quizQuestion >=
        currentQuiz.length
    ) {

        finishQuiz();

        return;

    }

    const question =
        currentQuiz[
            quizQuestion
        ];

    box.innerHTML = `

        <p class="quiz-question-count">
            Question
            ${quizQuestion + 1}
            of
            ${currentQuiz.length}
        </p>

        <h2>
            ${question.question}
        </h2>

        <div id="option-box">
        </div>

        <p
            id="quiz-feedback"
            class="quiz-feedback">
        </p>

        <button
            id="quiz-next"
            class="next-question"
            onclick="nextQuestion()"
            style="display:none;">

            Next Question →

        </button>

    `;


    const optionBox =
        document.getElementById(
            "option-box"
        );


    question.options.forEach(
        option => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "quiz-option";

            button.textContent =
                option;

            button.onclick =
                function () {

                    selectAnswer(
                        option,
                        button
                    );

                };

            optionBox.appendChild(
                button
            );

        }
    );

}


function selectAnswer(
    selected,
    selectedButton
) {

    const question =
        currentQuiz[
            quizQuestion
        ];

    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );


    buttons.forEach(
        button => {

            button.disabled = true;

            if (
                button.textContent ===
                question.answer
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    const feedback =
        document.getElementById(
            "quiz-feedback"
        );


    if (
        selected ===
        question.answer
    ) {

        quizScore++;

        feedback.textContent =
            "✅ Correct!";

    } else {

        selectedButton.classList.add(
            "wrong"
        );

        feedback.textContent =
            "❌ Correct answer: " +
            question.answer;

    }


    document.getElementById(
        "quiz-next"
    ).style.display =
        "inline-block";

}


function nextQuestion() {

    quizQuestion++;

    displayQuestion();

}


function finishQuiz() {

    saveQuizScore(
        quizSubject,
        quizScore
    );

    document.getElementById(
        "quiz-box"
    ).innerHTML = `

        <div class="quiz-empty">

            🎉

            <h2>
                Quiz Completed!
            </h2>

            <p>
                Your score:
                <strong>
                ${quizScore} /
                ${currentQuiz.length}
                </strong>
            </p>

            <button
                class="next-question"
                onclick="startQuiz('${quizSubject}')">

                Try Again

            </button>

        </div>

    `;

}


function saveQuizScore(
    subject,
    score
) {

    const key =
        "quiz-" + subject;

    const previous =
        Number(
            localStorage.getItem(
                key
            )
        ) || 0;


    if (score > previous) {

        localStorage.setItem(
            key,
            score
        );

    }

    updateProgress();

}


// ===================================
// STUDY PLANNER
// ===================================

function getTasks() {

    return JSON.parse(
        localStorage.getItem(
            "studyTasks"
        )
    ) || [];

}


function addTask() {

    const input =
        document.getElementById(
            "taskInput"
        );

    const value =
        input.value.trim();


    if (value === "") {

        alert(
            "Enter a study task."
        );

        return;

    }


    const tasks =
        getTasks();

    tasks.push(value);

    localStorage.setItem(
        "studyTasks",
        JSON.stringify(tasks)
    );

    input.value = "";

    displayTasks();

}


function deleteTask(index) {

    const tasks =
        getTasks();

    tasks.splice(index, 1);

    localStorage.setItem(
        "studyTasks",
        JSON.stringify(tasks)
    );

    displayTasks();

}


function displayTasks() {

    const tasks =
        getTasks();

    const list =
        document.getElementById(
            "taskList"
        );

    list.innerHTML = "";


    tasks.forEach(
        (task, index) => {

            const item =
                document.createElement(
                    "li"
                );

            item.innerHTML = `

                <span>
                    📖 ${task}
                </span>

                <button
                    class="delete-btn"
                    onclick="deleteTask(${index})">

                    Delete

                </button>

            `;

            list.appendChild(item);

        }
    );


    document.getElementById(
        "task-count"
    ).textContent =
        tasks.length +
        (tasks.length === 1
            ? " Task"
            : " Tasks");

}


// ===================================
// PROGRESS
// ===================================

function updateProgress() {

    const completed =
        JSON.parse(
            localStorage.getItem(
                "completedLessons"
            )
        ) || [];


    document.getElementById(
        "completed-count"
    ).textContent =
        completed.length;


    document.getElementById(
        "python-score"
    ).textContent =
        (
            localStorage.getItem(
                "quiz-python"
            ) || 0
        ) +
        " / 10";


    document.getElementById(
        "ds-score"
    ).textContent =
        (
            localStorage.getItem(
                "quiz-ds"
            ) || 0
        ) +
        " / 10";


    document.getElementById(
        "dbms-score"
    ).textContent =
        (
            localStorage.getItem(
                "quiz-dbms"
            ) || 0
        ) +
        " / 10";


    document.getElementById(
        "web-score"
    ).textContent =
        (
            localStorage.getItem(
                "quiz-web"
            ) || 0
        ) +
        " / 10";

}


// ===================================
// START WEBSITE
// ===================================

displayTasks();

updateProgress();