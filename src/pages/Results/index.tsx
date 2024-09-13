import React from "react";
import { useNavigate } from "react-router-dom";
import { Div, Paragraph, Button } from "../../components";
import { useGame } from "../../context/GameContext";
import colors from "../../styles/colors";

const Results: React.FC = () => {
  const { teamScores } = useGame();
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate("/endgame");
  };

  const handleNavigate = () => {
    navigate("/access");
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
          Resultados
        </Paragraph>
        <Paragraph
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.149)"
          fontSize={30}
          fontWeight={700}
          margin={0}
          color={colors.preto}
        >
          Acompanhe a sua pontuação:
        </Paragraph>
      </Div>
      <Div padding={"10px 30px"} backgroundColor={colors.folha} radius={20}>
        {teamScores.map((teamScore, index) => (
          <Paragraph
            key={index}
            fontWeight={700}
            fontSize={20}
            color={colors.preto}
          >
            {teamScore.teamName}: {teamScore.points} pontos
          </Paragraph>
        ))}
      </Div>
      <Div direction="row" gap={25}>
        <Button
          margin={0}
          borderRadius={30}
          padding={"5px 30px"}
          onClick={() => handleNavigateBack()}
          backgroundColor={colors.castanha}
          hoverBackgroundColor="#4d3d1e"
          boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
          hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
          hoverScale={1.1}
          animationDuration="0.4s"
        >
          <Paragraph fontWeight={700} fontSize={25}>
            Voltar
          </Paragraph>
        </Button>
        <Button
          margin={0}
          borderRadius={30}
          padding={"5px 30px"}
          onClick={() => handleNavigate()}
          backgroundColor={colors.castanha}
          hoverBackgroundColor="#4d3d1e"
          boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
          hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
          hoverScale={1.1}
          animationDuration="0.4s"
        >
          <Paragraph fontWeight={700} fontSize={25}>
            Voltar para início
          </Paragraph>
        </Button>
      </Div>
    </Div>
  );
};

export default Results;
