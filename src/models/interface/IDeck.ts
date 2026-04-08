import { DeckFormat } from "../Enums.js";
import { ICard } from "./ICard.js";
import { ISection } from "./ISection.js";

// Except to work with the Horde Game
// Might also work with common deck
export interface IDeck {
	id: number;
	name: string;
	description: string;
	image: URL;
	format: DeckFormat;

	bosses?: ISection;
	sections: Array<ISection>;
	unsorted?: Array<ICard>;

	card_relation?: Array<ICard>;
}
