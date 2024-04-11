const options = {
    apiUrl: "https://api.opencopilot.so/backend",
    socketUrl: "https://api.opencopilot.so",
    initialMessage: "Hola soy MarIA en que te puedo ayudar?",
    token: "afb6aed5478121de06c220bff100642a", // you can get your token from the dashboard
    triggerSelector: "#triggerSelector",
    language: "en", // the selector of the element that will trigger the copilot when clicked
    containerProps: {
      style: {
        position: "fixed",
        height: "100%",
        bottom: "0",
        right: "0",
        width: "auto"
      }
    }

  }
  window.addEventListener("DOMContentLoaded", () => initAiCoPilot(options)); // window.onload