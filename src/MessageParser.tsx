// MessageParser starter code
class MessageParser {
    actionProvider: any;
    state: any;

    constructor(actionProvider: any, state: any) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message: any) {
        this.actionProvider.reply(message);
    }
}

export default MessageParser;