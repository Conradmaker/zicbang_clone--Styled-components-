import React, { useState, createContext, useContext } from "react";
import "./reset.css";
import MainHeader from "./components/nav/MainHeader";
import Home from "./components/home/Home";

const MainSearchState = createContext();
const MainSearchOpen = createContext();
function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <MainSearchState.Provider value={searchOpen}>
      <MainSearchOpen.Provider value={setSearchOpen}>
        <div>
          <MainHeader />
          <Home />
        </div>
      </MainSearchOpen.Provider>
    </MainSearchState.Provider>
  );
}

export default App;

export function useMainSearch() {
  const context = useContext(MainSearchState);
  return context;
}
export function useMainSearchSet() {
  const context = useContext(MainSearchOpen);
  return context;
}
