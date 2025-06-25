export const fetchJsonData = async (storageKey: string, fileName: string, dataRepository: string): Promise<any | null> => {
  const cachedData = sessionStorage.getItem(storageKey);

  if (cachedData) {
    console.log("Using Cached Data:", JSON.parse(cachedData));
    return JSON.parse(cachedData); // 세션에 저장된 데이터 반환
  }

  try {
    const owner = "skson0x6ab";
    const repo = dataRepository
    const filePath = `${fileName}.json`; // 동적으로 파일 경로 설정

    const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
      headers: {
        Authorization: `token ${GITHUB_API_KEY}`, // 토큰 추가
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to GitHub API request");
    }

    const responseData = await response.json();
    const base64Content = responseData.content;
    const binaryString = atob(base64Content);
    const binaryLength = binaryString.length;
    const bytes = new Uint8Array(binaryLength);

    for (let i = 0; i < binaryLength; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const textDecoder = new TextDecoder("utf-8");
    const decodedContent = textDecoder.decode(bytes);

    const jsonData = JSON.parse(decodedContent);
    sessionStorage.setItem(storageKey, JSON.stringify(jsonData)); // store data

    console.log("Fetched New Data:", jsonData);
    return jsonData;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error Fetching Data:", error.message);
      return null;
    } else {
      console.error("Error Fetching Data:", error);
      return null;
    }
  }
};
