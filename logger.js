var url = "http://mylogger.io/log";
function log(message) {
  // send an HTTP REQUEST
  console.log(message);
}
module.exports.log = log;
