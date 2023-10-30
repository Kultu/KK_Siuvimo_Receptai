"use client"

import { ColumnDef } from "@tanstack/react-table"

export type OrderColumn = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
}

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Produktai",
  },
  {
    accessorKey: "phone",
    header: "Telefonas",
  },
  {
    accessorKey: "address",
    header: "Adresas",
  },
  {
    accessorKey: "totalPrice",
    header: "Suma",
  },
  {
    accessorKey: "isPaid",
    header: "Sumokėta",
  },
];
