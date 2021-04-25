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

type CardEnum = {
    image: string,
    altText: string,
};

class Card {
    // Same enum names as in the backend, should serialize to JSON
    // in the same way.
    public static TWO_CLUBS = new Card(two_clubs, "Two of Clubs");
    // TODO: Generate the code for the rest of these
    // TWO_DIAMONDS,
    // TWO_HEARTS,
    // TWO_SPADES,
    // THREE_CLUBS,
    // THREE_DIAMONDS,
    // THREE_HEARTS,
    // THREE_SPADES,
    // FOUR_CLUBS,
    // FOUR_DIAMONDS,
    // FOUR_HEARTS,
    // FOUR_SPADES,
    // FIVE_CLUBS,
    // FIVE_DIAMONDS,
    // FIVE_HEARTS,
    // FIVE_SPADES,
    // SIX_CLUBS,
    // SIX_DIAMONDS,
    // SIX_HEARTS,
    // SIX_SPADES,
    // SEVEN_CLUBS,
    // SEVEN_DIAMONDS,
    // SEVEN_HEARTS,
    // SEVEN_SPADES,
    // EIGHT_CLUBS,
    // EIGHT_DIAMONDS,
    // EIGHT_HEARTS,
    // EIGHT_SPADES,
    // NINE_CLUBS,
    // NINE_DIAMONDS,
    // NINE_HEARTS,
    // NINE_SPADES,
    // TEN_CLUBS,
    // TEN_DIAMONDS,
    // TEN_HEARTS,
    // TEN_SPADES,
    // JACK_CLUBS,
    // JACK_DIAMONDS,
    // JACK_HEARTS,
    // JACK_SPADES,
    // QUEEN_CLUBS,
    // QUEEN_DIAMONDS,
    // QUEEN_HEARTS,
    // QUEEN_SPADES,
    // KING_CLUBS,
    // KING_DIAMONDS,
    // KING_HEARTS,
    // KING_SPADES,
    // ACE_CLUBS,
    // ACE_DIAMONDS,
    // ACE_HEARTS,
    // ACE_SPADES,

    public image: string;
    public altText: string;

    private constructor(image: string, altText: string) {
        this.image = image;
        this.altText = altText;
    }
}

export default Card;