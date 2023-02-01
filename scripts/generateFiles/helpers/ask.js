const readline = require('readline')

module.exports = async (question) => {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(question, (x) => {
            rl.close();

            if (x === null || x === undefined || x.trim().toLowerCase() === 'n') {
                resolve(false);
            } else if (x.trim().toLowerCase() === 'y') {
                resolve(true);
            }
        });
    });
}