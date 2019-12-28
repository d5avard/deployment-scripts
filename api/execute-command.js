const { exec } = require('child_process');

function executeCommand(command) {
  return new Promise(function (resolve, reject) {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject(error)
      }
      return resolve(stdout)
    })
  })
}

executeCommand("ls -la")
  .then((stdout) => {
    console.log(stdout)
  })
