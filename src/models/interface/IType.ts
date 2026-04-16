import { CardType, Zone } from "../Enums";
import { ICard } from "./ICard";

export type ICardState = {
	[key: string]: any; // let to search for any key when looping with [for ... of] Object loop
	id?: string;
	isFrontFaceSide?: boolean; // Useful only if the current card as multiple face
	isFrontSide?: boolean;
	sleeveColor?: string;
	visibleArrow?: boolean;
	zone?: Zone;
	isTapped?: boolean;
};

export type ICardData = {
	card: ICard;
	state: ICardState;
	type: CardType;
};
