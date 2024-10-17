const readline = require('readline');

function Calculator() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the query to perform (e.g., 2 + 3 + 4 * 5): ', (input) => {
        const arr = input.split(" ");
        let result = parseFloat(arr[0]); // Start with the first number

        for (let i = 1; i < arr.length; i += 2) {
            const operator = arr[i];
            const nextNumber = parseFloat(arr[i + 1]);

            switch (operator) {
                case '+':
                    result += nextNumber;
                    break;
                case '-':
                    result -= nextNumber;
                    break;
                case '*':
                    result *= nextNumber;
                    break;
                case '/':
                    if (nextNumber === 0) {
                        console.log("Error: Division by zero");
                        rl.close();
                        return;
                    }
                    result /= nextNumber;
                    break;
                default:
                    console.log(`Unknown operator: ${operator}`);
                    rl.close();
                    return;
            }
        }

        console.log(`Result: ${result}`);
        rl.close();
    });
}

Calculator();
