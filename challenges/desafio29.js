db.produtos.updateMany(
    {},
    { $rename: { descricao: "descricaoSite" } },
 );
 
db.produtos.find({}, { nome: true, descricaoSite: true, _id: false });

// https://www.mongodb.com/docs/manual/reference/operator/update/rename/