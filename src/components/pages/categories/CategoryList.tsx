"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import api from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import CategoryEditDialog from "./CategoryEditDialog";
import { Trash2 } from "lucide-react";
import { useCategories } from "@/lib/queries";

const CategoryList = () => {
  const queryClient = useQueryClient();

  const { data: categories = [], isLoading: categoriesLoading } = useCategories()

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/categories/${id}`);
    },
    onSuccess: () => {
      toast.success("Categoria deletada com sucesso");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: () => {
      toast.error("Erro ao deletar categoria");
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Categorias</CardTitle>
        <CardDescription>
          Total de {categories.length} categoria (s) registradas.
        </CardDescription>
      </CardHeader>

      <div className="overflow-x-auto p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Categoria</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.length === 0 ? (
              <TableRow>
                <TableCell colSpan={2} className="text-center">
                  Nenhuma categoria registrada.
                </TableCell>
              </TableRow>
            ) : (
              categories.map((category: any) => (
                <TableRow key={category.id}>
                  <TableCell>{category.name}</TableCell>
                  <TableCell className="text-right space-x-2 flex ml-auto gap-2 justify-end items-end">

                    <CategoryEditDialog category={category} />


                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteMutation.mutate(category.id)}
                      className="flex gap-2 cursor-pointer"
                    >
                      <Trash2 className="size-4" />
                      Excluir
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default CategoryList
