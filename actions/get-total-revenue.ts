import prismadb from "@/lib/prismadb";

export const getTotalRevenue = async (storeId: string) => {
  const test = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true
    },
    include: {
      orderItems: {
        include: {
          product: true
        }
      }
    }
  });

  const paidOrders = await prismadb.store.findMany({
    where: {
      id : storeId
    },
    include: {
      orders: {
        where:{
          isPaid : true
        },
        include: {
          orderItems: {
            include: {
              product: true
            }
          }
        }
      }
    }
  });

  const totalRevenue = paidOrders.reduce((total, store) => {
    const storeTotal = store.orders.reduce((orderTotal, item) => {
      const orderitemTotal = item.orderItems.reduce((orderSum, test) => {
        return orderSum + test.product.price.toNumber();
      }, 0);
      return orderTotal + orderitemTotal;
    }, 0);
    return total + storeTotal;
  }, 0);
  
  return totalRevenue;
};
