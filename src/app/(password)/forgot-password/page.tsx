import ForgotPasswordForm from "@/components/pages/password/ForgotPasswordForm"

const page = () => {
  return (
	 <div className="max-w-md mx-auto h-fit mt-20 space-y-6 p-6 border rounded-lg shadow">
		<h1 className="text-xl font-bold">
			Esqueceu sua senha?
		</h1>
		<p>
			Informe seu e-mail e enviaremos um link para redefinir sua senha.
		</p>

		<ForgotPasswordForm />
	 </div>
  )
}

export default page