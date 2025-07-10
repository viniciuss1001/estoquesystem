"use client"

import CategoryCreateForm from "@/app/(lists)/categories/_components/CategoryCreateForm"
import CategoryList from "@/app/(lists)/categories/_components/CategoryList"


const CategoryPage = () => {
	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<h1 className="text-3xl font-bold">Categorias</h1>
			</div>

			<CategoryCreateForm />

			<CategoryList />

		</div>

	)
}

export default CategoryPage