import React from "react";
import { OutputStyled, OutputGroup } from "./styles/Output.styled";
import {
	FormGroupStyled,
	FormLabelStyled,
	FormButtonStyled,
} from "./styles/Form.styled";

export const Output = ({
	attackName,
	attackCost,
	attackCostType,
	attackEffect,
	targetName,
	attackValue,
	defenseValue,
	passiveAbilities,
	mundusEffect,
	holyItem,
	characterHP,
	characterSP,
	characterMP,
}) => {
	let outputString = `[${attackName}][${attackCost} ${attackCostType}][${attackEffect}][@${targetName}][+${attackValue}ATK][+${defenseValue}DEF][${passiveAbilities}][${mundusEffect}][${holyItem}]${characterHP}/${characterSP}/${characterMP}`;

	return (
			<OutputGroup>
				<OutputStyled>{outputString}</OutputStyled>
				<FormGroupStyled>
					<FormButtonStyled
						onClick={() => {
							navigator.clipboard.writeText(outputString);
						}}
					>
						Copy to Clipboard
					</FormButtonStyled>
				</FormGroupStyled>
			</OutputGroup>
	);
};
