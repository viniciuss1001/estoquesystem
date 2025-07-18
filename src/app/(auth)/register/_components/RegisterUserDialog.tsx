"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, "Nome Obrigatório."),
  email: z.string().email("Email inválido."),
  password: z.string().min(6, "Mínino de 6 caracteres."),
  office: z.enum(["ADMIN", "Gestor"], {
    required_error: "Selecione o cargo."
  }).optional(),
  phone: z.string().min(8, "Telegone é obigatório"),
  department: z.string().min(1, "Departamento é obrigatório."),
  description: z.string().optional()
})

type RegisterFormValues = z.infer<typeof formSchema>

interface RegisterUserDialogProps {
  companyId: string
  companyName: string
}

const RegisterUserDialog = ({ companyId, companyName }: RegisterUserDialogProps) => {
  const router = useRouter()

  const form = useForm<RegisterFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      office: "Gestor",
      phone: "",
      department: "",
      description: ""
    }
  })

  const { mutate: registerUser, isPending } = useMutation({
    mutationFn: async (data: RegisterFormValues) => {
      const respose = await api.post("/register", {
        ...data,
        companyId
      })

      return respose.data
    },
    onSuccess: () => {
      toast.success("Usuário registrado com sucesso!")
      router.push("/dashboard")
    },
    onError: () => {
      toast.error("Erro ao registrar usuário.")
    },
  })

  const onSubmit = (data: RegisterFormValues) => {
    registerUser(data)
  }


  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Cadastro na empresa: {companyName}
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="(00) 0000-0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full cursor-pointer" disabled={isPending}>
            {isPending ? "Registrando..." : "Cadastrar"}
          </Button>

        </form>
      </Form>
    </div>
  )
}

export default RegisterUserDialog