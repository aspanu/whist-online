import { w3cwebsocket as WebSocket } from "websocket";
import Card from "../../model/Card";

/**
 * The websocket protocol is based on the following JSON messages:
 * { 
 *   "type": $typeName
 *   $typeName: $data
 * }
 * 
 * Where $typeName can be one of: start, bid, card
 * The data will be as follows:
 * 
 * start type
 * data type: boolean
 * values: true/false
 * Generally expected to be 'true', undefined behaviour for 'false'
 * 
 * bid type
 * data type: int
 * values: 0-8
 * Anything outside of the range will create an error
 * 
 * card type
 * data type: string
 * values: TWO_DIAMONDS to ACE_SPADES
 * serialized versions of the card enums
 */

interface Message { type: string; }
interface StartMessage extends Message { start: boolean; }
interface BidMessage extends Message { bid: number; }
interface CardMessage extends Message { card: Card; }

class WebSocketClient {
    private static instance: WebSocketClient;
    
    private client = new WebSocket('ws://127.0.0.1:8080/game')

    static get(): WebSocketClient {
        if (!this.instance) {
            this.instance = new this();
        }

        return this.instance;
    }

    sendStart() {
        // Create the JSON version of the start message 
        const message : StartMessage = { type : "start", start: true };
        const jsonMessage : string = JSON.stringify(message);
        
        this.client.send(jsonMessage);
    }

    sendBid(bidAmount: number) {
        const message : BidMessage = { type: "bid", bid: bidAmount };
        const jsonMessage : string = JSON.stringify(message);

        this.client.send(jsonMessage);
    }

    sendCard(cardToSend: Card) {
        const message : CardMessage = { type: "card", card: cardToSend };
        const jsonMessage : string = JSON.stringify(message);

        this.client.send(jsonMessage);
    }

    getMessage(message: string) {
        const messageObject : Message = JSON.parse(message);

        switch (messageObject.type) {
            case "start":
                this.receiveStart();
                break;

            case "card":
                const cardMessage : CardMessage = JSON.parse(message);
                this.receiveCard(cardMessage.card);
                break;

            case "bid":
                const bidMessage : BidMessage = JSON.parse(message);
                this.receiveBid(bidMessage.bid);
                break;

            default:
                throw TypeError(`Cannot parse websocket message: ${message}`)
                break;
        } 
        
    }

    receiveStart() {
        // TODO: add something here
    }

    receiveCard(card: Card) {
        // TODO: add something here
    }

    receiveBid(bid: number) {
        // TODO: add something here
    }

    // componentDidMount() {
    //     client.onopen = () => {
    //         console.log('Websocket client connected!');
    //     };
    //     client.onmessage = (message) => {
    //         console.log("We got a message!!!")
    //         console.log(message)
    //     };
    // }
}

export default WebSocketClient;