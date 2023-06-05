// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./LearningOptions";
import LinkList from "./LinkList";
import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";

const config: IConfig = {
  botName: "LearningBot",
  initialMessages: [createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
    widget: "learningOptions",
  })],
  // customStyles: {
  //   botMessageBox: {
  //     backgroundColor: "#376B7E",
  //   },
  //   chatButton: {
  //     backgroundColor: "#376B7E",
  //   },
  // },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props: any) => {
        return <LearningOptions {...props} />;
      },
      props: {},
      mapStateToProps: []
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props: any) => {
        return <LinkList {...props} />;
      },
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
      mapStateToProps: []
    },
  ],
}

export default config