"use client"

import CategoryCreateForm from "@/components/pages/categories/CategoryCreateForm"
import CategoryList from "@/components/pages/categories/CategoryList"


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