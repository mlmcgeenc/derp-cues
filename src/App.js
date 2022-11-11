import { useState } from "react";
import { CharacterStats } from "./components/CharacterStats";
import { Attack } from "./components/Attack";
import { Output } from "./components/Output";
import { Container, AppContainer } from "./components/styles/Container.styled";
import { attackList } from "./data/attacks";
import { holyItemList } from "./data/holy-items";
import { mundusList } from "./data/mundus";
import { Row } from "./components/styles/Row.styled"

function App() {
	let [characterHP, setCharacterHP] = useState(0);
	let [characterSP, setCharacterSP] = useState(0);
	let [characterMP, setCharacterMP] = useState(0);
  let [passiveAbilities, setPassiveAbilities] = useState([]);
	let [attackValue, setAttackValue] = useState(0);
	let [defenseValue, setDefenseValue] = useState(0);

	let [attackName, setAttackName] = useState("(attack)");
	let [attackCostType, setAttackCostType] = useState("");
	let [attackCost, setAttackCost] = useState("(attack cost)");
	let [attackEffect, setAttackEffect] = useState("");
	let [targetName, setTargetName] = useState("(target)");
	let [mundusEffect, setMundusEffect] = useState("(mundus effect)");
	let [holyItem, setHolyItem] = useState("(holy item)");
  let [holyItemDesc, setHolyItemDesc] = useState("Holy Item Default Desc")

	const updateCharacterHP = (e) => {
		setCharacterHP(e.target.value);
	};
	const updateCharacterSP = (e) => {
		setCharacterSP(e.target.value);
	};
	const updateCharacterMP = (e) => {
		setCharacterMP(e.target.value);
	};
  const updatePassiveAbilities = (e) => {
    let selectedPassive = e.target.value;
    if (passiveAbilities.includes(selectedPassive)) {      
      let removePassive = passiveAbilities.filter(
				(ability) => ability !== selectedPassive
			);
      setPassiveAbilities(removePassive)
    } else {
      let addPassive = passiveAbilities.concat([selectedPassive])
      setPassiveAbilities(addPassive)
    }
	};
	const updateAttackValue = (e) => {
		setAttackValue(e.target.value);
	};
	const updateDefenseValue = (e) => {
		setDefenseValue(e.target.value);
	};
	const handleAttackChange = (e) => {
		setAttackName(e.target.value);
		setAttackCost(
			attackList.filter((attack) => attack.name === e.target.value)[0].cost
		);
		setAttackCostType(
			attackList.filter((attack) => attack.name === e.target.value)[0].costType
		);
		setAttackEffect(
			attackList.filter((attack) => attack.name === e.target.value)[0].effect
		);
	};
	const handleMundusChange = (e) => {
    let selectedMundus = mundusList.filter((mundus) => mundus.name === e.target.value )[0]
    setMundusEffect(`${selectedMundus.name} ${selectedMundus.description}`);
	};
	const handleHolyItemChange = (e) => {
		setHolyItem(e.target.value);
    setHolyItemDesc(holyItemList.filter((item) => item.name === e.target.value)[0].description)
	};
	const updateTarget = (e) => {
		setTargetName(e.target.value);
	};

	return (
		<Container>
			<h1>Derp Cues</h1>
			<AppContainer>
				<Row>
					<CharacterStats
						characterHP={characterHP}
						updateCharacterHP={updateCharacterHP}
						updateCharacterSP={updateCharacterSP}
						updateCharacterMP={updateCharacterMP}
						updatePassiveAbilities={updatePassiveAbilities}
						updateAttackValue={updateAttackValue}
						updateDefenseValue={updateDefenseValue}
            handleMundusChange={handleMundusChange}
					/>
					<Attack
						characterHP={characterHP}
						characterSP={characterSP}
						characterMP={characterMP}
						passiveAbilities={passiveAbilities}
						attackValue={attackValue}
						defenseValue={defenseValue}
            holyItemDesc={holyItemDesc}
						handleAttackChange={handleAttackChange}
						handleMundusChange={handleMundusChange}
						handleHolyItemChange={handleHolyItemChange}
						updateTarget={updateTarget}
            updatePassiveAbilities={updatePassiveAbilities}
					/>
				</Row>
			</AppContainer>
			<Row>
				<Output
					attackName={attackName}
					attackCost={attackCost}
					attackCostType={attackCostType}
					attackEffect={attackEffect}
					targetName={targetName}
					attackValue={attackValue}
					defenseValue={defenseValue}
					passiveAbilities={passiveAbilities}
					mundusEffect={mundusEffect}
					holyItem={holyItem}
					characterHP={characterHP}
					characterSP={characterSP}
					characterMP={characterMP}
				/>
			</Row>
		</Container>
	);
}

export default App;
