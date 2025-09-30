import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface LoginFormProps {
  onLoginSuccess?: () => void; // 로그인 성공 시 호출
}

export function LoginForm({
  className,
  onLoginSuccess,
  ...props
}: React.ComponentProps<"div"> & LoginFormProps) {
  const { login } = useAuth(); // 🔑 전역 로그인 함수
  const [verification, setVerification] = useState(""); // 인증문자
  const [password, setPassword] = useState(""); // 비밀번호
  const [error, setError] = useState(""); // 로그인 실패 메시지

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    try {
      const success = await login(verification); // verification 입력값으로 로그인 시도
      if (success) {
        if (onLoginSuccess) onLoginSuccess(); // 부모에서 팝업 닫기 등 처리
        setTimeout(() => window.location.reload(), 50); // 새로고침
      } else {
        setError("Login failed: Invalid code");
      }
    } catch (err) {
      console.error(err);
      setError("Login error occurred");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your verification code below to login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="verification">Verification Code</Label>
                <Input
                  id="verification"
                  type="text"
                  value={verification}
                  onChange={(e) => setVerification(e.target.value)}
                  placeholder="Enter code"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
