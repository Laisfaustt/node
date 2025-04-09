const os = require("os")

console.log("sistema operacional:", os.platform())
console.log("arquitetura:", os.arch())
console.log("memoria livre:", os.freemem(), "bytes")
console.log("memoria livre:", os.totalmem(), "bytes")