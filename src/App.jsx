import React, { useState } from "react";
import Layout from "./components/Layout";
import AppContext from "./contextApp/AppContext";
import { Route, Routes } from "react-router-dom";
import Products from "./components/pages/Product/Products";
import Categories from "./components/pages/Categories/Categories";
import { useColorMode } from "@chakra-ui/react";
import CreatProducts from "./components/pages/Product/CreatProducts";
import CreatCategories from "./components/pages/Categories/CreatCategories";

const App = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <AppContext.Provider value={{ openSidebar, setOpenSidebar, toggleColorMode,colorMode }}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Products />}/>
                        <Route path="/categories" element={<Categories />}/>
                        <Route path="/creat-products" element={<CreatProducts />}/>
                        <Route path="/creat-categories" element={<CreatCategories/>}/>
                    </Route>
                </Routes>
            </AppContext.Provider>
        </>
    );
};

export default App;
