class StopWatch {
  constructor() {
    let startTime, stopTime, running, duration = 0;

    this.start = function () {
      if (running) {
        throw new Error("App is still running!");
      }
      running = true;
      startTime = new Date();
      console.log("App running...");
    };

    this.stop = function () {
      if (!running) {
        throw new Error("App has not started");
      }
      running = false;
      stopTime = new Date();
      const seconds = (stopTime.getTime() - startTime.getTime())/1000;
      duration += seconds;
      console.log("Duration :", `${duration} seconds`);

    };
    
    this.reset = function () {
      startTime = null;
      stopTime = null;
      running = false;
      duration = 0;
    };
  }
}

