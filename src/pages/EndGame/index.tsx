import React from "react";
import { useNavigate } from "react-router-dom";
import { Div, Paragraph, Button } from "../../components";
import { useGame } from "../../context/GameContext";
import colors from "../../styles/colors";

const EndGameScreen: React.FC = () => {
  const { team1Score, setTeam1Score } = useGame();
  const navigate = useNavigate();

  const handleNavigateResults = () => {
    navigate("/results");
  };

  const handleNavigateNewGame = () => {
    setTeam1Score(0);
    navigate("/gameTeam01");
  };

  return (
    <Div
      width={"100vw"}
      height={"100vh"}
      backgroundColor={colors.branco}
      direction="column"
      justify="center"
      gap={40}
    >
      <Div gap={20}>
        <Paragraph
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.149)"
          fontSize={60}
          fontWeight={700}
          margin={0}
          color={colors.preto}
        >
          Fim de jogo
        </Paragraph>
        <Paragraph
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.149)"
          fontSize={30}
          fontWeight={700}
          margin={0}
          color={colors.preto}
        >
          Obrigado por participar!
        </Paragraph>
      </Div>
      <Div direction="row" gap={30}>
        <Button
          margin={0}
          borderRadius={30}
          padding={"5px 30px"}
          onClick={() => handleNavigateNewGame()}
          backgroundColor={colors.castanha}
          hoverBackgroundColor="#4d3d1e"
          boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
          hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
          hoverScale={1.1}
          animationDuration="0.4s"
        >
          <Paragraph fontWeight={700} fontSize={25}>
            Novo jogo
          </Paragraph>
        </Button>
        <Button
          margin={0}
          borderRadius={30}
          padding={"5px 30px"}
          onClick={() => handleNavigateResults()}
          backgroundColor={colors.castanha}
          hoverBackgroundColor="#4d3d1e"
          boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
          hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
          hoverScale={1.1}
          animationDuration="0.4s"
        >
          <Paragraph fontWeight={700} fontSize={25}>
            Ver resultados
          </Paragraph>
        </Button>
      </Div>
    </Div>
  );
};

export default EndGameScreen;
