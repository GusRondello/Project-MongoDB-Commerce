// db.produtos.find({ "valoresNutricionais.0.quantidade": { $lt: 500 } }, { _id: 0, nome: 1 });

db.produtos.find({ 
    valoresNutricionais: { 
        $elemMatch: { tipo: "calorias", quantidade: { $lt: 500 } } } }, { _id: 0, nome: 1 });