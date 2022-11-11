import React from "react";
import { Row } from "./styles/Row.styled";
import {
	FormContainer,
	FormGroupStyled,
	FormInputStyled,
	FormLabelStyled,
	FormTextStyled,
	SelectStyledLight,
	TextareaStyled,
	LinkStyled,
} from "./styles/Form.styled";
import { attackList } from "../data/attacks";
import { passivesList } from "../data/passivesList";
import { holyItemList } from "../data/holy-items";

import { SiTarget } from "react-icons/si";
import { HiOutlineClipboardCopy, HiClipboardCopy } from "react-icons/hi";
import { RiSwordFill, RiShieldFill } from "react-icons/ri";
import { FaChurch } from "react-icons/fa"

export const Attack = ({
	updateTarget,
	handleAttackChange,
	handleHolyItemChange,
	holyItemDesc,
	updatePassiveAbilities,
}) => {
	return (
		<>
			<FormContainer>
				<FormGroupStyled>
					<FormLabelStyled>
						<SiTarget /> Target Name
					</FormLabelStyled>
					<FormInputStyled
						type='text'
						onChange={updateTarget}
						placeholder='Uriel Septim'
					/>
				</FormGroupStyled>

				<FormGroupStyled>
					<FormLabelStyled>
						<RiSwordFill /> Select an Attack
					</FormLabelStyled>
					<SelectStyledLight onChange={handleAttackChange}>
						<option value=''>choose</option>
						{attackList.map((attack, index) => (
							<option key={index} value={attack.name}>
								{attack.name}
							</option>
						))}
					</SelectStyledLight>
				</FormGroupStyled>

				<FormGroupStyled>
					<FormLabelStyled><FaChurch/>  Select a Holy Item</FormLabelStyled>
					<SelectStyledLight onChange={handleHolyItemChange}>
						<option className='placeholder' hidden value=''>
							Wabbajack
						</option>
						{holyItemList.map((item, index) => (
							<option key={index} value={item.name}>
								{item.name}
							</option>
						))}
					</SelectStyledLight>
				</FormGroupStyled>

				<TextareaStyled readOnly rows='4' value={holyItemDesc}></TextareaStyled>
				<LinkStyled onClick={() => navigator.clipboard.writeText(holyItemDesc)}>
					<HiOutlineClipboardCopy /> Copy Holy Item Text to Clipboard
				</LinkStyled>

				<FormGroupStyled>
					<FormLabelStyled>Passive Abilities</FormLabelStyled>
					{passivesList.map((ability, index) => (
						<Row key={index}>
							<input
								key={index}
								type='checkbox'
								value={ability}
								onChange={updatePassiveAbilities}
							></input>
							<FormTextStyled>{ability}</FormTextStyled>
						</Row>
					))}
				</FormGroupStyled>
			</FormContainer>
		</>
	);
};
