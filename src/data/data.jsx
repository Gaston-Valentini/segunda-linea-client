import defaultPhoto from "../assets/images/menu-default.png";
import dessertsPanqueque from "../assets/images/menu/desserts-panqueque.jpg";
import dirtBruschetta from "../assets/images/menu/dirt-bruschetta.jpg";
import seaCalamarPlancha from "../assets/images/menu/sea-calamar-plancha.jpg";
import seaDocenaGambas from "../assets/images/menu/sea-docena-gambas.jpg";

const menuStarters = [
    {
        id: 1,
        name: "ENSALADA VARIADA",
        description:
            "Una mezcla fresca de lechuga, tomate, maíz, atún, huevo duro, cebolla, espárragos y olivas negras. Ideal para empezar tu comida con un toque saludable y colorido.",
        price: "12,00",
        photo: defaultPhoto,
    },
    {
        id: 2,
        name: "ENSALADA TEMPLADA CON QUESO",
        description:
            "Surtido de lechugas tiernas con tomates cherry dulces, nueces crocantes, queso de cabra cremoso y un toque de aceto balsámico para realzar los sabores.",
        price: "13,50",
        photo: defaultPhoto,
    },
    {
        id: 3,
        name: "ENSALADA CAPRESE",
        description:
            "Tomate raff maduro y jugoso, acompañado de mozzarella fresca y cubierto con una deliciosa salsa pesto hecha con albahaca, piñones y queso parmesano.",
        price: "14,00",
        photo: defaultPhoto,
    },
    {
        id: 4,
        name: "TOMATE DE LA HUERTA CON VENTRESCA",
        description:
            "Tomates raff frescos y sabrosos, servidos con ventresca de bonito de alta calidad y olivas negras. Un plato simple pero elegante con un toque mediterráneo.",
        price: "14,50",
        photo: defaultPhoto,
    },
    {
        id: 5,
        name: "ENSALADA DE LA CASA",
        description:
            "Una ensalada exclusiva con salmón ahumado, granada, escarola, tomate fresco y aguacate, todo aderezado con un toque de vinagreta casera.",
        price: "15,00",
        photo: defaultPhoto,
    },
    {
        id: 6,
        name: "ENSALADA RUSA",
        description:
            "Un clásico de la gastronomía, hecho con patatas, zanahorias y atún, mezclado con mayonesa y decorado con aceitunas. Sencillo pero siempre apetecible.",
        price: "7,00",
        photo: defaultPhoto,
    },
    {
        id: 7,
        name: "PATATAS BRAVAS",
        description:
            "Crujientes trozos de patata, fritos a la perfección y cubiertos con una salsa brava picante. Un clásico español para los amantes de sabores intensos.",
        price: "6,60",
        photo: defaultPhoto,
    },
    {
        id: 8,
        name: "PROVOLETA CON TOMATE FRESCO",
        description:
            "Queso provolone fundido con rodajas de tomate fresco. Un plato reconfortante y sabroso que combina lo mejor del queso y las verduras.",
        price: "7,50",
        photo: defaultPhoto,
    },
    {
        id: 9,
        name: "REVUELTO DE MORCILLA CON AJOS TIERNOS",
        description:
            "Un revuelto de huevo cremoso con morcilla y ajos tiernos. Una combinación rica y reconfortante, perfecta para los amantes de sabores intensos.",
        price: "9,30",
        photo: defaultPhoto,
    },
    {
        id: 10,
        name: "EMPANADA DE CARNE (ARGENTINA)",
        description:
            "Una empanada típica argentina, rellena de carne picada y sazonada con especias. Un bocado delicioso con un toque internacional.",
        price: "2,80",
        photo: defaultPhoto,
    },
];

