export enum DeckFormat {
	Standard,
	Commander,
	Horde,
	Modern,
}

// Check about Keyword counter
export enum CounterType {
	//#region Counter on Players

	Experience,
	Energy,
	Poison,
	Rad,

	//#endregion

	//#region Counter on permanents

	/**
	 * Act like default counter, POWER/TOUGHNESS for creature, Loyalty for planeswalker, Defense for battle
	 */
	Stats,
	/**
	 * Will act as a marker, no value intended, just presence or absence
	 */
	Marker,
	/**
	 * For certain artifact
	 */
	Charge,
	/**
	 * Used with Saga
	 */
	Lore,
	/**
	 * Used with permanent with cumulative upkeep
	 */
	Age,
	/**
	 * If a permanent with a finality counter would go to a graveyard, exile it instead.
	 */
	Finality,
	/**
	 * If a permanent with a shield counter on it would be destroyed or take damage by an effect, a shield counter is removed from the permanent instead.
	 */
	Shield,
	/**
	 * When a permanent with a stun counter becomes untapped, a stun counter is removed from it instead.
	 */
	Stun,

	//#endregion

	/**
	 * For all unusual counter. Need to be active on each public zone (Battlefield, Graveyard, Exile)
	 */
	Basic,

	/**
	 * Can be used with cards in exile and permanents
	 * Fade counter fall into this category
	 */
	Time,
}

export enum Zone {
	Graveyard,
	Exile,
	Battlefield,
	Stack,
	Hand,
	Deck,
	Sideboard,
	CommandZone,
}

export enum CardType {
	Normal,
	Token,
}
