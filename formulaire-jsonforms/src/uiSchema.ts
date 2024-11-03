export const uiSchema = {
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        scope: "#/properties/nom",
      },
      {
        type: "Control",
        scope: "#/properties/paysPourcentage",
        options: {
          detail: {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                scope: "#/properties/pays",
                options: {
                  autocomplete: true,
                },
              },
              {
                type: "Control",
                scope: "#/properties/pourcentage",
                options: {
                  custom: true,
                },
              },
            ],
          },
        },
      },
    ],
  };
  