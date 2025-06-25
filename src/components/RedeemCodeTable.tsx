import React, { useEffect, useState } from "react";
import { fetchJsonData } from "../services/fetchJsonData"; // API 호출 함수
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export const RedeemCodeTable: React.FC = () => {
  const [jsonData, setJsonData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchJsonData("redeemCodeTable", "redeemCodeTable", "skson0x6ab_InformationRepository")
      .then((data) => {
        if (data) {
          setJsonData(data);
        } else {
          setError("Fail to get API Data");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading... Check the console!</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section
      id="redeemcodeTable"
      className="container py-24 sm:py-32"
    >
      <div className="bg-[#1e1b4b]/20 border border-[#7c3aed]/20 backdrop-blur-sm rounded-lg py-6 px-4 py-5">
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
        <TableRow>
          <TableHead className="text-cyan-200 text-center">Date</TableHead>
          <TableHead className="text-sky-200 text-center">Genshin Impact</TableHead>
          <TableHead className="text-purple-200 text-center">Honkai: StarRail</TableHead>
          <TableHead className="text-pink-200 text-center">Zenless Zone Zero</TableHead>
        </TableRow>
      </TableHeader>
          <TableBody>
        {jsonData.map((category: any, index: number) => (
          <TableRow
            key={index}
            className="hover:bg-[#2e2e60]/30 transition-colors"
          >
            <TableCell className="text-slate-100 text-center font-medium">{category.Date}</TableCell>
            <TableCell className="text-white text-center">{category.genshinRedeemCode}</TableCell>
            <TableCell className="text-white text-center">{category.starrailRedeemCode}</TableCell>
            <TableCell className="text-white text-center">{category.zenlessRedeemCode}</TableCell>
          </TableRow>
        ))}
      </TableBody>
        </Table>
      </div>
    </section>
  )
};



