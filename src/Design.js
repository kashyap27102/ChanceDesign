import React, { useEffect, useState } from "react";
import "./design.css";
import DummyData from "./People";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Design() {
  const [people, setpeople] = useState([]);
  const [connections, setConnections] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    setpeople(DummyData);
    setConnections(DummyData);
  }, []);
  useEffect(() => {
    console.log(text);
    text.length === 0
      ? setpeople(DummyData)
      : setpeople(
          DummyData.filter((person) => {
            return person.name.toLowerCase().includes(text);
          })
        );
  }, [text]);

  const onChangeHandler = (e) => {
    setText(e.target.value.toLowerCase());
  };

  return (
    <div className="container">
      <div className="design-wrapper">
        <div className="connection-box">
          <div className="header">
            <span>
              <b>New Connections</b>
            </span>
            <div className="counter">2</div>
          </div>
          <div className="connections">
            {connections.map((connection) => {
              return (
                <div key={connection.id} className="connection">
                  <div className="connection-profile">
                    <img
                      src={connection.profilePicture}
                      alt=""
                      className="profile-photo"
                    />
                  </div>
                  <span>{connection.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="message-box">
          <div className="message-box-header">
            <div className="left-side">
              <span>
                <b>Messages</b>
              </span>
              <div className="counter">1</div>
            </div>
            <div className="right-side">
            <FontAwesomeIcon icon={faSearch} className="searchIcon"></FontAwesomeIcon>
              <input
                type="text"
                className="search"
                placeholder="Search"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="chats">
            {people.map((person) => {
              return (
                <>
                  <div key={person.id} className="chat">
                    <div className="start">
                      <div className="connection-profile" >
                        <img
                          src={person.profilePicture}
                          alt=""
                          className="profile-photo"
                        />
                      </div>
                    </div>
                    <div className="middle">
                      <p className="connection-name">{person.name}</p>
                      <p className="latest-message">{person.lastMessage}</p>
                    </div>
                    <div className="end">
                      <p className="time">3.32pm</p>
                      <span className="counter">4</span>
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
