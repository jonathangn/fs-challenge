const productsEx = [
  { id: 1, name: "Producto 1", price: 60 },
  { id: 2, name: "Producto 2", price: 100 },
  { id: 3, name: "Producto 3", price: 120 },
  { id: 4, name: "Producto 4", price: 70 },
];

function findBestCombination(products, budget) {
  let combination = [];

  if (products?.length && budget > 0) {
    const viableProducts = products.filter((p) => p.price <= budget);
    viableProducts?.sort((a, b) => a.price - b.price);
    topViableProduct = viableProducts[viableProducts?.length - 1];
    if (topViableProduct?.price === budget) {
      combination.push(topViableProduct);
    } else {
      let tempCombination = [];
      viableProducts?.forEach((e) => {
        const viableProdsFiltered = viableProducts?.filter((p) => p?.id !== e?.id);
        for (let i = 0; i <= viableProdsFiltered.length; i++) {
          const price = viableProdsFiltered[i]?.price ?? 0;
          if (price && (e.price + price <= budget)) tempCombination
            .push({ bundle: [e, viableProdsFiltered[i]], price: e.price + price });
        }
      })
      combination = tempCombination.sort((a, b) => a.price - b.price);
      combination = combination[combination.length - 1]?.bundle ?? [topViableProduct];
    }
    return combination
  }
  return 'Verifique los datos ingresados'
}

// findBestCombination(productsEx, 150)
