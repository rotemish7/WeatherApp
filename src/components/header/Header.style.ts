import { TextField } from "@material-ui/core";
import styled from "styled-components";
import {
  alpha,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    growButtons: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      color: "white",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "rgba(116, 174, 218, 0.36)",
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "300px",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3)
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "white",
    },
    inputInput: {
      borderColor: "white",
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "5px",
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);

export const StyledTextField = styled(TextField)`

  label.focused {
    color: green;
  }
  .MuiOutlinedInput-root {
    fieldset {
      outline: none;
      border-color: transparent;
    }
    &:hover fieldset {
      outline: none;
      background-color: rgb(132,188,236);
      border-color: transparent;

      transition: 0.15s linear;
    }
    &.Mui-focused fieldset {
      outline: none;
      background-color: rgb(132,188,236);
    }
  }
`;
