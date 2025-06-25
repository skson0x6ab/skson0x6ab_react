import React, { useEffect, useState } from "react";
import { fetchJsonData } from "../services/fetchJsonData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { readWriteJsonData } from "../services/readWriteJsonData";
import { Check } from "lucide-react";
import { Badge } from "./ui/badge";

interface RedeemCode {
  code: string;
}

export const ZenlessRedeemCode: React.FC = () => {
  const [codes, setCodes] = useState<RedeemCode[]>([]); // ✅ 타입 수정
  const [usedCodes, setUsedCodes] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const activeData = await fetchJsonData("zenlessRedeemCode", "zenlessRedeemCode", "DataRepository");
        const usedData = await fetchJsonData("zenlessRedeemCodeUsed", "zenlessRedeemCodeUsed", "skson0x6ab_InformationRepository");

        // activeCodes 대신 active 배열에서 객체 추출
        setCodes(activeData?.active || []);
        setUsedCodes(usedData?.activeCodes || []);
      } catch (err: any) {
        setError(err.message || "데이터 로딩 중 오류 발생");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 사용된 코드에 추가하는 함수: 실제 API 연동 필요
  const markCodeAsUsed = async (code: string) => {
    await readWriteJsonData(code, 'zenlessRedeemCodeUsed');
  };

  const handleMarkUsed = async (code: string) => {
    try {
      await markCodeAsUsed(code);
      setUsedCodes((prev) => [...prev, code]);
    } catch {
      alert("코드를 사용된 상태로 표시하는 데 실패했습니다.");
    }
  };

  if (loading) return <p>로딩 중입니다...</p>;
  if (error) return <p className="text-red-600">오류: {error}</p>;

  return (
    <section id="redeem" className="container py-24 sm:py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        <span className="bg-gradient-to-b from-[#D47BFF] to-[#7FFFD4] text-transparent bg-clip-text">
          Zenless Zone Zero
        </span>
      </h2>
      <div className="bg-[#1e1b4b]/20 border border-[#7c3aed]/20 backdrop-blur-sm rounded-lg py-1 px-3">
        {codes.length === 0 ? (
          <p className="text-center text-gray-500">사용 가능한 코드가 없습니다.</p>
        ) : (
          <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center text-cyan-200">Status</TableHead>
              <TableHead className="text-center text-lime-100">Redeem Code</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {codes.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="text-center text-white">
                  {usedCodes.includes(item.code) ? (
                    <div className="flex justify-center items-center">
                      <Check className="w-4 h-4 text-purple-300 mr-1" />
                    </div>
                  ) : (
                    <Badge
                      onClick={() => handleMarkUsed(item.code)}
                      className="cursor-pointer bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:brightness-110 text-white px-3 py-1 rounded"
                    >
                      사용 필요
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  <span
                    onClick={() =>
                      window.open(`https://zenless.hoyoverse.com/redemption?code=${item.code}`, "_blank")
                    }
                    className="cursor-pointer text-cyan-200 hover:text-fuchsia-200"
                  >
                    {item.code}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        )}
      </div>
    </section>
  );
};
