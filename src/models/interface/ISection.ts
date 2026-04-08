import { ICard } from "./ICard";

export interface ISection {
	id: number;
	name?: string;
	description: string;
	color: string;

	card_list: Array<ICard>;
}
