import styled from "styled-components";

export const CharacterSheetContainer = styled.div`
	background-color: #02020c;
	padding: 72px;
  width: 25%;
  /* border: 1px solid magenta; */
`;

export const CharacterNameStyled = styled.h1`
  color: #f4f4f5;
	font-size: 36px;
	font-weight: bold;
  margin: 0;
`;

export const CharacterHeadingStyled = styled.div`
  margin: 9px 0px;
`

export const CharacterStatsRow = styled.div`
  margin: 18px 0px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`

export const CharacterStatText = styled.h3`
margin: 16px 3px 9px 3px;
`

export const CharacterStatIcon = styled.h3`
	margin: 0px 3px 16px 3px;
`;

export const CharacterStat = styled.div`
	padding: o;
	color: white;
	border-radius: 6px;
	text-align: center;
	width: 25%;
`;

export const CharacterStatInput = styled.input`
	color: white;
	font-weight: bold;
	font-size: 36px;
	border-radius: 5px;
  width: 75%;
	height: 42px;
	padding: 6px;
	text-align: center;
`;

export const CharacterHealth = styled(CharacterStat)`
color: #c80030;
	/* background: rgb(97, 25, 35);
	background: linear-gradient(
		0deg,
		rgba(97, 25, 35, 1) 0%,
		rgba(150, 4, 35, 1) 45%,
		rgba(231, 146, 168, 1) 100%
	);
	border: 1px solid #300008; */
`;

export const CharacterHealthInput = styled(CharacterStatInput)`
background-color: #14151c;
border: none;
	/* color: #300008;
	background: rgb(225, 118, 139);
	background: linear-gradient(
		0deg,
		rgba(225, 118, 139, 1) 0%,
		rgba(242, 176, 178, 1) 100%
	);
	border: 1px solid #300008; */
`;

export const CharacterStamina = styled(CharacterStat)`
	color: #1fcb7f;
	/* background: rgb(25, 89, 73);
	background: linear-gradient(
		0deg,
		rgba(25, 89, 73, 1) 0%,
		rgba(36, 155, 94, 1) 100%
	);
	border: 1px solid #14190e; */
`;

export const CharacterStaminaInput = styled(CharacterStatInput)`
	background-color: #14151c;
	border: none;
	/* color: #14190e;
	background: rgb(90, 179, 145);
	background: linear-gradient(
		0deg,
		rgba(90, 179, 145, 1) 0%,
		rgba(154, 224, 211, 1) 100%
	);
	border: 1px solid #14190e; */
`;

export const CharacterMagicka = styled(CharacterStat)`
color: #41b0d9;
	/* background: rgb(20, 30, 95);
	background: linear-gradient(
		0deg,
		rgba(20, 30, 95, 1) 0%,
		rgba(101, 203, 232, 1) 100%
	);
	border: 1px solid #051330; */
`;

export const CharacterMagickaInput = styled(CharacterStatInput)`
	background-color: #14151c;
	border: none;
	/* color: #051330;
	background: rgb(138, 177, 215);
	background: linear-gradient(
		0deg,
		rgba(138, 177, 215, 1) 0%,
		rgba(172, 255, 254, 1) 100%
	);
	border: 1px solid #051330; */
`;

export const AttackDefenseRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 9px 0px;
`
