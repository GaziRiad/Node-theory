const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1
  // fs.readFile(`${__dirname}/test-file.txt`, "utf-8", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  // Solution 2: Streams
  // const readable = fs.createReadStream(`${__dirname}/test-file.txt`);
  // readable.on("data", (chunk) => {
  //   // response is by default a writableStream
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File not found!");
  // });
  // Solution 3:
  const readable = fs.createReadStream(`${__dirname}/test-file.txt`);
  readable.pipe(res);
  // readableSource.pipe(writable Destination)
});

server.listen(8000, "localhost", () => {
  console.log("Server is listening...");
});
