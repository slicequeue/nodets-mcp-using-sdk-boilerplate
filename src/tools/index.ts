import { addTool } from './add';
import { multiplyTool } from './multiply';
import { ToolsContainer } from './types';

export const tools: ToolsContainer = {
  add: addTool,
  multiply: multiplyTool
};

export { addTool, multiplyTool }
