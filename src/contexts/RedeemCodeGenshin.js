import React, { createContext, useReducer, useEffect } from "react";
import githubAPI from "services/githubAPI"; // 변경된 API 호출 방식 적용

// 초기 상태
const initialState = {
  jsonData: null,
  loading: false,
  error: null,
};

// 액션 타입 정의
const actionTypes = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

// 리듀서 함수
const genshinReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return { ...state, loading: true, error: null };
    case actionTypes.FETCH_SUCCESS:
      return { ...state, loading: false, jsonData: action.payload };
    case actionTypes.FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Context 생성
export const GenshinCodeRedeemContext = createContext();

export const GenshinCodeRedeemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(genshinReducer, initialState);

  // JSON 데이터 가져오기
  const fetchJsonData = async () => {
    dispatch({ type: actionTypes.FETCH_START });

    try {
      const owner = "skson0x6ab";
      const repo = "DataRepository";
      const filePath = "genshinRedeemCode.json";

      const response = await githubAPI.get(`/repos/${owner}/${repo}/contents/${filePath}`);

      // Base64 디코딩
      const base64Content = response.data.content;
      const binaryString = atob(base64Content);
      const bytes = new Uint8Array(binaryString.length);

      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      const textDecoder = new TextDecoder("utf-8");
      const decodedContent = textDecoder.decode(bytes);
      const parsedData = JSON.parse(decodedContent);
      const activeCodes = parsedData.active.map((item) => item.code);

      dispatch({ type: actionTypes.FETCH_SUCCESS, payload: { activeCodes } });
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_ERROR, payload: error.message });
    }
  };

  useEffect(() => {
    fetchJsonData();
  }, []);

  return (
    <GenshinCodeRedeemContext.Provider value={{ state, fetchJsonData }}>
      {children}
    </GenshinCodeRedeemContext.Provider>
  );
};
