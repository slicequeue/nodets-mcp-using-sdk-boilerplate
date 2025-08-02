import { z } from "zod";

export const addTool = {
  name: 'add',
  description: '두 수를 더합니다',
  inputSchema: {
    a: z.number().describe('첫 번째 숫자'),
    b: z.number().describe('두 번째 숫자')
  },
  handler: async (args: { a: number; b: number }, extra: any) => {
    const { a, b } = args;

    // 유효성 검사
    if (!(a || b)) {
      return {
        content: [{ 
          type: 'text' as const, 
          text: `연산하기 위한 인자가 충분하지 않습니다. a: ${a}, b: ${b}` 
        }]
      };
    }

    // 처리
    const result = a + b;

    // 반환
    return {
      content: [{ 
        type: 'text' as const, 
        text: `결과: ${result}` 
      }]
    };
  }
};
