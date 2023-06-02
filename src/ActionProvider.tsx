// ActionProvider starter code
class ActionProvider {
    createChatBotMessage: any;
    setState: any;
    createClientMessage: any;
    stateRef: any;
    createCustomMessage: any;

    constructor(
        createChatBotMessage: any,
        setStateFunc: any,
        createClientMessage: any,
        stateRef: any,
        createCustomMessage: any,
        ...rest: any
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend.");
        this.updateChatbotState(greetingMessage);
    }

    handleJavascriptList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following resources for you on Javascript:",
            {
                widget: "javascriptLinks",
            }
        );

        this.updateChatbotState(message);
    };

    updateChatbotState(message: any) {
        this.setState((prevState: any) => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }));
    }
}

export default ActionProvider;