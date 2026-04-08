export interface ICardFace {
	name: string;
	mana_cost?: string;
	type_line: string;
	oracle_text: string;

	crop_image: URL;
	full_image: URL;
}

export interface ICard {
	id: string;
	layout: string;

	front_card: ICardFace;
	back_card?: ICardFace;
}
