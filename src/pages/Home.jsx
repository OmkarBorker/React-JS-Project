import React from "react";
import Footer from "../component/footer";
import "./Home.css"

export default function Home() {
  return (
    <>
      <div className="p-5">
        <div className="Nav">
          <span className="NavText">
            Sosmad
          </span>
          <div className="icons">
            <svg
              className="svg-inline"
              aria-hidden="true"
              focusable="false"
              role="img"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                fill="currentColor"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box"
                }}
              />
            </svg>
            <svg
              className="svg-inline"
              aria-hidden="true"
              focusable="false"
              role="img"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
                fill="currentColor"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box"
                }}
              />
            </svg>
          </div>
        </div>
        <div className="stories">
          <p className="text-story">
            {" "}
            Stories
          </p>
          <div className="storySection">
            <div className="cards">
              <img
                className="img"
                src="https://www.iucn.org/sites/default/files/styles/what_we_do_large/public/images-themes/biodiversity-shutterstock_1477256246.jpg.webp?itok=4i9JdtFu"
              />
              <div className="imgfoot">
                <img
                  className="icon2"
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                />
                <p className="imgtext">
                  Adison Mango
                </p>
              </div>
            </div>
            <div
              className="cards"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                position: "relative"
              }}
            >
              <img
                className="img"
                src="https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/1:1/w_2000,h_2000,c_limit/gettyimages-1146431497.jpg"
              />
              <div className="imgfoot">
                <img
                  className="icon2"
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                />
                <p className="imgtext">
                  Adison Mango
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <p className="button-text">
            Explore
          </p>
          <p
            className="button1" >
            Explore
          </p>
        </div>
        <div
          className="section">
          <div
            className="flex justify-between p-3 my-2"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              marginBottom: "0.5rem",
              marginTop: "0.5rem",
              display: "flex",
              justifyContent: "space-between",
              padding: "0.75rem"
            }}
          >
            <div
              className="flex"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "flex"
              }}
            >
              <div
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box"
                }}
              >
                <img
                  className="w-10 h-10 rounded-full border-blue-600 border-2"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "block",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    height: "2.5rem",
                    width: "2.5rem",
                    borderRadius: "9999px",
                    borderWidth: "2px",
                    borderColor: "rgb(37 99 235/1)"
                  }}
                />
              </div>
              <div
                className="ml-2"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  marginLeft: "0.5rem"
                }}
              >
                <h1
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontSize: "inherit",
                    fontWeight: "inherit",
                    margin: "0px"
                  }}
                >
                  Ahmed Dorwart
                </h1>
                <p
                  className="text-xs text-slate-400"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    color: "rgb(148 163 184/1)",
                    textAlign: "left"
                  }}
                >
                  10 Mins Ago
                </p>
              </div>
            </div>
            <span
              className="font-bold bg-slate-700 rounded-full w-10 h-10 flex items-center justify-center"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "flex",
                height: "2.5rem",
                width: "2.5rem",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "9999px",
                backgroundColor: "rgb(51 65 85/1)",
                fontWeight: 700
              }}
            >
              ...
            </span>
          </div>
          <div
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box"
            }}
          >
            <img
              className="w-full h-60"
              src="https://images.unsplash.com/photo-1636955735635-b4c0fd54f360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "block",
                verticalAlign: "middle",
                maxWidth: "100%",
                height: "15rem",
                width: "100%"
              }}
            />
            <div
              className="flex justify-start my-2 text-lg gap-3 p-3"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                marginBottom: "0.5rem",
                marginTop: "0.5rem",
                display: "flex",
                justifyContent: "flex-start",
                gap: "0.75rem",
                padding: "0.75rem",
                lineHeight: "1.75rem",
                fontSize: "1.125rem"
              }}
            >
              <svg
                className="svg-inline--fa fa-heart"
                aria-hidden="true"
                focusable="false"
                role="img"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  display: "var(--fa-display, inline-block)",
                  height: "1em",
                  verticalAlign: "-0.125em",
                  overflow: "visible",
                  boxSizing: "content-box"
                }}
              >
                <path
                  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                  fill="currentColor"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box"
                  }}
                />
              </svg>
              <svg
                className="svg-inline--fa fa-comment"
                aria-hidden="true"
                focusable="false"
                role="img"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  display: "var(--fa-display, inline-block)",
                  height: "1em",
                  verticalAlign: "-0.125em",
                  overflow: "visible",
                  boxSizing: "content-box"
                }}
              >
                <path
                  d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
                  fill="currentColor"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box"
                  }}
                />
              </svg>
              <svg
                className="svg-inline--fa fa-share"
                aria-hidden="true"
                focusable="false"
                role="img"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  display: "var(--fa-display, inline-block)",
                  height: "1em",
                  verticalAlign: "-0.125em",
                  overflow: "visible",
                  boxSizing: "content-box"
                }}
              >
                <path
                  d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
                  fill="currentColor"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box"
                  }}
                />
              </svg>
            </div>
            <div
              className="flex justify-start gap-3 ml-3 items-center"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                marginLeft: "0.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "0.75rem"
              }}
            >
              <p
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px"
                }}
              >
                <span
                  className="font-semibold"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontWeight: 600
                  }}
                >
                  229
                </span>{" "}
                Likes
              </p>
              <p
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px"
                }}
              >
                .
              </p>
              <p
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px"
                }}
              >
                <span
                  className="font-semibold"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontWeight: 600
                  }}
                >
                  229
                </span>{" "}
                Comments
              </p>
            </div>
            <p
              className="p-3"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                padding: "0.75rem",
                textAlign:"left"
              }}
            >
              <span
                className="font-semibold mr-2"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  marginRight: "0.5rem",
                  fontWeight: 600,
                  textAlign:"left"
                }}
              >
                Amat Pauji
              </span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
              iusto.
            </p>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}

