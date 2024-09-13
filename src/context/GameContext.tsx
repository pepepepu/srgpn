import React, { createContext, useContext, useState } from "react";

type TeamScore = {
  teamName: string;
  points: number;
};

type GameContextType = {
  team1Score: number;
  setTeam1Score: React.Dispatch<React.SetStateAction<number>>;
  teamScores: TeamScore[];
  addTeamScore: (teamName: string, points: number) => void;
  resetTeam1Score: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [team1Score, setTeam1Score] = useState(0);
  const [teamScores, setTeamScores] = useState<TeamScore[]>([]);

  // Função para adicionar a pontuação de uma equipe
  const addTeamScore = (teamName: string, points: number) => {
    setTeamScores((prevScores) => [...prevScores, { teamName, points }]);
  };

  // Função para resetar a pontuação da equipe 1
  const resetTeam1Score = () => {
    setTeam1Score(0);
  };

  return (
    <GameContext.Provider
      value={{
        team1Score,
        setTeam1Score,
        teamScores,
        addTeamScore,
        resetTeam1Score,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
