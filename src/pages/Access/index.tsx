import React from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../styles/colors";
import { Button, Div, Paragraph } from "../../components";

const Access: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/gameTeam01");
  };

  return (
    <Div
      width={"100vw"}
      height={"100vh"}
      backgroundGradient="radial-gradient(circle at top left, #fff1b2, #e9cc4b)"
      direction="column"
      gap={25}
    >
      <Paragraph
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.336)"
        fontSize={60}
        fontWeight={800}
        margin={0}
        color={colors.preto}
      >
        SergipaNÊS
      </Paragraph>
      <Div direction="row" width={"50%"} gap={25}>
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
          animationDuration="0.9s"
        >
          <Paragraph fontSize={25}>Iniciar partida</Paragraph>
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
          <Paragraph fontSize={25}>Último ranking</Paragraph>
        </Button>
      </Div>
    </Div>
  );
};

export default Access;
