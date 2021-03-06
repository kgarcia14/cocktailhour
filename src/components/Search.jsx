import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import DisplayCocktail from "./DisplayCocktail";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 65px;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 1;
  
  @media screen and (min-width: 414px) {
    height: 70px;
  }
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #393939;
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  font-size: 1.2rem;
  padding: 0;
  border: 1px solid #dddddd;
  border-radius: 5px;
  outline-color:#31d0aa;
  box-shadow: 0 8px 20px -9px #3f3d56;
  text-align: center;

  @media screen and (min-width: 375px) {
    height: 40px;
  }

  @media screen and (min-width: 414px) {
    height: 45px;
  }
`;

const SearchHeading = styled.div`
    height: 75vh;
    display: flex;
    align-items: center;
    position: absolute;

  @media screen and (min-width: 568px) and (orientation: landscape) {
    height: 100%;
    }
`;

const H2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  color: #393939;
  text-align: center;
  margin: 0 40px;
  
  @media screen and (min-width: 360px) {
    font-size: 2.5rem;
    margin: 0 45px;
  }

  @media screen and (min-width: 375px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 414px) {
    font-size: 2.7rem;
    padding: 0 30px;
  }

  @media screen and (min-width: 568px) and (orientation: landscape) {
      margin: 0;
      font-size: 2.4rem;
    }

  @media screen and (min-width: 667px) and (orientation: landscape) {
      padding: 0 50px;
    }

  @media screen and (min-width: 731px) and (orientation: landscape) {
      padding: 0 80px;
    }

  @media screen and (min-width: 812px) and (orientation: landscape) {
      padding: 0 120px;
    }
`;

const H4 = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
  color: #31d0aa;
  margin: 150px 0 0 0;
`;

const Search = ({ theme }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    getCocktailByName();

    setInputValue("");

    const heading = document.querySelector("#heading");

    heading.classList.add("hidden");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} style={theme === 'dark' ? {backgroundColor: '#181a1b'} : {backgroundColor: '#fff'}}>
        <Label style={theme === 'dark' ? {color: '#31d0aa'} : {color: '#393939'}}>
          Search Cocktail
          <Input
            type="text"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={theme === 'dark' ? {background: 'none', color: '#c4bfb7'} : {}}
          />
        </Label>
      </Form>

      <SearchHeading>
        <H2 id="heading" className="heading" style={theme === 'dark' ? {color: '#c4bfb7'} : {}}>Search For Your Favorite Cocktail!</H2>
      </SearchHeading>
      
      
        {cocktails === null ? (
          <H4>{errorMessage}</H4>
        ) : (
          <DisplayCocktail cocktails={cocktails} errorMessage={errorMessage} theme={theme}/>
        )}
        
    </Container>
  );
};

export default Search;
