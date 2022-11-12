import styled from "styled-components";

export const FormContainer = styled.div`
	/* border: 1px solid blue; */
	width: 50%;
	margin: auto;
`;

export const FormGroupStyled = styled.div`
	margin: 9px 0px;
	/* border: 1px solid magenta; */
`;

export const FormLabelStyled = styled.p`
	color: #686971;
	font-size: 12px;
	padding: 9px 18px 9px 0;
	margin: 0;
`;

export const FormInputStyled = styled.input`
	/* height: 32px;
	margin-right: 18px;
	padding: 3px;
	font-size: 18px;
	border-radius: 3px;
	width: 100%; */
	height: 32px;
	margin-right: 18px;
	padding: 3px;
	font-size: 18px;
	border: none;
	border-bottom: 1px solid #55565d;
	width: 100%;
	background-color: #2c2f40;
	color: #f1f1f3;

	::placeholder,
	::-webkit-input-placeholder {
		font-style: italic;
		color: #55565e;
	}
`;

export const FormBaseStatsInputStyled = styled.input`
	background-color: #101115;
	color: #bababb;
	height: 27px;
	padding: 9px;
	font-size: 18px;
	font-weight: bold;
	border: none;
	width: 36px;
`;

export const SelectStyledDark = styled.select`
	height: 42px;
	margin-right: 18px;
	padding: 3px;
	font-size: 18px;
	border: none;
	border-bottom: 1px solid #55565d;
	width: 100%;
	background-color: #02020b;
	color: #f1f1f3;
`;

export const SelectStyledLight = styled.select`
	height: 42px;
	margin-right: 18px;
	padding: 3px;
	font-size: 18px;
	border: none;
	border-bottom: 1px solid #55565d;
	width: 100%;
	background-color: #2c2f40;
	color: #f1f1f3;

	&.placeholder {
		color: red;
		font-style: italic;
	}
`;

export const FormTextStyled = styled.p`
	color: #f1f1f3;
	padding-left: 9px;
	margin: 9px 0px;
`;

export const FormButtonStyled = styled.button`
	height: 54px;
	width: 100%;
	margin: 0;
	padding: 3px 18px;
	font-size: 18px;
	font-weight: bold;
	color: #02020b;
	background-color: #eed2a1;
	border-radius: 9px;
	border: 1px solid #9e6845;
	/* transition: ease-in-out 0.1s; */
	cursor: pointer;

	&:hover {
		background-color: #fffda2;
		/* margin-top: -1px;
		margin-left: -1px; */
	}

	&:active {
		background-color: #9b8662;
		margin-top: 2px;
	}
`;

export const TextareaStyled = styled.textarea`
	width: 95%;
	background-color: #212331;
	border: 1px solid #02020b;
	border-radius: 6px;
	padding: 18px;
	color: #f0f1f3;
`;

export const LinkStyled = styled.a`
	color: #e9c991;
	font-size: 12px;
	padding: 9px 18px 9px 0;
	margin: 0;
	cursor: pointer;

	&:hover {
		color: #fffda2;
	}
`;
