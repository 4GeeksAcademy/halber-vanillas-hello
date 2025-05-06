import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = () => {
  let pronouns = ['the', 'our'];
  let adjectives = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  let domains = [".com", ".es"]
  let allDomain = []

  for (let pronoun = 0;  pronoun < pronouns.length; pronoun++) {
    for (let adjetive = 0; djetive < adjectives.length; adjetive++) {
      for (let noun = 0; noun < nouns.length; noun++) {
        for (let domain = 0; domain < domains.length; domain++) {
          allDomain.push(pronouns[pronoun] + adjectives[adjetive] + nouns[noun] + domains[domain]);
        }
      }
    }
  }
  let domainList = document.getElementById('domain-list');
  domainList.style.listStyle = "none";
  domainList.style.textAlign = "center";
  domainList.innerHTML = allDomain.map(domain => `<li>${domain}</li>`).join('');
};
