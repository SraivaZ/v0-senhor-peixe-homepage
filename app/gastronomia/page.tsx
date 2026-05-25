"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { SiteMenu } from "@/components/site-menu"

const baseTranslations = {
  pt: {
    pageTitle: "Menu",
    fullCarta: "Carta completa",
    fullMenu: "Menu completo",
    fullMenuDescription:
      "Aqui pode consultar a nossa carta completa, com todos os produtos disponíveis e respetiva seleção gastronómica.",
    openCarta: "Abrir carta",
    openBeveragesCarta: "Carta bebidas",
    openDessertsCarta: "Carta sobremesas",
    footer: "Senhor Peixe — Desde 1999",
    menuCategories: [
      { id: "entradas", label: "Entradas" },
      { id: "especialidades-mar", label: "Especialidades do Mar" },
      { id: "especialidades-terra", label: "Especialidades da Terra" },
      { id: "acompanhamentos", label: "Acompanhamentos" },
      { id: "sobremesas", label: "Sobremesas" },
    ],
    menuItems: {
      entradas: [
        {
          name: "Camarão ao Alho",
          description: "Camarões salteados com alho, azeite e ervas aromáticas",
          image: "/images/dishes/Entrada1.png",
        },
        {
          name: "Ameijoas",
          description: "Ameijoas salteadas com alho e coentros",
          image: "/images/dishes/Entrada2.png",
        },
        {
          name: "CASCO DE SAPATEIRA COM PÃO TORRADO",
          description: "Casco de sapateira servido com pão torrado",
          image: "/images/dishes/Entrada3.png",
        },
        {
          name: "Carabineiros",
          description: "Carabineiros selecionados, preparados para realçar o sabor do mar",
          image: "/images/dishes/Entrada4.png",
        },
      ],
      "especialidades-mar": [
        {
          name: "BITOQUE DE CAMARÃO",
          description: "Camarão frito, batata frita às rodelas, arroz branco e ovo estrelado",
          image: "/images/dishes/ESPMAR1.png",
        },
        {
          name: "ARROZ DE LAGOSTA",
          description: "Arroz agulha com lagosta",
          image: "/images/dishes/ESPMAR2.png",
        },
        {
          name: "PATAS DE CARANGUEJO DO ALASCA",
          description: "Patas de caranguejo do Alasca",
          image: "/images/dishes/ESPMAR3.png",
        },
        {
          name: "RASCASSO",
          description: "Rascasso fresco preparado para realçar o sabor do mar",
          image: "/images/dishes/ESPMAR4.png",
        },
      ],
      "especialidades-terra": [
        {
          name: "Carne de Porco Ibérico",
          description: "CARNE DE PORCO FRITA EM MASSA DE PIMENTÃO COM AMÊIJOAS E BATATA FRITA",
          image: "/images/dishes/ESPTER1.png",
        },
        {
          name: "ENTRECÔTE",
          description: "ACOMPANHADO DE BATATA FRITA E SALADA",
          image: "/images/dishes/ESPTER2.png",
        },
        {
          name: "Bife do Lombo",
          description: "ACOMPANHADO DE BATATA FRITA E SALADA",
          image: "/images/dishes/ESPTER3.png",
        },
        {
          name: "HAMBÚRGUER DE SOJA",
          description: "ACOMPANHADO DE BATATA COZIDA E SALADA",
          image: "/images/dishes/ESPTER4.png",
        },
      ],
      acompanhamentos: [
        {
          name: "Batatas a Murro",
          description: "Batatas assadas esmagadas com alho e azeite",
          image: "/images/dishes/batatas.jpg",
        },
        {
          name: "Legumes Grelhados",
          description: "Seleção de legumes da época grelhados com ervas",
          image: "/images/dishes/batatas.jpg",
        },
        {
          name: "Arroz de Tomate",
          description: "Arroz aromático com tomate fresco e manjericão",
          image: "/images/dishes/batatas.jpg",
        },
        {
          name: "Espinafres Salteados",
          description: "Espinafres frescos salteados com alho e azeite",
          image: "/images/dishes/batatas.jpg",
        },
      ],
      sobremesas: [
        {
          name: "Pastel de Nata",
          description: "Tradicional pastel de nata com canela e açúcar em pó",
          image: "/images/dishes/pastel-nata.jpg",
        },
        {
          name: "Mousse de Chocolate",
          description: "Mousse de chocolate negro com crocante de amêndoa",
          image: "/images/dishes/pastel-nata.jpg",
        },
        {
          name: "Arroz Doce",
          description: "Arroz doce cremoso com canela, receita tradicional",
          image: "/images/dishes/pastel-nata.jpg",
        },
        {
          name: "Tarte de Amêndoa",
          description: "Tarte de amêndoa do Algarve com gelado de baunilha",
          image: "/images/dishes/pastel-nata.jpg",
        },
      ],
    },
  },
  en: {
    pageTitle: "Menu",
    fullCarta: "Full menu",
    fullMenu: "Complete Menu",
    fullMenuDescription:
      "Here you can view our complete menu, with all available products and the respective gastronomic selection.",
    openCarta: "Open menu",
    openBeveragesCarta: "Drinks menu",
    openDessertsCarta: "Desserts menu",
    footer: "Senhor Peixe — Since 1999",
    menuCategories: [
      { id: "entradas", label: "Starters" },
      { id: "especialidades-mar", label: "Sea Specialities" },
      { id: "especialidades-terra", label: "Meat Specialities" },
      { id: "acompanhamentos", label: "Side Dishes" },
      { id: "sobremesas", label: "Desserts" },
    ],
    menuItems: {
      entradas: [
        {
          name: "Garlic Prawns",
          description: "Prawns sautéed with garlic, olive oil and aromatic herbs",
          image: "/images/dishes/Entrada1.png",
        },
        {
          name: "Clams",
          description: "Clams sautéed with garlic and coriander",
          image: "/images/dishes/Entrada2.png",
        },
        {
          name: "STUFFED BROWN CRAB SHELL WITH TOASTED BREAD",
          description: "Brown crab shell served with toasted bread",
          image: "/images/dishes/Entrada3.png",
        },
        {
          name: "Scarlet Prawns",
          description: "Selected scarlet prawns prepared to enhance the taste of the sea",
          image: "/images/dishes/Entrada4.png",
        },
      ],
      "especialidades-mar": [
        {
          name: "PRAWN BITOQUE",
          description: "Fried prawns, sliced fried potatoes, white rice and fried egg",
          image: "/images/dishes/ESPMAR1.png",
        },
        {
          name: "LOBSTER RICE",
          description: "Agulha rice with lobster",
          image: "/images/dishes/ESPMAR2.png",
        },
        {
          name: "ALASKAN KING CRAB LEGS",
          description: "Alaskan king crab legs",
          image: "/images/dishes/ESPMAR3.png",
        },
        {
          name: "SCORPIONFISH",
          description: "Fresh scorpionfish prepared to enhance the taste of the sea",
          image: "/images/dishes/ESPMAR4.png",
        },
      ],
      "especialidades-terra": [
        {
          name: "Iberian Pork",
          description: "FRIED PORK IN RED PEPPER PASTE WITH CLAMS AND FRENCH FRIES",
          image: "/images/dishes/ESPTER1.png",
        },
        {
          name: "ENTRECÔTE",
          description: "SERVED WITH FRENCH FRIES AND SALAD",
          image: "/images/dishes/ESPTER2.png",
        },
        {
          name: "Beef Tenderloin",
          description: "SERVED WITH FRENCH FRIES AND SALAD",
          image: "/images/dishes/ESPTER3.png",
        },
        {
          name: "SOY BURGER",
          description: "SERVED WITH BOILED POTATOES AND SALAD",
          image: "/images/dishes/ESPTER4.png",
        },
      ],
      acompanhamentos: [
        {
          name: "Smashed Potatoes",
          description: "Roasted smashed potatoes with garlic and olive oil",
          image: "/images/dishes/batatas.jpg",
        },
        {
          name: "Grilled Vegetables",
          description: "Selection of seasonal vegetables grilled with herbs",
          image: "/images/dishes/batatas.jpg",
        },
        {
          name: "Tomato Rice",
          description: "Aromatic rice with fresh tomato and basil",
          image: "/images/dishes/batatas.jpg",
        },
        {
          name: "Sautéed Spinach",
          description: "Fresh spinach sautéed with garlic and olive oil",
          image: "/images/dishes/batatas.jpg",
        },
      ],
      sobremesas: [
        {
          name: "Pastel de Nata",
          description: "Traditional custard tart with cinnamon and powdered sugar",
          image: "/images/dishes/pastel-nata.jpg",
        },
        {
          name: "Chocolate Mousse",
          description: "Dark chocolate mousse with almond crumble",
          image: "/images/dishes/pastel-nata.jpg",
        },
        {
          name: "Rice Pudding",
          description: "Creamy rice pudding with cinnamon, prepared in the traditional way",
          image: "/images/dishes/pastel-nata.jpg",
        },
        {
          name: "Almond Tart",
          description: "Algarve almond tart with vanilla ice cream",
          image: "/images/dishes/pastel-nata.jpg",
        },
      ],
    },
  },
} as const

