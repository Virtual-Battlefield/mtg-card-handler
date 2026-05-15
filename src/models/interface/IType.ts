import { CardCounterType, CardType, Zone } from "../Enums";
import { ICard } from "./ICard";

export type CountersList = {
	type: CardCounterType;
	nb: number;
};

export type ICardState = {
	[key: string]: any; // let to search for any key when looping with [for ... of] Object loop
	isFrontFaceSide?: boolean; // Useful only if the current card as multiple face
	isFrontSide?: boolean;
	sleeveColor?: string;
	visibleArrow?: boolean;
	zone?: Zone;
	isTapped?: boolean;
	countersList?: CountersList[];
};

export type ICardData = {
	id: string;
	card: ICard;
	state: ICardState;
	type: CardType;
	timestamp: number;
};
