// MessageParser starter code
class MessageParser {
    actionProvider: any;
    state: any;

    constructor(actionProvider: any, state: any) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message: any) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("hello")) {
            this.actionProvider.greet();
        }

        if (lowerCaseMessage.includes("javascript")) {
            this.actionProvider.handleJavascriptList();
        }
    }
}

export default MessageParser;