const translations = {
  ...baseTranslations,
  es: {
    ...baseTranslations.en,
    pageTitle: "Menú",
    fullCarta: "Carta completa",
    fullMenu: "Menú completo",
    fullMenuDescription:
      "Aquí puede consultar nuestra carta completa, con todos los productos disponibles y su respectiva selección gastronómica.",
    openCarta: "Abrir carta",
    openBeveragesCarta: "Carta de bebidas",
    openDessertsCarta: "Carta de postres",
    footer: "Senhor Peixe — Desde 1999",
    menuCategories: [
      { id: "entradas", label: "Entrantes" },
      { id: "especialidades-mar", label: "Especialidades del Mar" },
      { id: "especialidades-terra", label: "Especialidades de la Tierra" },
      { id: "acompanhamentos", label: "Guarniciones" },
      { id: "sobremesas", label: "Postres" },
    ],
    menuItems: {
      ...baseTranslations.en.menuItems,
      "especialidades-mar": [
        {
          name: "BITOQUE DE GAMBAS",
          description: "Gambas fritas, patatas fritas en rodajas, arroz blanco y huevo frito",
          image: "/images/dishes/ESPMAR1.png",
        },
        {
          name: "ARROZ DE LANGOSTA",
          description: "Arroz agulha con langosta",
          image: "/images/dishes/ESPMAR2.png",
        },
        {
          name: "PATAS DE CANGREJO DE ALASKA",
          description: "Patas de cangrejo de Alaska",
          image: "/images/dishes/ESPMAR3.png",
        },
        {
          name: "CABRACHO",
          description: "Cabracho fresco preparado para realzar el sabor del mar",
          image: "/images/dishes/ESPMAR4.png",
        },
      ],
      "especialidades-terra": [
        {
          name: "Cerdo Ibérico",
          description: "CARNE DE CERDO FRITA EN PASTA DE PIMIENTO ROJO CON ALMEJAS Y PATATAS FRITAS",
          image: "/images/dishes/ESPTER1.png",
        },
        {
          name: "ENTRECOT",
          description: "ACOMPAÑADO DE PATATAS FRITAS Y ENSALADA",
          image: "/images/dishes/ESPTER2.png",
        },
        {
          name: "Solomillo de Ternera",
          description: "ACOMPAÑADO DE PATATAS FRITAS Y ENSALADA",
          image: "/images/dishes/ESPTER3.png",
        },
        {
          name: "HAMBURGUESA DE SOJA",
          description: "ACOMPAÑADA DE PATATA COCIDA Y ENSALADA",
          image: "/images/dishes/ESPTER4.png",
        },
      ],
      entradas: [
        {
          name: "Gambas al Ajillo",
          description: "Gambas salteadas con ajo, aceite de oliva y hierbas aromáticas",
          image: "/images/dishes/Entrada1.png",
        },
        {
          name: "Almejas",
          description: "Almejas salteadas con ajo y cilantro",
          image: "/images/dishes/Entrada2.png",
        },
        {
          name: "CAPARAZÓN DE BUEY DE MAR CON PAN TOSTADO",
          description: "Caparazón de buey de mar servido con pan tostado",
          image: "/images/dishes/Entrada3.png",
        },
        {
          name: "Carabineros",
          description: "Carabineros seleccionados, preparados para realzar el sabor del mar",
          image: "/images/dishes/Entrada4.png",
        },
      ],
    },

  },
  fr: {
    ...baseTranslations.en,
    pageTitle: "Menu",
    fullCarta: "Carte complète",
    fullMenu: "Menu complet",
    fullMenuDescription:
      "Ici, vous pouvez consulter notre carte complète, avec tous les produits disponibles et leur sélection gastronomique.",
    openCarta: "Ouvrir la carte",
    openBeveragesCarta: "Carte des boissons",
    openDessertsCarta: "Carte des desserts",
    footer: "Senhor Peixe — Depuis 1999",
    menuCategories: [
      { id: "entradas", label: "Entrées" },
      { id: "especialidades-mar", label: "Spécialités de la Mer" },
      { id: "especialidades-terra", label: "Spécialités de la Terre" },
      { id: "acompanhamentos", label: "Accompagnements" },
      { id: "sobremesas", label: "Desserts" },
    ],
    menuItems: {
      ...baseTranslations.en.menuItems,
      "especialidades-mar": [
        {
          name: "BITOQUE DE CREVETTES",
          description: "Crevettes frites, pommes de terre frites en rondelles, riz blanc et œuf au plat",
          image: "/images/dishes/ESPMAR1.png",
        },
        {
          name: "RIZ AU HOMARD",
          description: "Riz agulha avec homard",
          image: "/images/dishes/ESPMAR2.png",
        },
        {
          name: "PATTES DE CRABE D’ALASKA",
          description: "Pattes de crabe d’Alaska",
          image: "/images/dishes/ESPMAR3.png",
        },
        {
          name: "RASCAÇO",
          description: "Rascasse fraîche préparée pour révéler le goût de la mer",
          image: "/images/dishes/ESPMAR4.png",
        },
      ],
      "especialidades-terra": [
        {
          name: "Porc Ibérique",
          description: "PORC FRIT À LA PÂTE DE POIVRON ROUGE AVEC PALOURDES ET FRITES",
          image: "/images/dishes/ESPTER1.png",
        },
        {
          name: "ENTRECÔTE",
          description: "ACCOMPAGNÉE DE FRITES ET SALADE",
          image: "/images/dishes/ESPTER2.png",
        },
        {
          name: "Filet de Bœuf",
          description: "ACCOMPAGNÉ DE FRITES ET SALADE",
          image: "/images/dishes/ESPTER3.png",
        },
        {
          name: "BURGER DE SOJA",
          description: "ACCOMPAGNÉ DE POMMES DE TERRE CUITES ET SALADE",
          image: "/images/dishes/ESPTER4.png",
        },
      ],
      entradas: [
        {
          name: "Crevettes à l’Ail",
          description: "Crevettes sautées à l’ail, à l’huile d’olive et aux herbes aromatiques",
          image: "/images/dishes/Entrada1.png",
        },
        {
          name: "Palourdes",
          description: "Palourdes sautées à l’ail et à la coriandre",
          image: "/images/dishes/Entrada2.png",
        },
        {
          name: "CARAPACE DE TOURTEAU AVEC PAIN GRILLÉ",
          description: "Carapace de tourteau servie avec du pain grillé",
          image: "/images/dishes/Entrada3.png",
        },
        {
          name: "Carabineros",
          description: "Carabineros sélectionnés, préparés pour révéler le goût de la mer",
          image: "/images/dishes/Entrada4.png",
        },
      ],
    },

  },
  de: {
    ...baseTranslations.en,
    pageTitle: "Speisekarte",
    fullCarta: "Vollständige Karte",
    fullMenu: "Komplettes Menü",
    fullMenuDescription:
      "Hier können Sie unsere vollständige Karte mit allen verfügbaren Produkten und der gastronomischen Auswahl einsehen.",
    openCarta: "Karte öffnen",
    openBeveragesCarta: "Getränkekarte",
    openDessertsCarta: "Dessertkarte",
    footer: "Senhor Peixe — Seit 1999",
    menuCategories: [
      { id: "entradas", label: "Vorspeisen" },
      { id: "especialidades-mar", label: "Meeresspezialitäten" },
      { id: "especialidades-terra", label: "Fleischspezialitäten" },
      { id: "acompanhamentos", label: "Beilagen" },
      { id: "sobremesas", label: "Desserts" },
    ],
    menuItems: {
      ...baseTranslations.en.menuItems,
      "especialidades-mar": [
        {
          name: "GARNELEN-BITOQUE",
          description: "Frittierte Garnelen, frittierte Kartoffelscheiben, weißer Reis und Spiegelei",
          image: "/images/dishes/ESPMAR1.png",
        },
        {
          name: "HUMMERREIS",
          description: "Agulha-Reis mit Hummer",
          image: "/images/dishes/ESPMAR2.png",
        },
        {
          name: "ALASKA-KÖNIGSKRABBENBEINE",
          description: "Alaska-Königskrabbenbeine",
          image: "/images/dishes/ESPMAR3.png",
        },
        {
          name: "DRACHENKOPF",
          description: "Frischer Drachenkopf, zubereitet, um den Geschmack des Meeres hervorzuheben",
          image: "/images/dishes/ESPMAR4.png",
        },
      ],
      "especialidades-terra": [
        {
          name: "Iberisches Schweinefleisch",
          description: "GEBRATENES SCHWEINEFLEISCH IN PAPRIKAPASTE MIT VENUSMUSCHELN UND POMMES FRITES",
          image: "/images/dishes/ESPTER1.png",
        },
        {
          name: "ENTRECÔTE",
          description: "SERVIERT MIT POMMES FRITES UND SALAT",
          image: "/images/dishes/ESPTER2.png",
        },
        {
          name: "Rinderfilet",
          description: "SERVIERT MIT POMMES FRITES UND SALAT",
          image: "/images/dishes/ESPTER3.png",
        },
        {
          name: "SOJA-BURGER",
          description: "SERVIERT MIT GEKOCHTEN KARTOFFELN UND SALAT",
          image: "/images/dishes/ESPTER4.png",
        },
      ],
      entradas: [
        {
          name: "Garnelen mit Knoblauch",
          description: "Garnelen mit Knoblauch, Olivenöl und aromatischen Kräutern sautiert",
          image: "/images/dishes/Entrada1.png",
        },
        {
          name: "Venusmuscheln",
          description: "Venusmuscheln mit Knoblauch und Koriander sautiert",
          image: "/images/dishes/Entrada2.png",
        },
        {
          name: "TASCHENKREBS-SCHALE MIT GERÖSTETEM BROT",
          description: "Taschenkrebs-Schale mit geröstetem Brot serviert",
          image: "/images/dishes/Entrada3.png",
        },
        {
          name: "Carabineros",
          description: "Ausgewählte Carabineros, zubereitet, um den Geschmack des Meeres hervorzuheben",
          image: "/images/dishes/Entrada4.png",
        },
      ],
    },

  },
  it: {
    ...baseTranslations.en,
    pageTitle: "Menu",
    fullCarta: "Carta completa",
    fullMenu: "Menu completo",
    fullMenuDescription:
      "Qui può consultare la nostra carta completa, con tutti i prodotti disponibili e la rispettiva selezione gastronomica.",
    openCarta: "Apri la carta",
    openBeveragesCarta: "Carta delle bevande",
    openDessertsCarta: "Carta dei dessert",
    footer: "Senhor Peixe — Dal 1999",
    menuCategories: [
      { id: "entradas", label: "Antipasti" },
      { id: "especialidades-mar", label: "Specialità di Mare" },
      { id: "especialidades-terra", label: "Specialità di Terra" },
      { id: "acompanhamentos", label: "Contorni" },
      { id: "sobremesas", label: "Dessert" },
    ],
    menuItems: {
      ...baseTranslations.en.menuItems,
      "especialidades-mar": [
        {
          name: "BITOQUE DI GAMBERI",
          description: "Gamberi fritti, patate fritte a rondelle, riso bianco e uovo al tegamino",
          image: "/images/dishes/ESPMAR1.png",
        },
        {
          name: "RISO ALL’ARAGOSTA",
          description: "Riso agulha con aragosta",
          image: "/images/dishes/ESPMAR2.png",
        },
        {
          name: "ZAMPE DI GRANCHIO DELL’ALASKA",
          description: "Zampe di granchio dell’Alaska",
          image: "/images/dishes/ESPMAR3.png",
        },
        {
          name: "SCORFANO",
          description: "Scorfano fresco preparato per esaltare il sapore del mare",
          image: "/images/dishes/ESPMAR4.png",
        },
      ],
      "especialidades-terra": [
        {
          name: "Maiale Iberico",
          description: "CARNE DI MAIALE FRITTA IN PASTA DI PEPERONE ROSSO CON VONGOLE E PATATE FRITTE",
          image: "/images/dishes/ESPTER1.png",
        },
        {
          name: "ENTRECÔTE",
          description: "ACCOMPAGNATA DA PATATE FRITTE E INSALATA",
          image: "/images/dishes/ESPTER2.png",
        },
        {
          name: "Filetto di Manzo",
          description: "ACCOMPAGNATO DA PATATE FRITTE E INSALATA",
          image: "/images/dishes/ESPTER3.png",
        },
        {
          name: "HAMBURGER DI SOIA",
          description: "ACCOMPAGNATO DA PATATE BOLLITE E INSALATA",
          image: "/images/dishes/ESPTER4.png",
        },
      ],
      entradas: [
        {
          name: "Gamberi all’Aglio",
          description: "Gamberi saltati con aglio, olio d’oliva ed erbe aromatiche",
          image: "/images/dishes/Entrada1.png",
        },
        {
          name: "Vongole",
          description: "Vongole saltate con aglio e coriandolo",
          image: "/images/dishes/Entrada2.png",
        },
        {
          name: "GUSCIO DI GRANCIPORRO CON PANE TOSTATO",
          description: "Guscio di granciporro servito con pane tostato",
          image: "/images/dishes/Entrada3.png",
        },
        {
          name: "Carabineros",
          description: "Carabineros selezionati, preparati per esaltare il sapore del mare",
          image: "/images/dishes/Entrada4.png",
        },
      ],
    },

  },
  ru: {
    ...baseTranslations.en,
    pageTitle: "Меню",
    fullCarta: "Полное меню",
    fullMenu: "Полное меню",
    fullMenuDescription:
      "Здесь вы можете посмотреть наше полное меню со всеми доступными блюдами и гастрономической подборкой.",
    openCarta: "Открыть меню",
    openBeveragesCarta: "Карта напитков",
    openDessertsCarta: "Карта десертов",
    footer: "Senhor Peixe — С 1999 года",
    menuCategories: [
      { id: "entradas", label: "Закуски" },
      { id: "especialidades-mar", label: "Морские специалитеты" },
      { id: "especialidades-terra", label: "Мясные специалитеты" },
      { id: "acompanhamentos", label: "Гарниры" },
      { id: "sobremesas", label: "Десерты" },
    ],
    menuItems: {
      ...baseTranslations.en.menuItems,
      "especialidades-mar": [
        {
          name: "БИТОКЕ С КРЕВЕТКАМИ",
          description: "Жареные креветки, жареный картофель кружочками, белый рис и яичница",
          image: "/images/dishes/ESPMAR1.png",
        },
        {
          name: "РИС С ЛОБСТЕРОМ",
          description: "Рис агулья с лобстером",
          image: "/images/dishes/ESPMAR2.png",
        },
        {
          name: "НОЖКИ АЛЯСКИНСКОГО КРАБА",
          description: "Ножки аляскинского краба",
          image: "/images/dishes/ESPMAR3.png",
        },
        {
          name: "МОРСКОЙ ЁРШ",
          description: "Свежий морской ёрш, приготовленный так, чтобы подчеркнуть вкус моря",
          image: "/images/dishes/ESPMAR4.png",
        },
      ],
      "especialidades-terra": [
        {
          name: "Иберийская свинина",
          description: "ЖАРЕНАЯ СВИНИНА В ПАСТЕ ИЗ КРАСНОГО ПЕРЦА С МОЛЛЮСКАМИ И КАРТОФЕЛЕМ ФРИ",
          image: "/images/dishes/ESPTER1.png",
        },
        {
          name: "АНТРЕКОТ",
          description: "ПОДАЁТСЯ С КАРТОФЕЛЕМ ФРИ И САЛАТОМ",
          image: "/images/dishes/ESPTER2.png",
        },
        {
          name: "Говяжья вырезка",
          description: "ПОДАЁТСЯ С КАРТОФЕЛЕМ ФРИ И САЛАТОМ",
          image: "/images/dishes/ESPTER3.png",
        },
        {
          name: "СОЕВЫЙ БУРГЕР",
          description: "ПОДАЁТСЯ С ОТВАРНЫМ КАРТОФЕЛЕМ И САЛАТОМ",
          image: "/images/dishes/ESPTER4.png",
        },
      ],
      entradas: [
        {
          name: "Креветки с чесноком",
          description: "Креветки, обжаренные с чесноком, оливковым маслом и ароматными травами",
          image: "/images/dishes/Entrada1.png",
        },
        {
          name: "Моллюски",
          description: "Моллюски, обжаренные с чесноком и кориандром",
          image: "/images/dishes/Entrada2.png",
        },
        {
          name: "ПАНЦИРЬ КРАБА С ПОДЖАРЕННЫМ ХЛЕБОМ",
          description: "Панцирь краба, подается с поджаренным хлебом",
          image: "/images/dishes/Entrada3.png",
        },
        {
          name: "Карабинерос",
          description: "Отборные карабинерос, приготовленные так, чтобы подчеркнуть вкус моря",
          image: "/images/dishes/Entrada4.png",
        },
      ],
    },

  },
  zh: {
    ...baseTranslations.en,
    pageTitle: "菜单",
    fullCarta: "完整菜单",
    fullMenu: "完整菜单",
    fullMenuDescription:
      "在这里您可以查看我们的完整菜单，包括所有供应产品及相应的美食选择。",
    openCarta: "打开菜单",
    openBeveragesCarta: "饮品菜单",
    openDessertsCarta: "甜品菜单",
    footer: "Senhor Peixe — 始于 1999",
    menuCategories: [
      { id: "entradas", label: "前菜" },
      { id: "especialidades-mar", label: "海鲜特色" },
      { id: "especialidades-terra", label: "肉类特色" },
      { id: "acompanhamentos", label: "配菜" },
      { id: "sobremesas", label: "甜品" },
    ],
    menuItems: {
      ...baseTranslations.en.menuItems,
      "especialidades-mar": [
        {
          name: "虾仁 BITOQUE",
          description: "炸虾、圆片炸薯、白米饭和煎蛋",
          image: "/images/dishes/ESPMAR1.png",
        },
        {
          name: "龙虾饭",
          description: "Agulha 米配龙虾",
          image: "/images/dishes/ESPMAR2.png",
        },
        {
          name: "阿拉斯加帝王蟹腿",
          description: "阿拉斯加帝王蟹腿",
          image: "/images/dishes/ESPMAR3.png",
        },
        {
          name: "蝎子鱼",
          description: "新鲜蝎子鱼，突出海洋风味",
          image: "/images/dishes/ESPMAR4.png",
        },
      ],
      "especialidades-terra": [
        {
          name: "伊比利亚猪肉",
          description: "红椒酱炸猪肉，配蛤蜊和薯条",
          image: "/images/dishes/ESPTER1.png",
        },
        {
          name: "肋眼牛排",
          description: "配薯条和沙拉",
          image: "/images/dishes/ESPTER2.png",
        },
        {
          name: "牛柳",
          description: "配薯条和沙拉",
          image: "/images/dishes/ESPTER3.png",
        },
        {
          name: "大豆汉堡",
          description: "配煮土豆和沙拉",
          image: "/images/dishes/ESPTER4.png",
        },
      ],
      entradas: [
        {
          name: "蒜香虾",
          description: "虾仁以蒜、橄榄油和香草炒制",
          image: "/images/dishes/Entrada1.png",
        },
        {
          name: "蛤蜊",
          description: "蛤蜊以蒜和香菜炒制",
          image: "/images/dishes/Entrada2.png",
        },
        {
          name: "黄道蟹蟹壳配烤面包",
          description: "黄道蟹蟹壳配烤面包供应",
          image: "/images/dishes/Entrada3.png",
        },
        {
          name: "深红大虾",
          description: "精选深红大虾，突出海洋鲜味",
          image: "/images/dishes/Entrada4.png",
        },
      ],
    },

  },
  ar: {
    ...baseTranslations.en,
    pageTitle: "القائمة",
    fullCarta: "القائمة الكاملة",
    fullMenu: "القائمة الكاملة",
    fullMenuDescription:
      "يمكنكم هنا الاطلاع على قائمتنا الكاملة، مع جميع المنتجات المتوفرة والاختيارات المناسبة.",
    openCarta: "فتح القائمة",
    openBeveragesCarta: "قائمة المشروبات",
    openDessertsCarta: "قائمة الحلويات",
    footer: "Senhor Peixe — منذ 1999",
    menuCategories: [
      { id: "entradas", label: "المقبلات" },
      { id: "especialidades-mar", label: "تخصصات البحر" },
      { id: "especialidades-terra", label: "تخصصات اللحوم" },
      { id: "acompanhamentos", label: "الأطباق الجانبية" },
      { id: "sobremesas", label: "الحلويات" },
    ],
    menuItems: {
      ...baseTranslations.en.menuItems,
      "especialidades-mar": [
        {
          name: "بيتوكي روبيان",
          description: "روبيان مقلي، بطاطس مقلية شرائح، أرز أبيض وبيض مقلي",
          image: "/images/dishes/ESPMAR1.png",
        },
        {
          name: "أرز باللوبستر",
          description: "أرز أغوليا مع لوبستر",
          image: "/images/dishes/ESPMAR2.png",
        },
        {
          name: "أرجل سلطعون ألاسكا",
          description: "أرجل سلطعون ألاسكا",
          image: "/images/dishes/ESPMAR3.png",
        },
        {
          name: "سمك العقرب",
          description: "سمك عقرب طازج محضر لإبراز نكهة البحر",
          image: "/images/dishes/ESPMAR4.png",
        },
      ],
      "especialidades-terra": [
        {
          name: "لحم خنزير إيبيري",
          description: "لحم خنزير مقلي بمعجون الفلفل الأحمر مع محار وبطاطس مقلية",
          image: "/images/dishes/ESPTER1.png",
        },
        {
          name: "إنتريكوت",
          description: "يقدم مع بطاطس مقلية وسلطة",
          image: "/images/dishes/ESPTER2.png",
        },
        {
          name: "فيليه لحم بقري",
          description: "يقدم مع بطاطس مقلية وسلطة",
          image: "/images/dishes/ESPTER3.png",
        },
        {
          name: "برغر الصويا",
          description: "يقدم مع بطاطس مسلوقة وسلطة",
          image: "/images/dishes/ESPTER4.png",
        },
      ],
      entradas: [
        {
          name: "روبيان بالثوم",
          description: "روبيان مطهو بالثوم وزيت الزيتون والأعشاب العطرية",
          image: "/images/dishes/Entrada1.png",
        },
        {
          name: "محار",
          description: "محار مطهو بالثوم والكزبرة",
          image: "/images/dishes/Entrada2.png",
        },
        {
          name: "قشرة سلطعون مع خبز محمص",
          description: "قشرة سلطعون تقدم مع خبز محمص",
          image: "/images/dishes/Entrada3.png",
        },
        {
          name: "كارابينيروس",
          description: "كارابينيروس مختارة ومحضرة لإبراز نكهة البحر",
          image: "/images/dishes/Entrada4.png",
        },
      ],
    },

  },
  hi: {
    ...baseTranslations.en,
    pageTitle: "मेनू",
    fullCarta: "पूरी सूची",
    fullMenu: "पूरा मेनू",
    fullMenuDescription:
      "यहाँ आप हमारा पूरा मेनू देख सकते हैं, जिसमें उपलब्ध सभी उत्पाद और संबंधित गैस्ट्रोनॉमिक चयन शामिल हैं।",
    openCarta: "मेनू खोलें",
    openBeveragesCarta: "पेय मेनू",
    openDessertsCarta: "डेज़र्ट मेनू",
    footer: "Senhor Peixe — 1999 से",
    menuCategories: [
      { id: "entradas", label: "स्टार्टर्स" },
      { id: "especialidades-mar", label: "समुद्री विशेषताएँ" },
      { id: "especialidades-terra", label: "मांस विशेषताएँ" },
      { id: "acompanhamentos", label: "साइड डिश" },
      { id: "sobremesas", label: "डेज़र्ट" },
    ],
    menuItems: {
      ...baseTranslations.en.menuItems,
      "especialidades-mar": [
        {
          name: "झींगा बिटोक",
          description: "तले हुए झींगे, गोल कटे तले आलू, सफेद चावल और तला हुआ अंडा",
          image: "/images/dishes/ESPMAR1.png",
        },
        {
          name: "लॉबस्टर राइस",
          description: "लॉबस्टर के साथ अगुल्हा चावल",
          image: "/images/dishes/ESPMAR2.png",
        },
        {
          name: "अलास्का किंग क्रैब लेग्स",
          description: "अलास्का किंग क्रैब लेग्स",
          image: "/images/dishes/ESPMAR3.png",
        },
        {
          name: "स्कॉर्पियनफिश",
          description: "समुद्री स्वाद को उभारने के लिए तैयार की गई ताज़ी स्कॉर्पियनफिश",
          image: "/images/dishes/ESPMAR4.png",
        },
      ],
      "especialidades-terra": [
        {
          name: "इबेरियन पोर्क",
          description: "लाल मिर्च पेस्ट में तला हुआ पोर्क, क्लैम्स और फ्रेंच फ्राइज के साथ",
          image: "/images/dishes/ESPTER1.png",
        },
        {
          name: "एंत्रेकोट",
          description: "फ्रेंच फ्राइज और सलाद के साथ",
          image: "/images/dishes/ESPTER2.png",
        },
        {
          name: "बीफ टेंडरलॉइन",
          description: "फ्रेंच फ्राइज और सलाद के साथ",
          image: "/images/dishes/ESPTER3.png",
        },
        {
          name: "सोया बर्गर",
          description: "उबले आलू और सलाद के साथ",
          image: "/images/dishes/ESPTER4.png",
        },
      ],
      entradas: [
        {
          name: "लहसुन झींगे",
          description: "लहसुन, जैतून के तेल और सुगंधित जड़ी-बूटियों के साथ सॉटे किए हुए झींगे",
          image: "/images/dishes/Entrada1.png",
        },
        {
          name: "क्लैम्स",
          description: "लहसुन और धनिये के साथ सॉटे किए हुए क्लैम्स",
          image: "/images/dishes/Entrada2.png",
        },
        {
          name: "टोस्टेड ब्रेड के साथ ब्राउन क्रैब शेल",
          description: "टोस्टेड ब्रेड के साथ परोसा गया ब्राउन क्रैब शेल",
          image: "/images/dishes/Entrada3.png",
        },
        {
          name: "स्कारलेट प्रॉन्स",
          description: "समुद्री स्वाद को उभारने के लिए तैयार किए गए चुने हुए स्कारलेट प्रॉन्स",
          image: "/images/dishes/Entrada4.png",
        },
      ],
    },

  },
} as const

