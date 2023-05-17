import React from "react";
import "./Footer.css"
import { useState } from "react";

export default function Footer() {
  const [isStyled, setIsStyled] = useState(false);

  const handleClick = () => {
    setIsStyled(!isStyled);
  };

  return (
    <>
      <div className="Footer" >
        <div
          className="relative flex justify-around"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            position: "relative",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <svg
            className={!isStyled ? 'ActiveButton' : 'Button'} onClick={handleClick}
            aria-hidden="true"
            focusable="false"
            role="img"
            viewBox="0 0 576 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
              fill="currentColor"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box"
              }}
            />
          </svg>
          <svg
            className={isStyled ? 'ActiveButton' : 'Button'} onClick={handleClick}
            aria-hidden="true"
            focusable="false"
            role="img"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              fill="currentColor"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box"
              }}
            />
          </svg>
        </div>
        <p
          className="text-center text-3xl absolute top-0 left-1/2 bg-blue-500 w-14 h-14 flex items-center justify-center -m-6 shadow-lg rounded-full"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            position: "absolute",
            top: "0px",
            left: "50%",
            margin: "-1.5rem",
            display: "flex",
            height: "3.5rem",
            width: "3.5rem",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "9999px",
            backgroundColor: "rgb(59 130 246/1)",
            textAlign: "center",
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
            boxShadow:
              "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)"
          }}
        >
          +
        </p>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  text-size-adjust: 100%;
  font-feature-settings: normal;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
  tab-size: 4;
}

body {
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  line-height: inherit;
  margin: 0px;
  -webkit-font-smoothing: antialiased;
  font-family: Poppins, sans-serif;
}
`
        }}
      />
    </>
  );
}