const menuSea = [
    {
        id: 11,
        name: "VENTRESCA DE ATÚN A LA PLANCHA",
        description: "Delicada ventresca de atún cocinada a la plancha. Un plato refinado que resalta el sabor del mar.",
        price: "12,50",
        photo: defaultPhoto,
    },
    {
        id: 12,
        name: "CHOPITOS",
        description:
            "Calamares pequeños fritos hasta alcanzar una textura crujiente. Servidospara disfrutar al máximo cada bocado.",
        price: "9,60",
        photo: defaultPhoto,
    },
    {
        id: 13,
        name: "CALAMARES NACIONALES A LA ANDALUZA",
        description: "Calamares nacionales fritos al estilo andaluz, con un rebozado suave y dorado.",
        price: "16,50",
        photo: defaultPhoto,
    },
    {
        id: 14,
        name: "GAMBAS ROJAS AL AJILLO",
        description:
            "Gambas rojas cocinadas con ajo, aceite de oliva y guindilla, servidas calientes para resaltar el sabor y la textura. Un clásico de la cocina mediterránea.",
        price: "15,00",
        photo: defaultPhoto,
    },
    {
        id: 15,
        name: "BOQUERÓN EN VINAGRE",
        description:
            "Boquerón marinado en vinagre aderesado con ajo, perejíl y aceite de oliva virgen. Un aperitivo fresco y ácido que estimula el apetito.",
        price: "8,00",
        photo: defaultPhoto,
    },
    {
        id: 16,
        name: "MEJILLÓN TIGRE (UNIDAD)",
        description:
            "Mejillón relleno con una mezcla de mariscos y bechamel, luego empanado y frito hasta quedar crujiente. Un aperitivo único y sabroso.",
        price: "2,00",
        photo: defaultPhoto,
    },
    {
        id: 17,
        name: "CAZÓN EN ADOBO",
        description:
            "Pescado cazón marinado en vinagre, ajo y especias, luego frito hasta obtener una textura crujiente por fuera y tierna por dentro.",
        price: "9,50",
        photo: defaultPhoto,
    },
    {
        id: 18,
        name: "SEPIA A LA PLANCHA",
        description:
            "Sepia fresca cocinada a la plancha con un toque de aceite de oliva y ajo. Un plato simple pero lleno de sabor.",
        price: "15,00",
        photo: defaultPhoto,
    },
    {
        id: 19,
        name: "PULPO A LA GALLEGA",
        description:
            "Pulpo cocido a la perfección, servido con pimentón, aceite de oliva y una base de patatas cocidas. Un plato tradicional gallego que no puede faltar.",
        price: "19,80",
        photo: defaultPhoto,
    },
    {
        id: 20,
        name: "CALAMAR NACIONAL A LA PLANCHA",
        description:
            "Calamar fresco cocinado a la plancha con ajo y aceite de oliva. Un plato ligero pero con un sabor profundo.",
        price: "19,00",
        photo: seaCalamarPlancha,
    },
    {
        id: 21,
        name: "REVUELTO DE GULAS",
        description:
            "Un revuelto de huevos con gulas, ajo y guindilla. Un plato simple pero delicioso, perfecto para compartir o como aperitivo.",
        price: "9,00",
        photo: defaultPhoto,
    },
    {
        id: 22,
        name: "DOCENA DE GAMBAS ROJAS A LA PLANCHA",
        description: "Una docena de gambas rojas cocinadas a la plancha. Perfecto para compartir entre amigos.",
        price: "19,90",
        photo: seaDocenaGambas,
    },
    {
        id: 23,
        name: "BOQUERONES FRITOS",
        description:
            "Boquerones fritos hasta alcanzar un nivel de crujiente ideal, servidos con un toque de limón para un sabor refrescante.",
        price: "9,90",
        photo: defaultPhoto,
    },
];

