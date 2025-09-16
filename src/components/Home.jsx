import { useState } from "react";
import { data } from "../../public/data";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [ans, setAns] = useState(null);
  const [clicked, setClicked] = useState(false);
  let [result, setResult] = useState(0);
  const checkAns = (e, x) => {
    if (clicked === false) {
      if (question.correctOption == x) {
        setResult((prev) => prev + 1);
        setClicked(true);
      } else {
        setClicked(true);
      }
    }
  };

  return (
    <div className="flex flex justify-center items-center h-screen ">
      {index === 15 ? (
        <div className="bg-white w-[40%] h-[30%] rounded-[5px] p-[30px] flex flex-col gap-[10px]">
          <span className="text-[25px] font-semibold">Quiz App</span>
          <hr />
          <span className="text-[20px]">
            You Scored {result} out of {data.length}
          </span>
          <div className="flex flex justify-center">
            <button
              className="w-[100px] border-5 px-[10px] py-[5px] bg-purple-700 text-white rounded-[5px]"
              onClick={() => {
                setIndex(0);
                setQuestion(data[0]);
                setAns(null);
                setClicked(false);
                setResult(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white w-[40%] h-[80%] rounded-[5px] p-[30px] flex flex-col gap-[10px]">
          <span className="text-[25px] font-semibold">Quiz App</span>
          <hr />
          <div className="h-[13%]">
            <span className="text-[20px]">
              {`${index + 1}. ${question.question}`}
            </span>
          </div>
          <div className="h-[48%]">
            <ul className="[&>li]:border [&>li]:border-1 [&>li]:border-black [&>li]:rounded-[5px] [&>li]:p-[8px] flex flex-col gap-[10px] [&>li]:cursor-pointer">
              <li
                className={`${
                  clicked
                    ? 0 === question.correctOption
                      ? "bg-green-300"
                      : "bg-red-300"
                    : undefined
                }`}
                onClick={
                  ans == null
                    ? (e) => {
                        setAns(0);
                        checkAns(e, 0);
                      }
                    : null
                }
              >{`${question.options[0]}`}</li>
              <li
                className={`${
                  clicked
                    ? 1 === question.correctOption
                      ? "bg-green-300"
                      : "bg-red-300"
                    : undefined
                }`}
                onClick={
                  ans == null
                    ? (e) => {
                        setAns(1);
                        checkAns(e, 1);
                      }
                    : null
                }
              >{`${question.options[1]}`}</li>
              <li
                className={`${
                  clicked
                    ? 2 === question.correctOption
                      ? "bg-green-300"
                      : "bg-red-300"
                    : undefined
                }`}
                onClick={
                  ans == null
                    ? (e) => {
                        setAns(2);
                        checkAns(e, 2);
                      }
                    : null
                }
              >{`${question.options[2]}`}</li>
              <li
                className={`${
                  clicked
                    ? 3 === question.correctOption
                      ? "bg-green-300"
                      : "bg-red-300"
                    : undefined
                }`}
                onClick={
                  ans == null
                    ? (e) => {
                        setAns(3);
                        checkAns(e, 3);
                      }
                    : null
                }
              >{`${question.options[3]}`}</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center mt-[20px] pt-[10px]">
            <button
              className="border-5 px-[50px] py-[5px] bg-purple-700 text-white rounded-[5px]"
              onClick={() => {
                const newIndex = index + 1;
                setIndex(newIndex);
                setQuestion(data[newIndex]);
                setAns(null);
                setClicked(false);
              }}
            >
              Next
            </button>
          </div>
          <div className="flex flex-col justify-center items-center py-[5px]">
            <span className="text-[18px]">
              {`${index + 1}`} of {`${data.length}`} questions
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
