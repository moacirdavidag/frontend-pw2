import React from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import SearchBar from "./components/SearchBar/SearchBar";
import CategoriesList from "./components/CategoriesList/CategoriesList";


const Home: React.FC = () => {
  return (
    <PageLayout shouldDisplayHeader={true}>
      <SearchBar />
      <CategoriesList />
    </PageLayout>
  );
};

export default Home;
