type Question = {
  word: string;
  answers: string[];
  correctAnswer: string;
};

const questions: Question[] = [
  {
    word: "GRAVIANA",
    answers: ["Saída de praia", "Pessoa séria", "Frio forte"],
    correctAnswer: "Frio forte",
  },
  {
    word: "CALIFON",
    answers: ["Pessoa cafona", "Sutiã", "Óculos"],
    correctAnswer: "Sutiã",
  },
  {
    word: "CAMBOEIRO",
    answers: ["Chuva fraca", "Fruta do sertão", "Poço artesiano"],
    correctAnswer: "Chuva fraca",
  },
  {
    word: "VEIA D'ÁGUA",
    answers: ["Queda d'água natural", "Forte correnteza", "Lenda Urbana"],
    correctAnswer: "Forte correnteza",
  },
  {
    word: "GINGE",
    answers: ["Gastura", "Gengibre", "Animal roedor"],
    correctAnswer: "Gastura",
  },
];

export default questions;
