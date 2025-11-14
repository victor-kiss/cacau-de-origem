const cacauOrigemProducts = {
  line: "Bean to Bar (From Bean to Bar) & Specialities",
  products: [
    {
      name: "Amazônia Pura",
      keyConcept: "Exclusive Origin and Purity",
      type: "75% Dark Chocolate (Single Origin)",
      description: "Uma barra que encapsula a essência bruta da Amazônia. Feita com cacau de fazendas específicas, cultivadas em sistema agroflorestal (Cabruca), esta barra oferece notas intensas de frutas vermelhas e castanhas. É a expressão mais pura do cacau brasileiro, refletindo o respeito à terra e à origem.",
      priceBRL: 28.99,
      technicalInfo: {
        weightG: 80,
        allergens: ["Pode conter traços de leite, amendoim e nozes."]
      },
      imageUrl:'/products/chocolates/amazonia-pura.png'
    },
    
    {
      name: "Essência da Bahia",
      keyConcept: "Tradition, Craftsmanship, and Intense Character",
      type: "50% Cacao Coconut Milk Chocolate with Sea Salt",
      description: "Um resgate da tradição cacaueira da Bahia. Esta barra combina o cacau de intensidade média (50%) com leite de coco cremoso, resultando em um perfil vegano e surpreendentemente suave. A adição de flor de sal equilibra o doce e realça as notas caramelizadas e de especiarias do cacau, celebrando o processo artesanal e a paixão pela transformação do grão.",
      priceBRL: 26.99,
      technicalInfo: {
        weightG: 80,
        allergens: ["Contém Coco.", "Pode conter traços de leite, amendoim e nozes."]
      },
      imageUrl:'/products/chocolates/essencia-bahia.png'
    },
    {
      name: "Sustentável & Ancestral",
      keyConcept: "Sustainability, Purpose, and Native Ingredients",
      type: "65% Dark Chocolate with Cacao Nibs and Coconut Sugar",
      description: "O produto que melhor representa o pilar da sustentabilidade. É adoçado com o açúcar de coco, de baixo índice glicêmico e fonte sustentável, e enriquecido com nibs (pedaços crocantes de cacau torrado) para uma textura marcante. A barra é um tributo ao compromisso social e ecológico da marca, valorizando o cultivo que preserva a natureza e oferece o sabor autêntico e genuinamente brasileiro.",
      priceBRL: 29.99,
      technicalInfo: {
        weightG: 80,
        allergens: ["Pode conter traços de leite, amendoim e nozes."]
      },
      imageUrl:'/products/chocolates/sustentavel-ancestral.png'
    },
    {
      name: "Cacau Mestiço",
      keyConcept: "Connection, Brazilian Soul, and Innovative Flavor",
      type: "40% Cacao Milk Chocolate with Cashew Nut and Cupuaçu",
      description: "Uma experiência que une o prazer do chocolate ao leite com a riqueza dos ingredientes nativos do Brasil. A combinação da cremosidade do chocolate com a crocância da castanha-de-caju e a acidez exótica e tropical do cupuaçu (uma fruta típica da Amazônia) cria um perfil de sabor único. É um convite para saborear a história e a identidade do Brasil em uma única mordida.",
      priceBRL: 29.99,
      technicalInfo: {
        weightG: 80,
        allergens: ["Contém leite.", "Contém Castanha-de-Caju.", "Pode conter traços de outras nozes e amendoim."]
      },
      imageUrl:'/products/chocolates/cacau-mestico.png'
    },
    
    {
      name: "Ritual do Cacau",
      keyConcept: "Saúde, Bem-estar e Experiência Sensorial",
      type: "Chocolate Amargo 85% Cacau com Pimenta Rosa e Sal do Himalaia",
      description: "Para os verdadeiros apreciadores de cacau, esta barra eleva o sabor a um novo patamar. Com 85% de cacau de alta qualidade, notas intensas e terrosas são realçadas por um toque picante da pimenta rosa e a mineralidade sutil do sal do Himalaia. Uma experiência complexa e refinada que convida à degustação consciente.",
      priceBRL: 31.50,
      technicalInfo: {
        weightG: 80,
        allergens: ["Pode conter traços de leite e nozes."]
      },
      imageUrl:'/products/chocolates/ritual-do-cacau.png'
    },
    {
      name: "Doce Brasil",
      keyConcept: "Aconchego, Memória e Doçura Natural",
      type: "Chocolate Branco com Castanha-do-Pará e Doce de Leite Cremoso",
      description: "Uma homenagem aos sabores doces e acolhedores do Brasil. Este chocolate branco premium, feito com manteiga de cacau de origem, é enriquecido com pedaços crocantes da castanha-do-Pará e um recheio generoso de doce de leite cremoso. Uma barra que evoca memórias afetivas e a riqueza dos doces tradicionais brasileiros.",
      priceBRL: 33.99,
      technicalInfo: {
        weightG: 80,
        allergens: ["Contém Leite.", "Contém Castanha-do-Pará.", "Pode conter traços de outras nozes e amendoim."]
      },
      imageUrl:'/products/chocolates/doce-brasil.png'
    },
    {
      name: "Bombom Amazônico",
      keyConcept: "Exotismo, Frescor e Surpresa",
      type: "Bombom de Chocolate Meio Amargo com Recheio de Maracujá e Jambu",
      description: "Um mergulho nos sabores inusitados da Amazônia. Este bombom combina a intensidade do chocolate meio amargo com um recheio surpreendente de ganache de maracujá, que oferece uma acidez vibrante, e um toque sutil de jambu, a planta amazônica que provoca uma leve sensação de formigamento e frescor na boca. Uma explosão de brasilidade em cada mordida.",
      priceBRL: 24.99, 
      technicalInfo: {
        weightG: 25,
        allergens: ["Contém leite.", "Pode conter traços de nozes."]
      },
      imageUrl:'/products/chocolates/bombom-amazonico.png'
    },
    {
      name: "Bombom de Brigadeiro Gourmet",
      keyConcept: "Conforto, Celebrar e Tradição Reinventada",
      type: "Bombom de Chocolate ao Leite com Recheio Cremoso de Brigadeiro e Crocante de Cacau",
      description: "O clássico brasileiro em sua versão mais elegante e deliciosa. Um bombom de chocolate ao leite que envolve um recheio de brigadeiro gourmet, com a textura perfeita e o sabor autêntico que remete às festas e celebrações. Finalizado com um crocante de cacau, é a doçura que conforta e agrada a todos os paladares.",
      priceBRL: 24.99, 
      technicalInfo: {
        weightG: 25,
        allergens: ["Contém leite.", "Pode conter traços de nozes."]
      },
      imageUrl:'/products/chocolates/bombom-brigadeiro-gourmet.png'
    }
  ]
};

export default cacauOrigemProducts;