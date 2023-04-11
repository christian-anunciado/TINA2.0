import React from "react";
import add_question from "../../api/addQuestion";

type Props = {};

const LoadingCircle = () => (
  <svg
    aria-hidden="true"
    className="mr-1 h-5 w-5 animate-spin fill-darkDivider text-transparent dark:fill-white"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
    />
  </svg>
);

function AddQuestion({}: Props) {
  const [question, setQuestion] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (question === "" || response === "") {
      setError(true);
      setMessage("Please fill in all the fields!");
      return;
    }
    setLoading(true);

    try {
      const req = await add_question.post("/add_question", null, {
        params: {
          question,
          answer: response,
        },
      });
      console.log(
        "🚀 ~ file: AddQuestion.tsx:46 ~ handleSubmit ~ req:",
        req.data
      );

      if (req.data.status_code === 200) {
        setError(false);
        setLoading(false);
        setMessage("Question added successfully!");
        setQuestion("");
        setResponse("");
      }

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
      setMessage("Something went wrong!");
    }
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleResponseChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResponse(e.target.value);
  };

  return (
    <form
      className="flex h-[100svh] flex-col items-center justify-center bg-darkTextSoft"
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="flex h-[40rem] w-[40rem] flex-col gap-12 rounded-lg bg-white p-12">
        <h1 className="flex w-full items-center justify-center text-2xl font-bold">
          Add Question
        </h1>
        <div className="w-full">
          <label htmlFor="question">Question</label>
          <input
            type="text"
            name="question"
            id="question"
            className="mt-2 block w-full rounded-md border border-gray-300 p-2 placeholder:text-sm"
            placeholder="What is your question?"
            value={question}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="response">Response</label>
          <textarea
            name="response"
            id="response"
            className="mt-2 block h-60 w-full rounded-md border border-gray-300 p-2 placeholder:text-sm"
            placeholder="What is your response?"
            onChange={handleResponseChange}
            value={response}
          />
        </div>
        <div className="flex items-center gap-8">
          <button
            type="submit"
            className="w-fit rounded bg-blueBorder py-2 px-6 text-white"
          >
            {loading ? <LoadingCircle /> : "Submit"}
          </button>
          <p
            className={`text- text-xs ${
              error ? "text-redLight" : "text-green-700"
            } font-medium `}
          >
            {message}
          </p>
        </div>
      </div>
    </form>
  );
}

export default AddQuestion;
