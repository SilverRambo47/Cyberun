export const schema = {
  type: "object",
  properties: {
    nom: { type: "string", title: "Nom" },
    paysPourcentage: {
      type: "array",
      title: "Pays et Pourcentages",
      items: {
        type: "object",
        properties: {
          pays: {
            type: "string",
            enum: ["France", "Belgique", "Allemagne", "Inconnu"],
          },
          pourcentage: {
            type: "number",
            minimum: 0,
            maximum: 100,
          },
        },
        required: ["pays", "pourcentage"],
      },
    },
  },
  required: ["nom", "paysPourcentage"],
};
