import { app, input } from "@azure/functions";

const inputSignalR = input.generic({
  type: "signalRConnectionInfo",
  name: "connectionInfo",
  hubName: "default",
  connectionStringSetting:
    "Endpoint=https://msl-sigr-signalrcbd0aa6b3b.service.signalr.net;AccessKey=8wGRMTTMgZyc8Fzxn47VxbluYk7c0NriIA2+T9fN+54=;Version=1.0;",
});

app.http("open-signalr-connection", {
  authLevel: "anonymous",
  handler: (request, context) => {
    return { body: JSON.stringify(context.extraInputs.get(inputSignalR)) };
  },
  route: "negotiate",
  extraInputs: [inputSignalR],
});
