import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import DisplayCocktail from "./DisplayCocktail";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 0.95);
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #393939;
`;

const Input = styled.input`
  width: 200px;
  height: 25px;
  border: none;
  background-color: #eee;
  border-radius: 5px;
`;

const H2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  padding: 0 50px;
  margin: 150px 0 0 0;
  color: #393939;
  text-align: center;
`;

const H4 = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
  color: #31d0aa;
  margin: 150px 0 0 0;
`;

const CocktailContainer = styled.div``;

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getCocktailByName = async () => {
    await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
      )
      .then((res) => {
        const data = res.data.drinks;
        console.log(res);
        console.log(res.data.drinks);
        setCocktails(data);

        if (data === null) {
          setErrorMessage("Please enter a valid cocktail!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const getCocktailId = () => {

  // }

  // const getCocktailDetails = () => {

  // }

  const _handleSubmit = (e) => {
    e.preventDefault();
    getCocktailByName();

    setInputValue("");

    const heading = document.querySelector("#heading");

    heading.classList.add("hidden");
  };

  return (
    <Container>
      <Form onSubmit={_handleSubmit}>
        <Label>
          Search Cocktail
          <Input
            type="text"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Label>
      </Form>

      <H2 id="heading">Search for your favorite cocktail!</H2>
      
        {cocktails === null ? (
          <H4>{errorMessage}</H4>
        ) : (
          <DisplayCocktail cocktails={cocktails} />
        )}
        
    </Container>
  );
};

export default Search;