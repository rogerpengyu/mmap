async function fetchText(message: any) {
    const url = "https://mmapfunc.azurewebsites.net/api/mmfunc";
    const data = {
        input_data: {
            columns: [0], index: [0], data: ["aaa"]
        }
    };

    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.text();
        return data;
    }
}


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

    reply(message: any) {
        fetchText(message).then(response => {
            const cm = this.createChatBotMessage(response);

            this.updateChatbotState(cm);
        }, error => {
            console.log(error);
        });
    }
}

export default ActionProvider;