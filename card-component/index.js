//Input Element type: email
//Input Element type: text
//Input Element type: password
//Button Element
//Div wrapper for the input
//h3 and a p element
//label elements
//Input element type: checkbox
//Div to wrap the whole elements

const styles = {
  card: {
      set setStyle(element) {
        element.style.boxSizing = "border-box";
        element.style.position = "absolute";
        element.style.width = "400px";
        element.style.left = "70px";
        element.style.top = "280px";
        element.style.background = "#FFF";
        element.style.border = "1px solid rgba(0, 0, 0, 0.1)";
        element.style.boxShadow = "0px 5px 10px 1px rgba(0, 0, 0, 0.15)";
        element.style.borderRadius = "20px";
        element.style.padding = "20px 30px";
      }
  },
  title: {
    set setStyle(element){
      element.style.lineHeight = "29px";
      element.style.fontWeight = "800";
      element.style.fontSize = "24px";
      element.style.color = "#000";

    }
  },
  emailWrapper: {
    set setStyle(element) {
      element.style.display = "flex";
      element.style.flex = "0 0 auto";
      element.style.flexFlow = "row wrap";
      element.style.alignItems = "center";
      element.style.marginBottom = "0";

    }
  },
  label: {
    set setStyle(element) {
      element.style.display = "block";
      element.style.fontSize = "12px";
      element.style.lineHeight = "12px";
      element.style.color = "rgba(0, 0, 0, 0.8)";
      element.style.marginBottom = "5px";

    }
  },
  formControl: {
    set setStyle(element){
      element.style.background = "#fff";
      element.style.border = "1px solid rgba(0, 0, 0, 0.1)";
      element.style.width = "100%";
      element.style.height = "40px";
      element.style.marginBottom = "12px";

    }
  },
  button:{
    set setStyle(element) {
      element.style.width = "100%";
      element.style.height = "55px";
      element.style.background = "#2D2D2D";
      element.style.color = "#fff";
      element.style.borderRadius = "6px";
      element.style.border = "none";
    }
  }

};

//Create Elements Here
let body = document.body;
let cardWrapper = document.createElement("div");
let welcomeCard = document.createElement("div");
let welcomeCardTitle = document.createElement("div");
let welcomeTitle = document.createElement("h3");
let subtitle = document.createElement("p");
let welcomeCardBody = document.createElement("div");
let welcomeForm = document.createElement("form");
let welcomeEmailWrapper = document.createElement("div");
let welcomeEmailLabel = document.createElement("label");
let welcomeEmailinput = document.createElement("input");
let welcomeUsernameLabel = document.createElement("label");
let welcomeUsernameInput = document.createElement("input");
let welcomeButton = document.createElement("button");


//Apply Attributes here
cardWrapper.setAttribute("class", "card-wrapper");
welcomeCard.setAttribute("class", "card");
welcomeCardTitle.setAttribute("class", "card-title");
welcomeTitle.setAttribute("class", "title");
subtitle.setAttribute("class", "subtitle");
welcomeCardBody.setAttribute("class", "card-body");
welcomeForm.setAttribute("method", "post");
welcomeForm.setAttribute("action", "#");
welcomeEmailWrapper.setAttribute("class", "form-group");
welcomeEmailLabel.setAttribute("class", "form-label");
welcomeEmailinput.setAttribute("class", "form-control");
welcomeEmailinput.setAttribute("type", "email");
welcomeButton.setAttribute("type", "submit");


//Apply Styles here
styles.card.setStyle = welcomeCard;
styles.title.setStyle = welcomeTitle;


// styles.emailWrapper.setStyle = welcomeEmailWrapper;
styles.label.setStyle = welcomeEmailLabel
styles.label.setStyle = welcomeUsernameLabel
styles.formControl.setStyle = welcomeEmailinput
styles.formControl.setStyle = welcomeUsernameInput
styles.button.setStyle = welcomeButton


//Apend them to the DOM here
body.appendChild(cardWrapper);
cardWrapper.appendChild(welcomeCard);
welcomeCard.appendChild(welcomeCardTitle);
welcomeCardTitle.appendChild(welcomeTitle);
welcomeCardTitle.appendChild(subtitle);
welcomeCard.appendChild(welcomeCardBody);
welcomeCardBody.appendChild(welcomeForm);
welcomeForm.appendChild(welcomeEmailWrapper);
welcomeEmailWrapper.appendChild(welcomeEmailLabel);
welcomeEmailWrapper.appendChild(welcomeUsernameLabel);
welcomeEmailWrapper.appendChild(welcomeEmailinput);
welcomeEmailWrapper.appendChild(welcomeUsernameLabel);
welcomeEmailWrapper.appendChild(welcomeUsernameInput);
welcomeEmailWrapper.appendChild(welcomeButton);

//Apply Text to elements
welcomeTitle.innerHTML = "Welcome User";
subtitle.innerHTML = "Let's begin setting up your account 🚀";
welcomeEmailLabel.innerHTML = "Email";
welcomeUsernameLabel.innerHTML = "Username";
welcomeButton.innerHTML = "Next";