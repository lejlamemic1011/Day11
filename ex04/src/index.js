var monitorsListArray = ["Apple", "Peach", "Berry"];
var monitorsList = [];

function myMonitorsFunction(arr) {
  var newMonitorsList = [];

  for (i = 0; i < arr.length; i++) {
    newMonitorsList.push([arr[i], i + 1]);
  }

  return newMonitorsList;
}
console.log(myMonitorsFunction(monitorsListArray));

module.exports = myMonitorsFunction;
©
