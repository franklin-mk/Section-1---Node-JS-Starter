const fsPromises = require("fs").promises;
const path = require('path')

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"), "utf8")
        console.log(data);

        await fsPromises.unlink(path.join(__dirname, "files", 'starter.txt'))
        await fsPromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data)
        await fsPromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), "\n\nNice to meet you")
        await fsPromises.rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "PromiseRenamed.txt"))

        const newData = await fsPromises.readFile(path.join(__dirname, "files", "PromiseRenamed.txt"), "utf8")
        console.log(newData);

    } catch (err) {
        console.error(err)
    }
}

fileOps();

/* fs.readFile("./files/starter.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
}) */

/* fs.readFile(path.join(__dirname, 'files', 'starter.txt'), "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
}) */

//console.log("Hello Mr.")

/* fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), "Nice to meet you", "utf8", (err) => {
    if (err) throw err;
    console.log('Write operation success');

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), "\n\nWhat is your name?", "utf8", (err) => {
        if (err) throw err;
        console.log('Append successful');

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'testReply.txt'), (err) => {
            if (err) throw err;
            console.log('Rename operation success');
        })

    })
})

fs.appendFile(path.join(__dirname, 'files', 'test.txt'), "Testing append text", "utf8", (err) => {
    if (err) throw err;
    console.log('Append operation success');
}) */

//EXIT on uncaught errors
process.on("uncaughtException", (err) => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})