import { AssertionError } from "assert";
import { isMappedTypeNode } from "typescript";
import ace_clubs from "../assets/images/cards/sampleCard.png";
import ace_diamonds from "../assets/images/cards/sampleCard.png";
import ace_hearts from "../assets/images/cards/sampleCard.png";
import ace_spades from "../assets/images/cards/sampleCard.png";
import eight_clubs from "../assets/images/cards/sampleCard.png";
import eight_diamonds from "../assets/images/cards/sampleCard.png";
import eight_hearts from "../assets/images/cards/sampleCard.png";
import eight_spades from "../assets/images/cards/sampleCard.png";
import five_clubs from "../assets/images/cards/sampleCard.png";
import five_diamonds from "../assets/images/cards/sampleCard.png";
import five_hearts from "../assets/images/cards/sampleCard.png";
import five_spades from "../assets/images/cards/sampleCard.png";
import four_clubs from "../assets/images/cards/sampleCard.png";
import four_diamonds from "../assets/images/cards/sampleCard.png";
import four_hearts from "../assets/images/cards/sampleCard.png";
import four_spades from "../assets/images/cards/sampleCard.png";
import jack_clubs from "../assets/images/cards/sampleCard.png";
import jack_diamonds from "../assets/images/cards/sampleCard.png";
import jack_hearts from "../assets/images/cards/sampleCard.png";
import jack_spades from "../assets/images/cards/sampleCard.png";
import king_clubs from "../assets/images/cards/sampleCard.png";
import king_diamonds from "../assets/images/cards/sampleCard.png";
import king_hearts from "../assets/images/cards/sampleCard.png";
import king_spades from "../assets/images/cards/sampleCard.png";
import nine_clubs from "../assets/images/cards/sampleCard.png";
import nine_diamonds from "../assets/images/cards/sampleCard.png";
import nine_hearts from "../assets/images/cards/sampleCard.png";
import nine_spades from "../assets/images/cards/sampleCard.png";
import queen_clubs from "../assets/images/cards/sampleCard.png";
import queen_diamonds from "../assets/images/cards/sampleCard.png";
import queen_hearts from "../assets/images/cards/sampleCard.png";
import queen_spades from "../assets/images/cards/sampleCard.png";
import seven_clubs from "../assets/images/cards/sampleCard.png";
import seven_diamonds from "../assets/images/cards/sampleCard.png";
import seven_hearts from "../assets/images/cards/sampleCard.png";
import seven_spades from "../assets/images/cards/sampleCard.png";
import six_clubs from "../assets/images/cards/sampleCard.png";
import six_diamonds from "../assets/images/cards/sampleCard.png";
import six_hearts from "../assets/images/cards/sampleCard.png";
import six_spades from "../assets/images/cards/sampleCard.png";
import ten_clubs from "../assets/images/cards/sampleCard.png";
import ten_diamonds from "../assets/images/cards/sampleCard.png";
import ten_hearts from "../assets/images/cards/sampleCard.png";
import ten_spades from "../assets/images/cards/sampleCard.png";
import three_clubs from "../assets/images/cards/sampleCard.png";
import three_diamonds from "../assets/images/cards/sampleCard.png";
import three_hearts from "../assets/images/cards/sampleCard.png";
import three_spades from "../assets/images/cards/sampleCard.png";
import two_clubs from "../assets/images/cards/sampleCard.png";
import two_diamonds from "../assets/images/cards/sampleCard.png";
import two_hearts from "../assets/images/cards/sampleCard.png";
import two_spades from "../assets/images/cards/sampleCard.png";
import Card from "./Card";

class CardMetadata {
    public image: string;
    public altText: string;

    constructor(image: string, altText: string) {
        this.image = image;
        this.altText = altText;
    }
}

const cardMetadataMap = new Map([
    [Card.ACE_CLUBS, new CardMetadata(ace_clubs, "the ace of clubs")],
    // TODO: codegen the rest of the map
])

export function getCardMetadata(card: Card): CardMetadata {
    const cardMetadata = cardMetadataMap.get(card)
    if (!cardMetadata) throw new AssertionError({ message: "Cannot find metadata for card: ${card}." })
    return cardMetadata
}