const menuDirt = [
    {
        id: 24,
        name: "BRUSCHETTA DE JAMÓN O SALMÓN",
        description:
            "Cuatro rebanadas de pan tostado con jamón ibérico o salmón ahumado aderasadas con una deliciosa salsa de la casa.",
        price: "9,60",
        photo: dirtBruschetta,
    },
    {
        id: 25,
        name: "PARRILLADA DE VERDURAS",
        description:
            "Una selección de verduras frescas asadas a la parrilla, incluyendo pimientos, berenjenas, calabacines, champiñones y espárragos.",
        price: "13,50",
        photo: defaultPhoto,
    },
    {
        id: 26,
        name: "HUEVOS ROTOS CON JAMÓN IBÉRICO",
        description:
            "Huevos fritos rotos sobre patatas, servidos con jamón ibérico de alta calidad y acomapañdos du unos clásicos piminetos del padrón. Una combinación simple pero deliciosa.",
        price: "15,00",
        photo: defaultPhoto,
    },
    {
        id: 27,
        name: "ENTRECOT TRINCHADO CON AJOS TIERNOS",
        description:
            "Un entrecot jugoso y tierno, servido con ajos tiernos. Un plato principal ideal para los amantes de la carne.",
        price: "21,00",
        photo: defaultPhoto,
    },
    {
        id: 28,
        name: "ENTRAÑA TRINCHADA CON PIMIENTOS DEL PADRÓN",
        description: "Entraña de carne cocinada a la parrilla y servida con pimientos del padrón. Un toque picante y sabroso.",
        price: "15,00",
        photo: defaultPhoto,
    },
    {
        id: 29,
        name: "CROQUETAS DE JAMÓN (UNIDAD)",
        description:
            "Croquetas caseras rellenas de jamón ibérico y bechamel, empanadas y fritas hasta quedar crujientes por fuera y cremosas por dentro.",
        price: "1,80",
        photo: defaultPhoto,
    },
];

const menuGrill = [
    {
        id: 30,
        name: "ENTRECOT DE LA TIERRA DE ÁVILA",
        description:
            "Un entrecot de la mejor calidad, de la tierra de Ávila, cocinado al gusto y servido con una guarnición ligera.",
        price: "19,00",
        photo: defaultPhoto,
    },
    {
        id: 31,
        name: "ENTRAÑA A LA PARRILLA",
        description: "Entraña de carne cocinada a la parrilla, acompañada de una salsa de chimichurri.",
        price: "14,00",
        photo: defaultPhoto,
    },
    {
        id: 32,
        name: "SECRETO IBÉRICO DE BELLOTA",
        description:
            "Una pieza de carne de cerdo ibérico de bellota, cocinada a la parrilla para resaltar su sabor único y jugosidad.",
        price: "22,00",
        photo: defaultPhoto,
    },
    {
        id: 33,
        name: "CONTRAMUSLO DE POLLO DE CORRAL",
        description: "Contramuslo de pollo de corral, cocinado al gusto y servido con una guarnición de patas.",
        price: "17,00",
        photo: defaultPhoto,
    },
    {
        id: 34,
        name: "SOLOMILLO DE LA TIERRA DE ÁVILA",
        description: "Un solomillo de alta calidad de Ávila, cocinado a la perfección.",
        price: "24,00",
        photo: defaultPhoto,
    },
    {
        id: 35,
        name: "TIRAS DE ASADO (CHURRASCO)",
        description:
            "Carne de asado cortada en tiras, cocinada al estilo churrasco y servida con guarnición. Un clásico de las parrillas.",
        price: "14,60",
        photo: defaultPhoto,
    },
    {
        id: 36,
        name: "HAMBURGUESA DE ENTRAÑA",
        description:
            "Hamburguesa hecha con carne de entraña, servida con queso, tomate, lechuga y cebolla y acompañada de patatas fritas. Un giro único a la hamburguesa clásica.",
        price: "13,90",
        photo: defaultPhoto,
    },
    {
        id: 37,
        name: "CHULETÓN DE LA TIERRA DE ÁVILA (1 KILO)",
        description:
            "Un chuletón de 1 kilo de Ávila, cocinado a la parrilla y servido con guarniciones. Ideal para compartir entre varias personas.",
        price: "48,00",
        photo: defaultPhoto,
    },
    {
        id: 38,
        name: "SALSA DE PIMIENTA AL ROQUEFORT",
        description: "Una salsa rica y cremosa de pimienta con queso Roquefort. Ideal para acompañar platos de carne.",
        price: "2,50",
        photo: defaultPhoto,
    },
    {
        id: 39,
        name: "MOLLEJAS DE TERNERA (200 GRAMOS)",
        description:
            "Mollejas de ternera, servidas con una salsa ligera. Un plato para los amantes de los cortes menos tradicionales.",
        price: "16,00",
        photo: defaultPhoto,
    },
];

