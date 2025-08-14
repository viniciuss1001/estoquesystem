import { Suspense } from "react";
import ResetPasswordForm from "@/app/(password)/_components/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div>
        Carregando...
      </div>
    }>

      <div className="max-w-md mx-auto h-fit mt-20 space-y-6 p-6 border rounded-lg shadow">
        <h1 className="text-xl font-bold">Redefinir senha</h1>
        <ResetPasswordForm />
      </div>
    </Suspense>
  )
}
