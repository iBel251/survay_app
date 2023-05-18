import { Box, IconButton, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const QuestionDisplayFunctions = ({
  questionId,
  setQuestionAdded,
  setData,
  type,
  options,
  data,
  ...restProps
}) => {
  const [inputValues, setInputValues] = useState(options);
  const [optionChanged, setOptionChanged] = useState(false);
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3001/questions");
      if (JSON.stringify(result.data) !== JSON.stringify(data)) {
        // setData(result.data);
        console.log(result.data);
        setReloadCount(reloadCount + 1);
      }
    };

    fetchData();
  }, [optionChanged]);
  const text = () => {
    return "You chose text";
  };

  useEffect(() => {
    setInputValues(options);
    setReloadCount((reloadCount) => reloadCount + 1);
  }, [optionChanged]);

  useEffect(() => {
    if (optionChanged) {
      axios
        .get(`http://localhost:3001/questions/`)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      console.log("test run");
    }
  }, [optionChanged]);

  const selectOne = (inputValues) => {
    const handleOptionChange = (index, e) => {
      const newInputValues = [...inputValues];
      newInputValues[index] = e.target.value;
      setInputValues(newInputValues);
    };
    const handleBlur = (questionId, index, e) => {
      fetch(`http://localhost:3001/questions/${questionId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          other: inputValues,
        }),
      })
        .then((response) => response.json())
        .then((data) =>
          setData((prevState) =>
            prevState.map((q) => (q.id === data.id ? data : q))
          )
        )
        .catch((error) => console.error(error));
    };

    const handleAddOption = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/questions/${questionId}`
        );
        const question = response.data;
        const newOther = [...question.other, "answer"]; // push new item to end of array
        const updatedQuestion = {
          ...question,
          other: newOther,
        };
        await axios.put(
          `http://localhost:3001/questions/${questionId}`,
          updatedQuestion
        );
        setOptionChanged((prevOptionChanged) => !prevOptionChanged);
        console.log(optionChanged);
      } catch (error) {
        console.error(error);
      }
      // console.log(data);
    };

    const handleOptionDelete = async (questionId, index) => {
      const updatedQuestions = [...data];
      const updatedQuestion = updatedQuestions.find((q) => q.id === questionId);
      if (!updatedQuestion.other) {
        return;
      }
      updatedQuestion.other.splice(index, 1);
      updatedQuestions[questionId] = updatedQuestion;
      // console.log(updatedQuestion);
      // console.log(questionId);
      // setData(updatedQuestions);
      await axios.put(
        `http://localhost:3001/questions/${updatedQuestion.id}`,
        updatedQuestion
      );
      setOptionChanged(!optionChanged);
      // console.log(data);
    };

    return (
      <Stack>
        {inputValues.map((item, index) => (
          <Stack direction={"row"} key={index}>
            <IconButton
              aria-label="delete"
              onClick={() => handleOptionDelete(questionId, index)}
            >
              <DeleteIcon />
            </IconButton>
            <TextField
              value={item}
              onBlur={() => handleBlur(questionId, index)}
              onChange={(e) => handleOptionChange(index, e)}
              {...restProps}
            ></TextField>
          </Stack>
        ))}
        <IconButton
          sx={{ width: "fit-content" }}
          onClick={() => handleAddOption(questionId)}
        >
          <AddIcon />
          Add options
        </IconButton>
      </Stack>
    );
  };

  const selectMany = (inputValues) => {
    const handleOptionChange = (index, e) => {
      const newInputValues = [...inputValues];
      newInputValues[index] = e.target.value;
      setInputValues(newInputValues);
    };
    const handleBlur = (questionId, index, e) => {
      fetch(`http://localhost:3001/questions/${questionId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          other: inputValues,
        }),
      })
        .then((response) => response.json())
        .then((data) =>
          setData((prevState) =>
            prevState.map((q) => (q.id === data.id ? data : q))
          )
        )
        .catch((error) => console.error(error));
    };
    return (
      <Stack>
        {options.map((item, index) => (
          <TextField
            key={index}
            value={item}
            onBlur={() => handleBlur(questionId, index)}
            onChange={(e) => handleOptionChange(index, e)}
            {...restProps}
          ></TextField>
        ))}
      </Stack>
    );
  };

  const myFunctionDefault = (options) => {
    return "Invalid option";
  };

  const renderFunction = () => {
    switch (type) {
      case "text":
        return text(options);
      case "selectone":
        return selectOne(inputValues);
      case "selectmany":
        return selectMany(options);
      default:
        return myFunctionDefault;
    }
  };
  return <Box>{renderFunction()}</Box>;
};

export default QuestionDisplayFunctions;
