import React, { useEffect, useState } from "react";
import { fetchJsonData } from "../services/fetchJsonData"; // API 호출 함수
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export const FF14Dashboard: React.FC = () => {
  const [jsonData, setJsonData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
      fetchJsonData("FF14", "FF14", "DataRepository")
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
          id="about"
          className="container py-24 sm:py-32"
      >
          <div className="bg-muted/20 border rounded-lg py-5">
              <Table>
                  <TableCaption>최근 FF14 패치 목록</TableCaption>
                  <TableHeader>
                      <TableRow>
                          <TableHead className="w-[100px]">카테고리</TableHead>
                          <TableHead className="w-[300px]">내용</TableHead>
                          <TableHead >날짜</TableHead>
                      </TableRow>
                  </TableHeader>
                  <TableBody>
                      {jsonData.map((category: any, index: number) => (
                          <TableRow key={index}>
                              <TableCell className="font-medium">{category.Category}</TableCell>
                              <TableCell>{category.Text}</TableCell>
                              <TableCell>{category.Date}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </div>
      </section>
  )
};



