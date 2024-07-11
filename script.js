document.getElementById("grade-analyzer").addEventListener("click", (e) => {
    function testGradeAnalyzer() {
        const assignments = [75, 88, 37, 100, 100, 89, 92, 93, 68, 76, 85, 90, 40, 99];
        console.log(gradeAnalyzer(assignments));
    };
    testGradeAnalyzer();
});

const gradeAnalyzer = (assignmentGrades) => {
    const totalPoints = assignmentGrades.reduce((total, grade) => total + grade, 0);

    let average = (totalPoints / assignmentGrades.length).toFixed(1);

    let highest = assignmentGrades[0];
    for (let i = 1; i < assignmentGrades.length; i++) {
        if (assignmentGrades[i] > highest) {
            highest = assignmentGrades[i];
        }
    }

    let lowest = assignmentGrades[0];
    for (let i = 1; i < assignmentGrades.length; i++) {
        if (assignmentGrades[i] < lowest) {
            lowest = assignmentGrades[i];
        }
    }

    const passing = average >= 60;

    return {
        total: totalPoints,
        average: average,
        highest: highest,
        lowest: lowest,
        passing: passing
    };
};
