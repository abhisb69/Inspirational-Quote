import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImQuotesLeft,ImQuotesRight} from "react-icons/im";
import {TwitterShareButton,XIcon} from "react-share"
import "./quotes.css"

function Quotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const getQuotes = async () => {
    const response = await axios.get("https://api.quotable.io/random");
    setQuote(response.data.content);
    setAuthor(response.data.author)
  };
  const share=()=>{
    window.location.href("www.google.con")
  }
  useEffect(() => {
    getQuotes();
  }, []);
  return (
    <div className="main-wrapper">
      <p className="header">Inspirational Quote</p>
      <div className="quotes-wrapper">
        <h1><ImQuotesLeft />  {quote} <ImQuotesRight/></h1>
        <p>-{author}</p>
        <TwitterShareButton url={quote} hashtags={["InspirationalQuote","Reactjs"]} className="react-tweet"><XIcon size={40} round={true}/></TwitterShareButton> 
      </div>
      <button onClick={getQuotes}>New Quote</button>
    </div>
  );
}

export default Quotes;
