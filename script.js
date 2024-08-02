document.getElementById('btn').addEventListener('click', function() {
    const theoryIds = ['theory1', 'theory2', 'theory3', 'theory4', 'theory5'];
    const practicalIds = ['practical6', 'practical7', 'practical8'];
    const sumIds = ['sum1', 'sum2', 'sum3', 'sum4', 'sum5', 'sum6', 'sum7', 'sum8'];
    const wordIds = ['word1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7', 'word8'];

    let grandTotal = 0;
    let theoryTotal = 0;
    let practicalTotal = 0;

    function convertNumberToWords(amount) {
        const words = [
            'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
            'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
        ];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        if (amount < 20) {
            return words[amount];
        } else if (amount < 100) {
            return tens[Math.floor(amount / 10)] + (amount % 10 !== 0 ? ' ' + words[amount % 10] : '');
        } else {
            return 'more than ninety-nine';
        }
    }

    theoryIds.forEach((id, index) => {
        const theoryValue = parseInt(document.getElementById(id).value) || 0;
        const sumElement = document.getElementById(sumIds[index]);
        const wordElement = document.getElementById(wordIds[index]);

        sumElement.textContent = theoryValue;
        wordElement.textContent = convertNumberToWords(theoryValue);

        theoryTotal += theoryValue;
    });

    practicalIds.forEach((id, index) => {
        const practicalValue = parseInt(document.getElementById(id).value) || 0;
        const sumIndex = theoryIds.length + index;
        const sumElement = document.getElementById(sumIds[sumIndex]);
        const wordElement = document.getElementById(wordIds[sumIndex]);

        sumElement.textContent = practicalValue;
        wordElement.textContent = convertNumberToWords(practicalValue);

        practicalTotal += practicalValue;
    });

    grandTotal = theoryTotal + practicalTotal;
    document.getElementById('tot').textContent = grandTotal;
    document.querySelector('.totalword').textContent = convertNumberToWords(grandTotal);

    const totalSubjects = theoryIds.length + practicalIds.length;
    const percentage = (grandTotal / (totalSubjects * 100)) * 100;

    document.getElementById('Per').textContent = percentage.toFixed(2);

    if (percentage >= 90) {
        document.getElementById('grade').textContent = 'A+';
        document.getElementById('result').textContent = 'Pass';
    } else if (percentage >= 80) {
        document.getElementById('grade').textContent = 'A';
        document.getElementById('result').textContent = 'Pass';
    } else if (percentage >= 70) {
        document.getElementById('grade').textContent = 'B+';
        document.getElementById('result').textContent = 'Pass';
    } else if (percentage >= 60) {
        document.getElementById('grade').textContent = 'B';
        document.getElementById('result').textContent = 'Pass';
    } else if (percentage >= 50) {
        document.getElementById('grade').textContent = 'C';
        document.getElementById('result').textContent = 'Pass';
    } else {
        document.getElementById('grade').textContent = 'F';
        document.getElementById('result').textContent = 'Fail';
    }
});
