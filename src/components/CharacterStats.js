import React from "react";
import {
	CharacterHealth,
	CharacterHealthInput,
	CharacterStamina,
	CharacterStaminaInput,
	CharacterMagicka,
	CharacterMagickaInput,
	CharacterStatIcon,
	CharacterSheetContainer,
	CharacterNameStyled,
  CharacterHeadingStyled,
  CharacterStatsRow,
  CharacterStatText,
  AttackDefenseRow
} from "./styles/CharacterStat.styled";
import { FaRunning, FaMagic, FaHeartbeat } from "react-icons/fa";
import { RiSwordFill, RiShieldFill } from "react-icons/ri";
import {
	FormGroupStyled,
  FormBaseStatsInputStyled,
	FormLabelStyled,
  SelectStyledDark,
} from "./styles/Form.styled";

import { mundusList } from "../data/mundus";

export const CharacterStats = ({
	updateCharacterHP,
	updateCharacterSP,
	updateCharacterMP,
	updateAttackValue,
	updateDefenseValue,
  handleMundusChange
}) => {
	return (
		<CharacterSheetContainer>
			<CharacterHeadingStyled>
				<CharacterNameStyled>
					Faustina Torrantia Elledara Melissa Marcelle
				</CharacterNameStyled>
				<FormLabelStyled>Set up your chracter stats and abilities</FormLabelStyled>
			</CharacterHeadingStyled>

			<CharacterStatsRow>
				<CharacterHealth>
					<CharacterStatText>hp</CharacterStatText>
					<CharacterStatIcon>
						<FaHeartbeat />
					</CharacterStatIcon>
					<CharacterHealthInput
						type='number'
						min='0'
						placeholder='0'
						onChange={updateCharacterHP}
					/>
				</CharacterHealth>

				<CharacterStamina>
					<CharacterStatText>sp</CharacterStatText>
					<CharacterStatIcon>
						<FaRunning />
					</CharacterStatIcon>
					<CharacterStaminaInput
						type='number'
						min='0'
						placeholder='0'
						onChange={updateCharacterSP}
					/>
				</CharacterStamina>

				<CharacterMagicka>
					<CharacterStatText>mp</CharacterStatText>
					<CharacterStatIcon>
						<FaMagic />
					</CharacterStatIcon>
					<CharacterMagickaInput
						type='number'
						min='0'
						placeholder='0'
						onChange={updateCharacterMP}
					/>
				</CharacterMagicka>
			</CharacterStatsRow>

			<AttackDefenseRow>
				<FormGroupStyled>
					<FormLabelStyled>
						<RiSwordFill /> Set Attack Value
					</FormLabelStyled>
					<FormBaseStatsInputStyled
						type='number'
						min='0'
						placeholder='0'
						onChange={updateAttackValue}
					/>
				</FormGroupStyled>

				<FormGroupStyled>
					<FormLabelStyled>
						<RiShieldFill /> Set Defense Value
					</FormLabelStyled>
					<FormBaseStatsInputStyled
						type='number'
						min='0'
						placeholder='0'
						onChange={updateDefenseValue}
					/>
				</FormGroupStyled>
			</AttackDefenseRow>

			<FormGroupStyled>
				<FormLabelStyled>Select a Mundus Effect</FormLabelStyled>
				<SelectStyledDark onChange={handleMundusChange}>
					<option value='Select Mundus'>choose</option>
					{mundusList.map((mundus, index) => (
						<option key={index} value={mundus.name}>
							{mundus.name}
						</option>
					))}
				</SelectStyledDark>
			</FormGroupStyled>

			{/* <Row>
				<FormGroupStyled>
					<FormLabelStyled>Passive Abilities</FormLabelStyled>
					{passivesList.map((ability) => (
						<Row>
							<input
								type='checkbox'
								value={ability}
								onChange={updatePassiveAbilities}
							></input>
							<FormTextStyled>{ability}</FormTextStyled>
						</Row>
					))}
				</FormGroupStyled>
			</Row> */}
		</CharacterSheetContainer>
	);
};