const menuIndividuals = [
    {
        id: 40,
        name: "BERENJENAS A LA PARMESANA",
        description: "Berenjenas cocinadas al estilo parmesano, con una capa de queso derretido y salsa de tomate casera.",
        price: "9,50",
        photo: defaultPhoto,
    },
    {
        id: 41,
        name: "SUPREMA DE POLLO",
        description: "Filete de pollo empanado en su punto de cocción, sabroso y jugoso, servido con una guarnición de patatas.",
        price: "14,00",
        photo: defaultPhoto,
    },
    {
        id: 42,
        name: "ESCALOPE MILANESA",
        description: "Escalope de carne empanado y frito, al estilo milanesa, acompañado de patatas.",
        price: "15,00",
        photo: defaultPhoto,
    },
    {
        id: 43,
        name: "ESCALOPE MILANESA A LA NAPOLITANA",
        description: "Escalope milanesa con una capa de salsa de tomate, queso derretido y jamón York, al estilo napolitano.",
        price: "17,00",
        photo: defaultPhoto,
    },
    {
        id: 44,
        name: "SUPREMA DE POLLO A LA NAPOLITANA",
        description: "Pollo suprema con una capa de salsa de tomate, queso derretido y jamón York, al estilo napolitano.",
        price: "17,00",
        photo: defaultPhoto,
    },
    {
        id: 45,
        name: "LASAÑA BOLOÑESA",
        description: "Lasaña rellena con salsa boloñesa, bechamel y capas de pasta, con una capa de queso derretido encima.",
        price: "9,50",
        photo: defaultPhoto,
    },
    {
        id: 46,
        name: "SECRETO DE CERDO A LA PIZZA",
        description:
            "Carne de cerdo servida con ingredientes típicos de pizza, como salsa de tomate, jamón York, queso y orégano.",
        price: "15,50",
        photo: defaultPhoto,
    },
];

const menuDesserts = [
    {
        id: 47,
        name: "TIRAMISÚ",
        description: "Tiramisú tradicional con capas de bizcocho empapadas en café y una crema suave de mascarpone.",
        price: "7,50",
        photo: defaultPhoto,
    },
    {
        id: 48,
        name: "PANQUEQUE CON DULCE DE LECHE",
        description: "Panqueque suave y esponjoso, relleno con dulce de leche, servido con una bola de helado.",
        price: "5,50",
        photo: dessertsPanqueque,
    },
    {
        id: 49,
        name: "SORBETE DE LIMÓN AL CAVA",
        description: "Sorbete de limón refrescante con un toque de cava para un sabor burbujeante y ligero.",
        price: "4,90",
        photo: defaultPhoto,
    },
    {
        id: 50,
        name: "DESAFÍO BROWNIE",
        description:
            "Brownie, helado, brownie nuevamente y helado nuevamente, bañado de sirope de chocolate y virutas de chocolate blanco. Una experiencia dulce y tentadora.",
        price: "7,50",
        photo: defaultPhoto,
    },
    {
        id: 51,
        name: "PIÑA NATURAL",
        description: "Piña fresca cortada y servida con un toque de menta. Un postre ligero y refrescante.",
        price: "4,80",
        photo: defaultPhoto,
    },
    {
        id: 52,
        name: "NARANJA PREPARADA",
        description: "Naranja fresca cortada y preparada con un toque de azúcar y cointrau. Un postre sencillo y refrescante.",
        price: "3,50",
        photo: defaultPhoto,
    },
    {
        id: 53,
        name: "HELADO VARIADO",
        description: "Helado de diferentes sabores, servido con un toque de sirope.",
        price: "4,80",
        photo: defaultPhoto,
    },
];

export { menuStarters, menuSea, menuDirt, menuGrill, menuIndividuals, menuDesserts };
