import React, { useEffect, useState } from "react";
import HeaderStyleOne from "../components/headerStyleOne";
import MagazineFilter from "../components/magazineFilter";
import LoadMagazines from "../components/loadMagazines";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
const Periodicals = () => {
    const { data: books, isLoading, isError } = useGetBooksQuery();
    const [filter, setFilter] = useState("");

   

  return (
   
    <>
      <HeaderStyleOne
        styleTwo
        headerTitle={"Find your magazines"}
        bg={"./assets/img/periodicals/bg.png"}
      />
      <MagazineFilter filter={filter} setFilter={setFilter}/>
      {isLoading && <h2>Fetching Books data...</h2>}
      {isError && <Error title={"Something went Wrong to fetch data..."} />}
      <LoadMagazines filter={filter} books={books} title="The Sprit of Islam" />
      <LoadMagazines filter={filter} alt books={books} title="Al Risala Monthly" />
      <Footer />
      <Copyright />
    </>
  );
};

export default Periodicals;
