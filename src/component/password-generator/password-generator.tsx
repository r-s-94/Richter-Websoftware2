import StarSignComponent from "./starSign";
import { useState } from "react";
import "./password-generator.scss";
import "../../variables.scss";

export default function PasswordGenerator() {
  const [showNewPassword, setShowNewPassword] = useState<string>("");
  const [lengthOfSpecialPassword, setLengthOfSpecialPassword] =
    useState<string>("");
  const [specialPasswordNote, setSpecialPasswordNote] =
    useState<boolean>(false);
  const [addSpecialSign, setAddSpecialSign] = useState<boolean>(false);

  const lowerCaseSignArray: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const upperCaseSignArray: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const numberSignArray: string[] = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  const specialSignArray: string[] = [
    "!",
    "§",
    "$",
    "%",
    "&",
    "/",
    "?",
    "@",
    "#",
    ",",
    ".",
    "+",
    "-",
    ";",
    ":",
    "<",
    ">",
    "|",
    "{",
    "[",
    "(",
    ")",
    "]",
    "}",
  ];

  /*const [generatePasswortArray, setGeneratePasswortArray] = useState<string[]>(
      []
    );*/

  let generateNewPasswortArray: string[] = [];

  function generatePassword() {
    for (let index = 0; index < 2; index++) {
      const getRandomLowerCaseSign =
        lowerCaseSignArray[
          Math.floor(Math.random() * lowerCaseSignArray.length)
        ];

      const getRandomUpperCaseSign =
        upperCaseSignArray[
          Math.floor(Math.random() * upperCaseSignArray.length)
        ];

      const getRandomNumberSign =
        numberSignArray[Math.floor(Math.random() * numberSignArray.length)];

      const getRandomSpecialSign =
        specialSignArray[Math.floor(Math.random() * specialSignArray.length)];

      //  console.log(getRandomPasswordSign);

      generateNewPasswortArray.unshift(
        getRandomLowerCaseSign,
        getRandomUpperCaseSign,
        getRandomNumberSign,
        getRandomSpecialSign,
      );

      /*setGeneratePasswortArray((prevRandomArray) => [
          ...prevRandomArray,
          getRandomPasswordSign,
        ]);*/
      //newGeneratePasswortArray.push(getRandomPasswordSign);
      console.log(generateNewPasswortArray);
    }

    if (generateNewPasswortArray.length === 8) {
      setShowNewPassword(generateNewPasswortArray.join(""));
      generateNewPasswortArray = [];
    }
  }

  function generateSpecialPassword() {
    if (Number(lengthOfSpecialPassword) >= 4) {
      for (let index = 0; index < 10; index++) {
        //  console.log(getRandomPasswordSign);

        if (generateNewPasswortArray.length > Number(lengthOfSpecialPassword)) {
          editePassort();
          break;
        }

        const getRandomLowerCaseSign =
          lowerCaseSignArray[
            Math.floor(Math.random() * lowerCaseSignArray.length)
          ];

        const getRandomUpperCaseSign =
          upperCaseSignArray[
            Math.floor(Math.random() * upperCaseSignArray.length)
          ];

        const getRandomNumberSign =
          numberSignArray[Math.floor(Math.random() * numberSignArray.length)];

        if (addSpecialSign) {
          const getRandomSpecialSign =
            specialSignArray[
              Math.floor(Math.random() * specialSignArray.length)
            ];

          generateNewPasswortArray.unshift(
            getRandomLowerCaseSign,
            getRandomUpperCaseSign,
            getRandomNumberSign,
            getRandomSpecialSign,
          );
        }

        if (!addSpecialSign) {
          generateNewPasswortArray.unshift(
            getRandomLowerCaseSign,
            getRandomUpperCaseSign,
            getRandomNumberSign,
          );
        }
      }

      console.log(generateNewPasswortArray);

      setLengthOfSpecialPassword("");
    } else {
      setSpecialPasswordNote(true);
    }
  }

  function editePassort() {
    for (let index = 0; index < 20; index++) {
      if (generateNewPasswortArray.length === Number(lengthOfSpecialPassword)) {
        setShowNewPassword(generateNewPasswortArray.join(""));
        generateNewPasswortArray = [];
        setLengthOfSpecialPassword("");
        break;
      } else {
        generateNewPasswortArray.pop();
      }
    }
  }

  return (
    <div className="password-generator">
      {specialPasswordNote && (
        <div className="windows-pop-up-main-div">
          <div className="windows-pop-up-message-div">
            Das Passwort sollte mindestens 4 Zeichen (Stellen) haben.
            <button
              onClick={() => setSpecialPasswordNote(false)}
              className="close-button button"
            >
              Okay
            </button>
          </div>
        </div>
      )}
      <h1 className="password-generator__headline">
        Passwortgenerator <br />{" "}
        <span className="password-generator__special-sign">
          <StarSignComponent />
          <StarSignComponent />
          <StarSignComponent />
          <StarSignComponent />
          <StarSignComponent />
          <StarSignComponent />
          <StarSignComponent />
          <StarSignComponent />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="password-generator__lock-sign"
          >
            <path
              fill-rule="evenodd"
              d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>{" "}
      </h1>
      <p className="password-generator__output">
        Das neue Passwort heißt:{" "}
        <span className="password-generator__password">{showNewPassword}</span>
      </p>{" "}
      <div className="password-generator__main-div">
        <div className="password-generator__generally-password-div">
          <button
            onClick={generatePassword}
            className="password-generator__create-generally-password-button button"
          >
            Passwort mit 8 Zeichen erstellen
          </button>{" "}
        </div>

        <div className="password-generator__special-password-div">
          <p className="password-generator__special-password-headline">
            Wie viele Zeichen (Stellen) soll dein Passwort haben?
          </p>
          <div className="password-generator__input-and-button-div">
            <input
              type="number"
              name=""
              placeholder="z.B.: 10, 15"
              onChange={(event) => {
                setLengthOfSpecialPassword(event.target.value);
              }}
              value={lengthOfSpecialPassword}
              className="password-generator__input"
            />
            <button
              onClick={generateSpecialPassword}
              className="password-generator__create-special-password-button button"
            >
              Passwort erstellen
            </button>{" "}
          </div>
          <div className="password-generator__checkbox-div">
            <input
              type="checkbox"
              name=""
              onChange={() => {
                setAddSpecialSign(!addSpecialSign);
              }}
              className="password-generator__checkbox"
            />
            Sonderzeichen hinzufügen
          </div>
        </div>
      </div>
    </div>
  );
}
