const products = [
  {
    id: "1",
    name: "mother asrock",
    price: "100",
    category: "Mothers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsYpWdylkjne6VVgwpCwLaR3zj1C1sT1Jmg&usqp=CAU",
    stock: "5",
    description: "placa madre de asrock",
  },
  {
    id: "2",
    name: "mother asus",
    price: "200",
    category: "Mothers",
    img: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90MB1500-M0EAY0_800.jpg",
    stock: "5",
    description: "placa madre de asus",
  },
  {
    id: "3",
    name: "mother tuf gaming",
    price: "300",
    category: "Mothers",
    img: "https://fullh4rd.com.ar/img/productos/2/mother-asus-z690-plus-tuf-gaming-wifi-d4-ddr4-s1700-0.jpg",
    stock: "5",
    description: "placa madre de tuf",
  },
  {
    id: "4",
    name: "gtx 1660",
    price: "300",
    category: "Placas de video",
    img: "https://http2.mlstatic.com/D_NQ_NP_647509-MLA47177308818_082021-O.webp",
    stock: "5",
    description: "placa de video gtx 1660 nvidia",
  },
  {
    id: "5",
    name: "amd rx 6800",
    price: "400",
    category: "Placas de video",
    img: "https://http2.mlstatic.com/D_NQ_NP_606496-MLU72579384442_112023-O.webp",
    stock: "5",
    description: "placa de video amd rx 6800",
  },
  {
    id: "6",
    name: "rtx 3080 ti",
    price: "500",
    category: "Placas de video",
    img: "https://http2.mlstatic.com/D_NQ_NP_724124-MLA48742264180_012022-O.webp",
    stock: "5",
    description: "placa de video rtx 3080 ti nvidia",
  },
  {
    id: "7",
    name: "ryzen 3",
    price: "600",
    category: "Procesadores",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTA4kZhgrbOdegvJMeh7F3fdJ_KcwAM652tEfFCKHf10nMNWkZmsm5cHO_KVV_2yzxL7M&usqp=CAU",
    stock: "5",
    description: "procesador ryzen 3",
  },
  {
    id: "8",
    name: "ryzen 5",
    price: "800",
    category: "Procesadores",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNple2sz6LgblHG0fCbvAwNzFV5EHAyPHFEv8Gn4xEBWRAy7aModZhLlDe1PnqNZ_SeA&usqp=CAU",
    stock: "5",
    description: "procesador ryzen 5",
  },
  {
    id: "9",
    name: "ryzen 9",
    price: "900",
    category: "Procesadores",
    img: "https://http2.mlstatic.com/D_NQ_NP_657275-MLA31853066320_082019-O.webp",
    stock: "5",
    description: "procesador ryzen 9",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 500);
    });
  };

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
