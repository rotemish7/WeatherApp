import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useStyles } from "../../header/Header.style";
import { withStyles } from "@material-ui/core/styles";

const options = [
  "London",
  "Tel-Aviv",
  "Jerusalem",
  "New-York",
  "Coscu",
  "Manchester",
  "Madrid",
];

const CssTextField = withStyles({
  root: {
    backgroundColor: "RGBA(126,170,255,0.25)",
    color: "white",
    borderRadius: "10px",

    "& button": {
      color: "white",
    },

    "& input": {
      color: "white",
    },

    "& label": {
      color: "white",
    },

    "& label.MuiInputLabel-shrink": {
      marginLeft: "0px",
      color: "white",
      transition: "0.3s",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      paddingLeft: "40px",

      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      // '&.Mui-focused fieldset': {
      //   borderColor: 'transparent',
      // },
    },
  },
})(TextField);

export default function SearchAutocomplete() {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const classes = useStyles();

  return (
    <Autocomplete
    id="free-solo-demo"
    fullWidth
    freeSolo
    options={options}
    renderInput={(params) => (
      <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
    )}
  />
  );
}
