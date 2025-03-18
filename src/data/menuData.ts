import { IMenuCategory } from "../models/IMenu";

export const menuData: IMenuCategory[] = [
  {
    title: "Förrätter (Entradas)",
    items: [
      {
        title: "Empanadas de Carne",
        description:
          "Friterade majsdegspiroger fyllda med kryddig nötkött. Serveras med en salsa rosada.",
        price: "75 kr",
      },
      {
        title: "Arepas con Queso",
        description:
          "Majsbaserade bröd fyllda med smält ost, perfekt för att starta måltiden.",
        price: "60 kr",
      },
      {
        title: "Ceviche de Camarones",
        description:
          "Färska räkor marinerade i lime, lök och koriander, serveras med tortillachips.",
        price: "95 kr",
      },
    ],
  },
  {
    title: "Huvudrätter (Platos Fuertes)",
    items: [
      {
        title: "Bandeja Paisa",
        description:
          "En generös portion med ris, bönor, grillat nötkött, chicharrón, stekt ägg, avocado, arepa och banan.",
        price: "185 kr",
      },
      {
        title: "Ajiaco",
        description:
          "En traditionell colombiansk kycklingsoppa med tre olika potatissorter, majs och guasca. Serveras med ris och avokado.",
        price: "145 kr",
      },
      {
        title: "Sancocho de Pescado",
        description:
          "En smakrik fisksoppa med kassava, majs och andra grönsaker. Serveras med ris och banan.",
        price: "155 kr",
      },
    ],
  },
  {
    title: "Desserter (Postres)",
    items: [
      {
        title: "Arroz con Leche",
        description: "En krämig risgrynsgröt med kanel och socker.",
        price: "50 kr",
      },
      {
        title: "Tres Leches",
        description: "En fuktig och söt tårta gjord på tre olika mjölktyper.",
        price: "60 kr",
      },
      {
        title: "Churros con Chocolate",
        description:
          "Friterade degstavar rullade i kanel och socker, serveras med varm chokladsås.",
        price: "55 kr",
      },
    ],
  },
  {
    title: "Drycker (Bebidas)",
    items: [
      {
        title: "Jugo Natural",
        description:
          "Färskpressad juice, välj mellan mango, ananas eller guava.",
        price: "35 kr",
      },
      {
        title: "Limonada con Hierbabuena",
        description: "Frisk limelemonad med mynta.",
        price: "40 kr",
      },
      {
        title: "Cerveza Colombiana",
        description: "Den klassiska colombianska ölen.",
        price: "45 kr",
      },
    ],
  },
];
