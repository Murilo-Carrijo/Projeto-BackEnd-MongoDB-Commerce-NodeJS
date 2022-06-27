db.produtos.find(
    { ingredientes: { $in: ["picles"] } },
    { nome: true, ingredientes: true, valoresNutricionais: { $slice: 3 }, _id: false },
  );