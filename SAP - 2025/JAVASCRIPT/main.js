let produtos =[
    {"nome": "produto1",
        "preco": 10,
        "quantidade": 0
    },
    {"nome": "produto2",
    "preco": 12,
    "quantidade": 0
    },
    {"nome": "produto3",
    "preco": 13,
    "quantidade": 0
    },
    {"nome": "produto4",
    "preco": 14,
    "quantidade": 0
    },
    {"nome": "produto5",
    "preco": 15,
    "quantidade": 0
    },
]



function adiciona(param)
{   
    
    let produto = produtos.find(produto => produto.nome === param);
    console.log(produto.quantidade)
    let quant = produto.quantidade += 1
    produto = {"nome":produto.nome, "preco": produto.preco, "quantidade": quant}
    console.log(produto.quantidade)
    console.log(produto.nome)
}
let valorFinal
function calculaValor()
{   
    
    produtos.forEach(produto => valorFinal += (parseInt(produto.preco) * parseInt(produto.quantidade)))
    console.log(parseInt(valorFinal))
}


