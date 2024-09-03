import styled from "styled-components";

import dice_1 from '../assets/images/dice_1.png';
import dice_2 from '../assets/images/dice_2.png';
import dice_3 from '../assets/images/dice_3.png';
import dice_4 from '../assets/images/dice_4.png';
import dice_5 from '../assets/images/dice_5.png';
import dice_6 from '../assets/images/dice_6.png';

const diceImages = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];

const RollDice = ({rollDice, currentDice}) => {


  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={diceImages[currentDice - 1]} alt="" />
      </div>
      <p>CLick on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;

  }
`;
