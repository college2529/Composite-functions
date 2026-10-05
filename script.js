// ==========================================
// FUNCTION COMPOSITION INTERACTIVE MACHINE
// ==========================================

// Get the input box
const numberInput = document.getElementById("numberInput");

// Get the elements that display results
const inputValue = document.getElementById("inputValue");
const outputValue = document.getElementById("outputValue");
const calculationText = document.getElementById("calculationText");

const fgResult = document.getElementById("fgResult");
const gfResult = document.getElementById("gfResult");


// ==========================================
// FUNCTIONS
// ==========================================

// Function g(x) = x + 2
function g(x) {
    return x + 2;
}


// Function f(x) = 3x
function f(x) {
    return 3 * x;
}


// ==========================================
// UPDATE FUNCTION MACHINE
// ==========================================

function updateFunctionMachine() {

    // Get the number entered by the user
    const x = Number(numberInput.value);

    // Calculate g(x)
    const gx = g(x);

    // Calculate f(g(x))
    const fg = f(gx);

    // Calculate g(f(x))
    const fx = f(x);
    const gf = g(fx);


    // Update input
    inputValue.textContent = x;


    // Update final output
    outputValue.textContent = fg;


    // Update calculation explanation
    calculationText.textContent =
        `f(g(${x})) = f(${gx}) = ${fg}`;


    // Update comparison results
    fgResult.textContent = fg;
    gfResult.textContent = gf;
}


// ==========================================
// LISTEN FOR INPUT CHANGES
// ==========================================

numberInput.addEventListener("input", updateFunctionMachine);


// Run once when the page loads
updateFunctionMachine();


// ==========================================
// QUESTIONNAIRE
// ==========================================

function startQuiz() {

    const questions = [

        {
            question: "If f(x) = 2x and g(x) = x + 3, what is f(g(2))?",

            options: [
                "7",
                "10",
                "8",
                "5"
            ],

            answer: 1
        },


        {
            question: "In f(g(x)), which function is applied first?",

            options: [
                "f(x)",
                "g(x)",
                "Both at the same time",
                "Neither"
            ],

            answer: 1
        },


        {
            question: "If f(x) = x + 5 and g(x) = 2x, what is f(g(3))?",

            options: [
                "11",
                "16",
                "13",
                "8"
            ],

            answer: 0
        },


        {
            question: "Is f(g(x)) always equal to g(f(x))?",

            options: [
                "Yes, always",
                "No, not necessarily",
                "Only when x = 0",
                "Only for linear functions"
            ],

            answer: 1
        },


        {
            question: "If g(x) = x - 4, what is g(10)?",

            options: [
                "14",
                "6",
                "40",
                "4"
            ],

            answer: 1
        },


        {
            question: "What does (f ∘ g)(x) mean?",

            options: [
                "f(x) + g(x)",
                "g(f(x))",
                "f(g(x))",
                "f(x) × g(x)"
            ],

            answer: 2
        },


        {
            question: "If f(x) = 3x and g(x) = x + 1, what is f(g(4))?",

            options: [
                "12",
                "15",
                "13",
                "7"
            ],

            answer: 1
        },


        {
            question: "In function composition, the output of one function becomes what?",

            options: [
                "The final answer",
                "A constant",
                "The input of another function",
                "A new function"
            ],

            answer: 2
        }
    ];


    let score = 0;


    // Ask each question
    for (let i = 0; i < questions.length; i++) {

        const q = questions[i];

        const userAnswer = prompt(
            `Question ${i + 1} of ${questions.length}\n\n` +
            q.question +
            `\n\n` +
            `1. ${q.options[0]}\n` +
            `2. ${q.options[1]}\n` +
            `3. ${q.options[2]}\n` +
            `4. ${q.options[3]}\n\n` +
            `Enter your answer (1-4):`
        );


        const selectedAnswer = Number(userAnswer) - 1;


        if (selectedAnswer === q.answer) {
            score++;
            alert("✅ Correct!");
        } else {
            alert(
                `❌ Not quite!\n\n` +
                `The correct answer is: ${q.options[q.answer]}`
            );
        }
    }


    // Calculate percentage
    const percentage = Math.round(
        (score / questions.length) * 100
    );


    // Display final result
    let message;


    if (percentage >= 90) {

        message =
            "🏆 Excellent!\n\n" +
            "You have a fantastic understanding of function composition!";

    } else if (percentage >= 70) {

        message =
            "🌟 Very Good!\n\n" +
            "You understand the main ideas. Keep practicing!";

    } else if (percentage >= 50) {

        message =
            "👍 Good Effort!\n\n" +
            "Review the examples and try the questionnaire again.";

    } else {

        message =
            "📚 Keep Practicing!\n\n" +
            "Go back through the learning section and try again.";
    }


    alert(
        `🎉 QUIZ COMPLETE!\n\n` +
        `Your Score: ${score}/${questions.length}\n` +
        `Percentage: ${percentage}%\n\n` +
        message
    );
}
