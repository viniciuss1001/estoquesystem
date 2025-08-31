import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassWaterIcon } from "lucide-react";

export default function HomeTechnologies() {
	const technologies = [
		{ name: "Next.js 14" },
		{ name: "TypeScript" },
		{ name: "TailwindCSS + shadcn/ui" },
		{ name: "Prisma ORM" },
		{ name: "PostgreSQL" },
		{ name: "SQLite" },
		{ name: "React Query" },
		{ name: "Zod + React Hook Form" },
	];


	return (
		<section id="tecnologias" className="py-20 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-3xl font-bold text-white mb-4">Tecnologias Utilizadas</h2>
				<p className="text-white mb-12">
					Nosso sistema foi desenvolvido com tecnologias modernas para garantir desempenho, escalabilidade e segurança.
				</p>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{technologies.map((tech, index) => (
						<Card
							key={index}
							className="border border-none shadow hover:shadow-lg transition flex flex-col items-center justify-center p-4"
						>
							<CardHeader className="mb-2">
								<GlassWaterIcon />
							</CardHeader>
							<CardContent>
								<CardTitle className="text-lg font-semibold">{tech.name}</CardTitle>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
