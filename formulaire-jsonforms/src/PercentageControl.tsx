import React, { useEffect } from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { TextField, Typography } from "@mui/material";

const PercentageControl = ({ data, handleChange, path, rootSchema }: any) => {
  const [error, setError] = React.useState("");
  const [warning, setWarning] = React.useState("");

  const validatePercentage = (value: number) => {
    if (value < 0 || value > 100) {
      setError("Le pourcentage doit être entre 0 et 100.");
    } else {
      setError("");
      handleChange(path, value);
    }
  };

  // Validation du total pourcentage
  useEffect(() => {
    const totalPercentage = rootSchema?.paysPourcentage?.reduce(
      (total: number, item: any) => total + (item.pourcentage || 0),
      0
    );

    if (totalPercentage > 100) {
      setWarning("Attention : Le total des pourcentages dépasse 100%.");
    } else if (totalPercentage < 100) {
      setWarning("");
      setError("Le total des pourcentages doit être égal à 100%.");
    } else {
      setWarning("");
      setError("");
    }
  }, [rootSchema?.paysPourcentage]);

  return (
    <div>
      <TextField
        type="number"
        value={data || ""}
        onChange={(e) => validatePercentage(Number(e.target.value))}
        error={!!error}
        helperText={error || "Entrez un pourcentage entre 0 et 100"}
        label="Pourcentage"
      />
      {warning && <Typography color="orange">{warning}</Typography>}
    </div>
  );
};

export default withJsonFormsControlProps(PercentageControl);