type MenuCategoryId = keyof typeof translations.pt.menuItems

export default function GastronomiaPage() {
  const { language } = useLanguage()
  const [activeSection, setActiveSection] = useState<MenuCategoryId>("entradas")
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false)
  const categoryNavRef = useRef<HTMLDivElement | null>(null)

  const t = translations[language as keyof typeof translations] ?? translations.pt
  const menuCategories = t.menuCategories
  const menuItems = t.menuItems

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 120)

      const sections = menuCategories.map((cat) => ({
        id: cat.id,
        element: document.getElementById(cat.id),
      }))

      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id as MenuCategoryId)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [menuCategories])

  useEffect(() => {
    const nav = categoryNavRef.current
    if (!nav) return

    const resetPosition = () => {
      const centeredLeft =
        window.innerWidth < 640 ? Math.max(0, (nav.scrollWidth - nav.clientWidth) / 2) : 0

      nav.scrollTo({ left: centeredLeft, behavior: "auto" })
    }

    resetPosition()
    const timeoutId = window.setTimeout(resetPosition, 80)

    return () => window.clearTimeout(timeoutId)
  }, [isHeaderScrolled])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      const navHeight = window.innerWidth < 640 ? 82 : 148
      const elementPosition = element.offsetTop - navHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="min-h-screen bg-stone-50">
      <SiteMenu activePage="gastronomia" />

      {/* Header with Background */}
      <header className="relative h-[360px] overflow-hidden sm:h-[430px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/RpWCc7kM/Chat-GPT-Image-12-05-2026-00-30-57.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center pb-20 text-center">
          <img
            src="/senhor-peixe-logo%20branco.png"
            alt="Senhor Peixe Logo"
            className="mb-4 h-16 w-16 object-contain drop-shadow-lg sm:h-20 sm:w-20"
          />

          <span className="font-serif text-xs uppercase tracking-[0.35em] text-white/80">
            Senhor Peixe
          </span>

          <h1 className="mt-4 font-serif text-4xl uppercase tracking-[0.18em] text-white sm:text-5xl">
            {t.pageTitle}
          </h1>

          <div
            className="mt-5 h-px w-20 bg-gradient-to-r from-transparent via-white/70 to-transparent"
            aria-hidden="true"
          />
        </div>
      </header>

      {/* Sticky Navigation Bar */}
      <nav
        className={`sticky top-0 z-30 -mt-[76px] transition-all duration-500 ${
          isHeaderScrolled
            ? "border-b border-[#e2bd93]/25 bg-[#10243d]/95 shadow-xl shadow-black/20 backdrop-blur-xl"
            : "border-y border-white/15 bg-white/10 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-6xl px-0 sm:px-4">
          <div
            className={`transition-all duration-500 ${
              isHeaderScrolled ? "py-7 sm:py-7 md:py-8" : "py-4"
            }`}
          >
            {isHeaderScrolled && (
              <div className="mb-5 text-center sm:mb-6 md:mb-7">
                <span className="font-serif text-base uppercase leading-none tracking-[0.32em] text-white/80 sm:text-2xl sm:tracking-[0.35em] md:text-[30px] lg:text-[32px]">
                  Senhor Peixe
                </span>
              </div>
            )}

            <div
              ref={categoryNavRef}
              className="w-full overflow-x-auto overflow-y-hidden px-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-4"
            >
              <ul className="mx-auto flex min-w-max -translate-x-[2%] items-center justify-center gap-[3.42px] sm:translate-x-0 sm:gap-3">
                {menuCategories.map((category) => (
                  <li key={category.id} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => scrollToSection(category.id)}
                      className={`whitespace-nowrap rounded-md border px-[5.1px] py-[5.96px] font-serif text-[8.79px] tracking-[0.01em] transition-all duration-300 sm:px-4 sm:py-2 sm:text-sm sm:tracking-wide ${
                        activeSection === category.id
                          ? isHeaderScrolled
                            ? "border-[#e2bd93]/80 bg-white/5 text-white shadow-[0_0_14px_rgba(226,189,147,0.18)]"
                            : "border-white/35 bg-white/18 text-white"
                          : isHeaderScrolled
                            ? "border-white/15 bg-white/5 text-white/75 hover:border-[#e2bd93]/45 hover:bg-white/8 hover:text-white"
                            : "border-white/15 bg-white/5 text-white/75 hover:border-white/35 hover:bg-white/12 hover:text-white"
                      }`}
                    >
                      {category.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Content */}
      <div className="mx-auto max-w-5xl px-4 py-14 sm:py-16">
        {menuCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            id={category.id}
            className="mb-16 scroll-mt-24 sm:scroll-mt-40"
          >
            {categoryIndex > 0 && (
              <div className="mb-12 flex items-center justify-center">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
              </div>
            )}

            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-x-3 sm:gap-x-4">
                <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                  -
                </span>

                <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                  {category.label}
                </h2>

                <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                  -
                </span>
              </div>

              <div
                className="mx-auto mt-4 flex w-20 flex-col items-center gap-1 sm:w-24"
                aria-hidden="true"
              >
                <span className="h-px w-20 bg-[#e2bd93]/80 sm:w-24" />
                <span className="h-px w-16 bg-[#e2bd93]/55 sm:w-20" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
              {menuItems[category.id as MenuCategoryId]?.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full shadow-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 pt-1">
                    <h3 className="font-serif text-base font-medium uppercase tracking-wide text-stone-800 sm:text-lg">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-[#1e3a5f]/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Full Menu */}
        <section className="mt-20 scroll-mt-24 sm:scroll-mt-40">
          <div className="mb-12 flex items-center justify-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
              {t.fullCarta}
            </p>

            <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>

              <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                {t.fullMenu}
              </h2>

              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>
            </div>

            <div
              className="mx-auto mt-4 flex w-20 flex-col items-center gap-1 sm:w-24"
              aria-hidden="true"
            >
              <span className="h-px w-20 bg-[#e2bd93]/80 sm:w-24" />
              <span className="h-px w-16 bg-[#e2bd93]/55 sm:w-20" />
            </div>

            <p className="mx-auto mt-6 max-w-xl font-serif text-sm leading-relaxed text-[#5f7285] sm:text-base">
              {t.fullMenuDescription}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4">
              <Link
                href="/gastronomia/Carta"
                className="inline-flex w-full max-w-[280px] items-center justify-center rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-7 py-3 font-serif text-sm uppercase tracking-[0.18em] text-white shadow-sm transition-all duration-300 hover:border-[#e2bd93] hover:bg-[#10243d] hover:shadow-[0_0_22px_rgba(226,189,147,0.24)] focus:outline-none focus:ring-2 focus:ring-[#e2bd93]/50 focus:ring-offset-2 focus:ring-offset-stone-50"
              >
                {t.openCarta}
              </Link>

              <Link
                href="/gastronomia/bebidas"
                className="inline-flex w-full max-w-[280px] items-center justify-center rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-7 py-3 font-serif text-sm uppercase tracking-[0.18em] text-white shadow-sm transition-all duration-300 hover:border-[#e2bd93] hover:bg-[#10243d] hover:shadow-[0_0_22px_rgba(226,189,147,0.24)] focus:outline-none focus:ring-2 focus:ring-[#e2bd93]/50 focus:ring-offset-2 focus:ring-offset-stone-50"
              >
                {t.openBeveragesCarta}
              </Link>

              <Link
                href="/gastronomia/sobremesas"
                className="inline-flex w-full max-w-[280px] items-center justify-center rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-7 py-3 font-serif text-sm uppercase tracking-[0.18em] text-white shadow-sm transition-all duration-300 hover:border-[#e2bd93] hover:bg-[#10243d] hover:shadow-[0_0_22px_rgba(226,189,147,0.24)] focus:outline-none focus:ring-2 focus:ring-[#e2bd93]/50 focus:ring-offset-2 focus:ring-offset-stone-50"
              >
                {t.openDessertsCarta}
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-[#10243d] py-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#10243d] via-[#132b49] to-[#10243d]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e2bd93]/40 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10">
          <Link href="/" className="inline-block group">
            <img
              src="/senhor-peixe-logo%20branco.png"
              alt="Senhor Peixe Logo"
              className="mx-auto h-16 w-16 object-contain"
            />
          </Link>

          <p className="mt-3 font-serif text-xs uppercase tracking-[0.2em] text-white/60">
            {t.footer}
          </p>
        </div>
      </footer>
    </main>
  )
}