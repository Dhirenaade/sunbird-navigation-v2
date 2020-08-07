var wrench = require("wrench"),
  util = require("util");

var source = "projects/navigation-player-v2/src/lib/assets/";
var target = "dist/navigation-player-v2/lib/assets/";

wrench.copyDirSyncRecursive(source, target, {
  forceDelete: true
});

console.log("Asset files successfully copied!");