import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AbcIcon from "@mui/icons-material/Abc";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import QuestionDisplayFunctions from "./QuestionDisplayFunctions";

const styles = {
  container: {
    pb: "200px",
  },
  root: {
    "& .MuiTextField-root": {
      margin: 1,
      width: "25ch",
    },
  },
  qtnTypeBtn: {
    height: "100%",
    py: "15px",
    minWidth: "fit-content",
  },
  accordion: {
    width: "100%",
  },
  typeChangeSelector: {
    maxWidth: "200px",
  },
};

export default function Example() {
  const [openAccordion, setOpenAccordion] = useState(false);
  const [questionAdded, setQuestionAdded] = useState(false);
  const [editedData, setEditedData] = useState([]);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3001/questions");
      setData(result.data);
    };
    fetchData();
    setQuestionAdded(false);
  }, [questionAdded]);

  useEffect(() => {
    setEditedData(data);
  }, [data]);

  const [formData, setFormData] = useState({
    type: "",
    question: "",
    other: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    const { question, type, other } = formData;
    if (question == "") {
      setError("Question can not be empty!");
    } else if (type == "") {
      setError("You must choose your question type!");
    } else {
      // Write data to server

      fetch("http://localhost:3001/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((d) => setData([...data, formData]))
        .catch((error) => console.error(error));

      setFormData({ type: "", question: "", other: "" });
      setError("");
      setQuestionAdded(true);
    }
  };

  const handleButtonClick = () => {
    setOpenAccordion(!openAccordion);
  };

  const handleQuestionChange = (e, index) => {
    const newData = [...editedData];
    newData[index].question = e.target.value;
    setEditedData(newData);
  };

  const handleBlur = async (id) => {
    id++;
    const updatedData = data.find((d) => d.id === id);
    await axios.put(`http://localhost:3001/questions/${id}`, updatedData);
  };
  const handleTypeChange = async (e, id) => {
    const newData = [...editedData];
    newData[id].type = e.target.value;
    setEditedData(newData);
    id++;
    const updatedData = data.find((d) => d.id === id);
    await axios.put(`http://localhost:3001/questions/${id}`, updatedData);
  };

  return (
    <Box sx={styles.container}>
      <Box>
        {editedData.map((item, index) => (
          <Stack key={item.id}>
            <Stack direction={"row"}>
              <TextField
                value={item.question}
                onBlur={() => handleBlur(index)}
                onChange={(e) => handleQuestionChange(e, index)}
              ></TextField>
              <FormControl fullWidth>
                <Select
                  sx={styles.typeChangeSelector}
                  labelId="select-label"
                  id="select"
                  value={item.type}
                  label="question-type"
                  onChange={(e) => handleTypeChange(e, index)}
                >
                  {questionTypes.map((item) => (
                    <MenuItem value={item.value} key={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
            <QuestionDisplayFunctions
              setQuestionAdded={setQuestionAdded}
              setData={setData}
              questionId={item.id}
              data={data}
              type={item.type}
              options={item.other}
            />
          </Stack>
        ))}
      </Box>
      <div sx={styles.root}>
        <Stack direction={"row"}>
          <TextField
            id="outlined-basic"
            name="question"
            label="Type your question here"
            variant="outlined"
            fullWidth
            value={formData.question}
            onChange={handleChange}
          />
          <Button
            sx={styles.qtnTypeBtn}
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
          >
            Question type
          </Button>
        </Stack>
        {openAccordion && (
          <Accordion sx={styles.accordion} expanded={true}>
            <AccordionDetails>
              <Typography>
                {questionTypes.map((item) => (
                  <Button
                    key={item.id}
                    variant="text"
                    size="small"
                    startIcon={item.logo}
                    onClick={() => {
                      setFormData({ ...formData, type: item.value });
                      setOpenAccordion(false);
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )}
      </div>

      <Typography color="red">{error}</Typography>

      <IconButton onClick={handleAddQuestion}>
        <AddIcon />
      </IconButton>
    </Box>
  );
}

const questionTypes = [
  {
    id: 1,
    name: "Select One",
    value: "selectone",
    logo: <RadioButtonCheckedIcon />,
  },
  {
    id: 2,
    name: "Select Many",
    value: "selectmany",
    logo: <FormatListBulletedIcon />,
  },
  {
    id: 3,
    name: "Text",
    value: "text",
    logo: <AbcIcon />,
  },
];
