var graphConfig = new GitGraph.Template({
  colors: [ "#9993FF", "#47E8D4", "#6BDB52", "#F85BB5", "#FFA657", "#F85BB5" ],
  branch: {
    color: "#000000",
    lineWidth: 3,
    spacingX: 60,
    mergeStyle: "straight",
    showLabel: true, // display branch names on graph
    labelFont: "normal 12pt Arial",
    labelRotation: 0
  },
  commit: {
    spacingY: -200,
    dot: {
      size: 25,
      strokeColor: "#000000",
      strokeWidth: 4
    },
    tag: {
      font: "normal 12pt Arial",
      color: "yellow"
    },
    message: {
      color: "black",
      font: "normal 12pt Arial",
      displayAuthor: false,
      displayBranch: false,
      displayHash: false,
    }
  },
  arrow: {
    size: 25,
    offset: 1
  }
});

var config = {
  template: graphConfig,
  mode: "extended",
  orientation: "horizontal"
};

// You can manually fix columns to control the display.
var featureCol = 0;
var developCol = 1;
var releaseCol = 2;
var supportCol = 3;
var support2Col = 5;
var masterCol = 4;

var gitgraph = new GitGraph(config);

var master = gitgraph.branch({
  name: "master",
  column: masterCol
});
master.commit("Initial commit");

master.commit({
  messageDisplay: false
});

