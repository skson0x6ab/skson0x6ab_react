export const readWriteJsonData = async (code: string, fileName: string) => {
    try {
      const owner = "skson0x6ab";
      const repo = "skson0x6ab_InformationRepository";
      const filePath = `${fileName}.json`; 
      const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
  
      // GitHub에서 기존 파일 읽기
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
        headers: {
          Authorization: `token ${GITHUB_API_KEY}`,
          Accept: "application/vnd.github.v3+json",
        },
      });
  
      if (!response.ok) throw new Error("파일을 불러오는 데 실패했습니다.");
  
      const data = await response.json();
      const sha = data.sha;
      const base64Content = data.content;
  
      // 안전한 UTF-8 디코딩
      const binaryString = atob(base64Content);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const textDecoder = new TextDecoder("utf-8");
      const decodedContent = textDecoder.decode(bytes);
      const parsedData = JSON.parse(decodedContent);
  
      if (parsedData.activeCodes.includes(code)) return;
  
      const updatedData = {
        activeCodes: [...parsedData.activeCodes, code],
      };
  
      const updateRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
        method: "PUT",
        headers: {
          Authorization: `token ${GITHUB_API_KEY}`,
          Accept: "application/vnd.github.v3+json",
        },
        body: JSON.stringify({
          message: `Add used code: ${code}`,
          content: btoa(JSON.stringify(updatedData, null, 2)),
          sha,
        }),
      });
      console.log(updateRes);
      sessionStorage.removeItem(fileName);
      if (!updateRes.ok) throw new Error("파일 업데이트에 실패했습니다.");
    } catch (error: any) {
      throw new Error(error.message || "사용된 코드 저장 중 오류 발생");
    }
  };
  