import React, { createContext, useContext, useState } from "react";

const SliderContext = createContext(undefined);

export const SliderProvider = ({ children }) => {
  const [low, setLow] = useState(10);
  const [high, setHigh] = useState(50);

  return (
    <SliderContext.Provider value={{ low, high, setLow, setHigh }}>
      {children}
    </SliderContext.Provider>
  );
};

export const useSlider = () => {
  const context = useContext(SliderContext);
  if (!context)
    throw new Error("useSlider must be used within a SliderProvider");
  return context;
};
