import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const H4 = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
  color: #31d0aa;
  margin: 150px 0 0 0;
`;

const H3 = styled.h3`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  color: #393939;
  margin: 0 0 20px 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 1.7rem;
  }
`;

const CloseDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
`;

const Img = styled.img`
  width: 15px;

  @media screen and (min-width: 768px) {
    width: 25px;
  }
`;

const Container = styled.div`
  margin: 0 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    margin: 0 15px 0 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
`;

const P = styled.p`
  margin: 0;
  padding: 0;
  color: #393939;

  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

const InstructionWrapper = styled.div`
  margin: 10px 0 0 0;
`;

const Label = styled.label`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #393939;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Span = styled.span`
  color: #31d0aa;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ModalBtn = styled.button`
  border: none;
  background: none;
  font-size: 1.2rem;
  color: #31d0aa;
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    font-size: 1.7rem;
    margin-left: 25px;
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 1.8,
  boxShadow: 24,
  p: 4,
  button: "1.2rem",
};

const CocktailModal = ({ cocktail, errorMessage, theme }) => {
  const [cocktailDetails, setCocktailDetails] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = async (cocktail) => {
    setOpen(true);
    console.log(cocktail);
    console.log(cocktailDetails);

    await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`
      )
      .then((res) => {
        const data = res.data.drinks[0];
        setCocktailDetails(data);
        console.log(cocktailDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClose = () => setOpen(false);

  const handleBtnClick = () => {
    handleClose();
  }

  return (
    <>
      {cocktailDetails === null ? (
        <H4>{errorMessage}</H4>
      ) : (
        <>
          <ModalBtn onClick={() => handleOpen(cocktail)}>View Details</ModalBtn>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style} style={theme === 'dark' ? {backgroundColor: '#181a1b'} : {backgroundColor: '#fff'}}>
                <CloseDiv>
                  <CloseBtn type="button" onClick={handleBtnClick}><Img src="../../images/cancel.svg" alt="close button"></Img></CloseBtn>
                </CloseDiv>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  <Container>
                    <H3 style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strDrink}</H3>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure1}</Span>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strIngredient1}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure2}</Span>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strIngredient2}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure3}</Span>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strIngredient3}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure4}</Span>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strIngredient4}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure5}</Span>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strIngredient5}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure6}</Span>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strIngredient6}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure7}</Span>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strIngredient7}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure8}</Span>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strIngredient8}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure9}</Span>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strIngredient9}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure10}</Span>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strIngredient10}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure11}</Span>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strIngredient11}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure12}</Span>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strIngredient12}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure13}</Span>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strIngredient13}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure14}</Span>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strIngredient14}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure15}</Span>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strIngredient15}</P>
                    </Wrapper>
                    <InstructionWrapper>
                      <Label style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>Instructions</Label>
                      <P style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktailDetails.strInstructions}</P>
                    </InstructionWrapper>
                  </Container>
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </>
      )}
    </>
  );
};

export default CocktailModal;
