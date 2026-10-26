import readline from "readline";

const rl = readline.createInterface({ input: process.stdin });

const TOOLS = [
  {
    name: "get_current_time",
    description: "現在の日本時間（JST）を返します",
    inputSchema: {
      type: "object",
      properties: {},
      required: [],
    },
  },
];

function getCurrentTimeJST() {
  return new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function send(obj) {
  process.stdout.write(JSON.stringify(obj) + "\n");
}

rl.on("line", (line) => {
  let request;
  try {
    request = JSON.parse(line);
  } catch {
    return;
  }

  const { id, method, params } = request;

  if (method === "initialize") {
    send({
      jsonrpc: "2.0",
      id,
      result: {
        protocolVersion: "2024-11-05",
        capabilities: { tools: {} },
        serverInfo: { name: "time-server", version: "1.0.0" },
      },
    });
  } else if (method === "tools/list") {
    send({ jsonrpc: "2.0", id, result: { tools: TOOLS } });
  } else if (method === "tools/call") {
    if (params?.name === "get_current_time") {
      send({
        jsonrpc: "2.0",
        id,
        result: {
          content: [{ type: "text", text: `現在時刻（JST）: ${getCurrentTimeJST()}` }],
        },
      });
    } else {
      send({
        jsonrpc: "2.0",
        id,
        error: { code: -32601, message: "Tool not found" },
      });
    }
  } else {
    // notifications等は応答不要
  }
});
