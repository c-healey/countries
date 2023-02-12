import React, { useContext, useState } from "react";
interface searchContext {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = React.createContext<searchContext | undefined>(
  undefined
);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be within SearchProvider");
  }

  return context;
};

export const SearchProvider: React.FC<{ children: any }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchTerm: searchTerm,
        setSearchTerm: setSearchTerm,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
