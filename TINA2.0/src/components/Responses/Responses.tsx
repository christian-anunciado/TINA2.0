import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { MessageType } from "../../redux/convoRedux";
import Query from "../Query/Query";
import Response from "../Response/Response";

interface Message {
  text: string;
  type: MessageType;
  created: Date;
  error?: boolean;
}

type Props = {
  messages: Message[];
};

function Responses({ messages }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const conversation = useSelector((state: any) => state.conversation);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    // scroll to bottom of div with smooth behavior
    ref.current?.scrollTo(0, ref.current.scrollHeight);
  }, [conversation.messages]);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      className=" min-h-0 flex-[4] touch-pan-y snap-y overflow-auto scroll-smooth"
      ref={ref}
    >
      <div className="flex flex-col items-center gap-1">
        {messages.map((message, index) => {
          if (message.type === MessageType.Query)
            return <Query query={message.text} key={index} />;
          if (message.type === MessageType.Response)
            return (
              <Response
                response={message.text}
                key={index}
                error={message.error}
              />
            );
        })}
      </div>
    </div>
  );
}

export default Responses;
