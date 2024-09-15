// vidu ve http
import http from "node:http";
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.write("<h1>Hello Nguyên</h1>");
    response.end();
  })

  .listen(8080);

// vidu ve module
import hellob, { hello } from "./demo_module.mjs";
hello();
hellob();

// vidu ve path
import path from "node:path";
let name = "abc";
let file = "xyz.txt";
let a = path.join("/", name, file);
console.log(a);
console.log(path.basename(a));
console.log(path.dirname(a));
console.log(path.extname(a));

// vidu ve os
import os from "node:os";
console.log(os.cpus());

// vidu ve reading file
import fs from "node:fs";
fs.readFile("./hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
console.log("xyz");

// vidu ve event
import EventEmitter from "node:events";
const eventEmitter = new EventEmitter();
eventEmitter.on("myEvent", (number, a, b) => {
  console.log(`done ${number} ${a} !!!!`);
});
eventEmitter.emit("myEvent", 1, 2);
