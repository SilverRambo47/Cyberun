import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { withJsonFormsControlProps } from "@jsonforms/react";

const CountryAutocomplete = ({ data, handleChange, path }: any) => {
  const countries = ["France", "Belgique", "Allemagne", "Inconnu"];

  return (
    <Autocomplete
      options={countries}
      value={data || ""}
      onChange={(_, value) => handleChange(path, value)}
      renderInput={(params) => <TextField {...params} label="Pays" />}
    />
  );
};

export default withJsonFormsControlProps(CountryAutocomplete);
