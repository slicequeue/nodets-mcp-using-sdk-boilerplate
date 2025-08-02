import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio";
import { PackageJsonUtil } from "./utils/PackageJsonUtil";
import { tools } from "./tools";

export { PackageJsonUtil } from "./utils/PackageJsonUtil";
export type { PackageJson } from "./utils/PackageJsonUtil";

// MCP 서버 생성
const server = new McpServer({
  name: PackageJsonUtil.getInstance().getName(),
  version: PackageJsonUtil.getInstance().getVersion(),
  title: PackageJsonUtil.getInstance().getName()
});

// 도구 등록
Object.values(tools).forEach(tool => {
  return server.registerTool(
    tool.name,
    {
      title: tool.name,
      description: tool.description,
      inputSchema: tool.inputSchema
    },
    tool.handler
  );
});

// 서버 시작
const transport = new StdioServerTransport();
server.connect(transport);

