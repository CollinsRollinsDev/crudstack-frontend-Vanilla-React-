/* eslint-disable no-useless-escape */
import "./Login.scss";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TextField from "@mui/material/TextField";
// import { useTheme } from "next-themes";
// import { useRouter } from "next/router";
import {useLocation, useNavigate} from 'react-router-dom'
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import axios from 'axios'

const Login = () => {
  // const router = useRouter();
  const location = useLocation()
  const navigate = useNavigate()
  const [disabledState, setDisabledState] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [severity, setSeverity] = useState<any>("error");
  const [btn, setBtn] = useState<string>("Login");
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [alertMsg, setAlertMsg] = useState("");

  const displayAlert = (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {alertMsg}
        </Alert>
      </Collapse>
    </Box>
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setOpen(false);
    setDisabledState(true);
    if (!email || !password) {
      setAlertMsg("Some info are not provided. Please provide all details");
      setSeverity("error");
      setOpen(true);
      setDisabledState(false);
      return;
    }

    const validateEmail = async () => {
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email.match(regexEmail)) {
        // do nothing
        return true;
      } else {
        return false;
      }
    };
    const break_off = await validateEmail();
    let queryP = "email";
    if (break_off !== true) {
      queryP = "";
    }

    try {
      setBtn("please wait....");
    //  const res = await fetch(`http://localhost:8088/login?queryP=${queryP}`, {
    //    method:"post",
    //    body:JSON.stringify({
    //      emailAddress:email.toLocaleLowerCase(),
    //      password
    //    }),
    //    headers:{
    //      "Content-Type":"application/json"
    //    },
    //    credentials:'include'
    //  })
      // const data = await res.json();
      const res:any = await axios.post(`http://localhost:8088/login?queryP=${queryP}`, {  emailAddress:email.toLocaleLowerCase(),
      password}, {
        withCredentials:true,
        credentials:'include'
      })
      const {data} = await res;
      if (data.success !== true) {
        setAlertMsg(data.message);
        setSeverity("error");
        setOpen(true);
        setBtn("Login");
        setDisabledState(false);
        return;
      }
      setAlertMsg(data.message);
      setSeverity("success");
      setBtn("Success!");
      setOpen(true);
     setTimeout(() => {
      navigate("/")
      }, 2000);
      return;
    } catch (error) {
      setAlertMsg("An error occured! Please try again!");
      setSeverity("error");
      setOpen(true);
      setBtn("Login");
      setDisabledState(false);
      return;
    }
  };

  useEffect(() => {
    const x = window.setInterval(() => {
     
      if (open) {
        setOpen(false);
      }
    }, 10000);
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      x;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header currentPage="login" />

      <section className="login-mainSpilt">
      <div className="alertArea">{displayAlert}</div>
        <section className="left">
          <h1>Welcome Back!, Please Sign in here....</h1>
          <p>
            You can contact Collins Rollins{" "}
            <a style={{ color: "blue" }} href="https://collinsrollins.com">
              here.
            </a>
            !
          </p>
        </section>
        <section className="right">
          <form noValidate>
            <h2>Fill the form to login</h2>

            <TextField
              required
              value={email.toLocaleLowerCase()}
              onChange={(e) => setEmail(e.target.value)}
              id="filled-helperText"
              label="email"
              variant="standard"
              type="email"
              autoComplete="off"
            />

            <TextField
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="filled-helperText"
              label="Password"
              variant="standard"
              helperText="passwords are encrypted"
              type="password"
              autoComplete="off"
            />
            <button onClick={handleSubmit} disabled={disabledState}>
              {btn}
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Login;
