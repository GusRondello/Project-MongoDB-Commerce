db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });

db.produtos.updateOne(
    { nome: "Big Mac" },
    { 
        $push: { 
            vendasPorDia: { 
                $each: [60],
                $slice: 7,
                $position: 3,
            },
        },
    },
);

db.produtos.updateMany(
    { tags: "bovino" },
    { 
        $push: { 
            vendasPorDia: { 
                $each: [120],
                $slice: 7,
                $position: 6,
            },
        },
    },
);

db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });
