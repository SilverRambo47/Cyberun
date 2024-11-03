import React from "react";
import { JsonForms } from "@jsonforms/react";
import { JsonFormsRendererRegistryEntry } from "@jsonforms/core";
import { materialRenderers } from "@jsonforms/material-renderers";
import { schema } from "./schema";
import { uiSchema } from "./uiSchema";
import { initialData } from "./data";
import PercentageControl from "./PercentageControl";
import CountryAutocomplete from "./CountryAutocomplete";
import { ControlElement } from "@jsonforms/core"; // Import du type

const isControlElement = (uiSchema: any): uiSchema is ControlElement => {
  return uiSchema && uiSchema.scope;
};

const customRenderers: JsonFormsRendererRegistryEntry[] = [
  ...materialRenderers,
  { 
    tester: (uiSchema) => uiSchema.options?.custom ? 5 : -1, 
    renderer: PercentageControl 
  },
  { 
    tester: (uiSchema) => isControlElement(uiSchema) && uiSchema.scope === "#/properties/pays" ? 5 : -1, 
    renderer: CountryAutocomplete 
  }
];

const App = () => {
  return (
    <div>
      <h1>Formulaire avec Pays et Pourcentages</h1>
      <JsonForms
        schema={schema}
        uischema={uiSchema}
        data={initialData}
        renderers={customRenderers}
        onChange={({ data }) => console.log("Données:", data)}
      />
    </div>
  );
};

export default App;
