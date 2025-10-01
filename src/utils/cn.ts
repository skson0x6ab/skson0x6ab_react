// utils/cn.ts
import { twMerge } from "tailwind-merge";

/**
 * className을 조건부로 합치고 Tailwind 중복을 자동으로 제거하는 유틸
 * 사용 예시:
 *   cn("text-sm", isActive && "text-blue-500", "font-medium")
 */
export function cn(...classes: (string | undefined | boolean | null)[]) {
  return twMerge(...classes.filter(Boolean) as string[]);
}
