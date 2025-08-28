import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    "Autenticação segura com JWT via NextAuth",
    "Gerenciamento de usuários (admin e gestor)",
    "Cadastro, edição e remoção de produtos",
    "Movimentações de estoque: entrada, saída, transferência",
    "Histórico completo de movimentações",
    "Dashboards com indicadores e gráficos interativos",
    "Interface moderna, responsiva e fácil de usar"
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Funcionalidades</h2>
        <p className="text-gray-200 mb-12">
          Conheça os principais recursos do nosso sistema de gerenciamento de estoque.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-none shadow hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-500">
                  <CheckCircle size={20} /> 
                  Funcionalidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
