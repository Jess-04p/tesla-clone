import {
  model3,
  modelS,
  modelX,
  modelY,
  solarPanel,
  solarRoof,
  accessories,
  powerWall,
  cyberTruck,
} from "../assets";

export const navLinks = [
  {
    id: "modelY",
    title: "Model Y",
  },
  {
    id: "model3",
    title: "Model 3",
  },
  {
    id: "modelX",
    title: "Model X",
  },
  {
    id: "modelS",
    title: "Model S",
  },
  {
    id: "solarRoof",
    title: "Solar Roof",
  },
  {
    id: "solarPanels",
    title: "Solar Panels",
  },
];

export const hero = [
  {
    id: "modelY",
    img: modelY,
    title: "Model Y",
    desc: "0.99% APR Financing",
    sdesc: "From $299/mo¹ Lease After Est. Gas Savings",
    button: ["Order Now", "Demo Drive"],
  },
  {
    id: "model3",
    img: model3,
    title: "Model 3",
    desc: "From $33,990²",
    sdesc: "After Est. Savings",
    button: ["Order Now", "Demo Drive"],
  },
  {
    id: "modelX",
    img: modelX,
    title: "Model X",
    desc: "From $63,990³",
    sdesc: "After Est. Savings",
    button: ["Order Now", "Demo Drive"],
  },
  {
    id: "modelS",
    img: modelS,
    title: "Model S",
    desc: "From $66,490⁴",
    sdesc: "After Est. Savings",
    button: ["Order Now", "Demo Drive"],
  },
  {
    id: "cyberTruck",
    img: cyberTruck,
    title: "",
    desc: "",
    sdesc: "",
    button: ["Order Now", "Learn More"],
  },
  {
    id: "solarPanels",
    img: solarPanel,
    title: "Solar Panels",
    desc: "Schedule a Virtual Consultation",
    button: ["Order Now", "Learn More"],
  },
  {
    id: "solarRoof",
    img: solarRoof,
    title: "Solar Roof",
    desc: "Produce Clean Energy From Your Roof",
    button: ["Order Now", "Learn More"],
  },
  {
    id: "powerWall",
    img: powerWall,
    title: "Powerwall",
    desc: "",
    sdesc: "",
    button: ["Order Now", "Learn More"],
  },
  {
    id: "accessories",
    img: accessories,
    title: "Accessories",
    desc: "",
    button: [, "Shop Now"],
  },
];
