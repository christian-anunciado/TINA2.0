import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { MessageState, MessageType } from "../../redux/convoRedux";
import Query from "../Query/Query";
import Response from "../Response/Response";
import ResponseCopy from "../Response/ResponseCopy";

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

  const test = `New/Returnee/Transfer requirements:
  1. Report Card w/LRN (Learner's Reference Number)
  2. Certificate of Good Moral Character
  3. Medical Certificate - waived
  4. PSA-Authenticated Birth Certificate
  5. Parent/Guardian's Valid ID
  
  Old/Continuing:
  1. Pupil Report Card
  2. Parent/Guardian's Valid ID
  3. Pupil's CIT School ID`;

  const test2 = `Yes, we accept transferees. These are the following requirements: 
  1. Report Card / Form 138 with LRN (Kinder to Grade 6) (Required) 
  2. PSA-Authenticated Birth Certificate 
  3. Medical Certificate - waived 
  4. Certificate of Good Moral Character (Grades 1-6) 
  5. Parent/Guardian's Valid ID Enroll with NO ENROLMENT FEE REQUIRED (payment is deferred until further notice) through this link in our website: https://cit.edu/quick-links/`;

  const test3 = `The requirements for admission to CIT may vary depending on the degree program and level you are applying for. Generally, you will need to provide your academic records, a completed application form, and any other supporting documents as required by the program. You can check the CIT website or contact ETO for more information about specific requirements.`;

  return (
    <div
      className="flex min-h-0 flex-[4] snap-y flex-col items-center gap-1 overflow-auto scroll-smooth"
      ref={ref}
    >
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
  );
}

export default Responses;
