import React from "react";
import { OptionsContainer } from "./OptionsApp.elements";
import Card from "../Cards/Card";

const OptionsApp = () => {
  return (
    <OptionsContainer>
      <div>
        <Card title="Sorteo" />
        <Card title="PC" />
        <Card title="No Tocar..." />
      </div>
    </OptionsContainer>
  );
};

export default OptionsApp;
