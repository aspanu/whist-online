import { w3cwebsocket as W3CWebSocket } from "websocket";
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
interface StartMessage extends Message { start: string; }
interface BidMessage extends Message { bid: number; }
interface CardMessage extends Message { card: Card; }

class WebSocketClient {
    private static instance: WebSocketClient;
    
    private client = new W3CWebSocket('ws://127.0.0.1:8080/game')

    static get(): WebSocketClient {
        if (!this.instance) {
            this.instance = new this();
        }

        return this.instance;
    }

    //TODO: Add websocket message sending functions

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