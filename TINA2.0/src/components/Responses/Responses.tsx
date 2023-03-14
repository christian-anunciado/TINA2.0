import React from "react";
import Query from "../Query/Query";
import Response from "../Response/Response";

type Props = {};

function Responses({}: Props) {
  return (
    <div className="flex min-h-0 flex-[4.5] flex-col items-center gap-1 overflow-auto">
      <Query query="Can you give me free tuition at CIT?" />
      <Response response="I'm sorry, but I cannot give you free tuition at CIT. As a chatbot, my role is to assist you with your questions about CIT and provide you with information that can help you with your studies. If you have any specific questions or concerns about tuition, scholarships, or financial aid at CIT, please let me know, and I'll do my best to assist you with accurate and helpful information." />
      {/* <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response />
      <Response /> */}
    </div>
  );
}

export default Responses;
