import prismadb from "@/lib/prismadb";

interface GraphData {
  name: string;
  total: number;
}

export const getGraphRevenue = async (storeId: string): Promise<GraphData[]> => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const monthlyRevenue: { [key: number]: number } = {};

  for (const order of paidOrders) {
    const month = order.createdAt.getMonth();
    let revenueForOrder = 0;

    for (const item of order.orderItems) {
      revenueForOrder += item.product.price.toNumber();
    }

    monthlyRevenue[month] = (monthlyRevenue[month] || 0) + revenueForOrder;
  }

  const graphData: GraphData[] = [
    { name: "Sausis", total: monthlyRevenue[0] },
    { name: "Vasaris", total: monthlyRevenue[1] },
    { name: "Kovas", total: monthlyRevenue[2] },
    { name: "Balandis", total: monthlyRevenue[3] },
    { name: "Gegužė", total: monthlyRevenue[4] },
    { name: "Birželis", total: monthlyRevenue[5] },
    { name: "Liepa", total: monthlyRevenue[6] },
    { name: "Rugpjūtis", total: monthlyRevenue[7] },
    { name: "Rugsėjis", total: monthlyRevenue[8] },
    { name: "Spalis", total: monthlyRevenue[9] },
    { name: "Lapkritis", total: monthlyRevenue[10] },
    { name: "Gruodis", total: monthlyRevenue[11] },
  ];

  for (const month in monthlyRevenue) {
    graphData[parseInt(month)].total = monthlyRevenue[parseInt(month)];
  }

  return graphData;
};
