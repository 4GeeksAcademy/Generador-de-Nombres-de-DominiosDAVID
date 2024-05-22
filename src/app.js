/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let generadorDominio = () => {
  let pronouns = ["the", "our", "this"];
  let adjs = ["great", "big", "cruel"];
  let nouns = ["jogger", "racoon", "consultant"];
  let extensiones = [".com", ".es", ".net"];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let extension of extensiones) {
          console.log("www." + pronoun + adj + noun + extension);
        }
      }
    }
  }
};

generadorDominio();
