"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type ProductColumn = {
  id: string
  name: string;
  price: string;
  category: string;
  size: string;
  color: string;
  createdAt: string;
  isFeatured: boolean;
  isArchived: boolean;
}

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Pavadinimas",
  },
  {
    accessorKey: "isArchived",
    header: "Archyvuotas",
  },
  {
    accessorKey: "isFeatured",
    header: "Reklamuojamas",
  },
  {
    accessorKey: "price",
    header: "Kaina",
  },
  {
    accessorKey: "category",
    header: "Kategorija",
  },
  {
    accessorKey: "size",
    header: "Dydis",
  },
  {
    accessorKey: "color",
    header: "Spalva",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.color}
        <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: row.original.color }} />
      </div>
    )
  },
  {
    accessorKey: "createdAt",
    header: "Data",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];
