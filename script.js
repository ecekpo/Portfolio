// Toggle Menu (navBar)

const menu = document.querySelector('.nav-bar-menu');
const mButton = document.querySelector('#hamburger');
const closeBtn = document.querySelector('#close-button');

mButton.addEventListener('click', () => {
  menu.style.display = 'flex';
  closeBtn.style.display = 'inline-block';
  mButton.style.display = 'none';
  menu.style.zIndex = '10';
  closeBtn.style.zIndex = '11';
});

// Close the nav menu
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  mButton.style.display = 'inline-block';
});

menu.addEventListener('click', () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  mButton.style.display = 'inline-block';
});

const mobile = [
  {
    img: './imgs/pic1.png',
    title: 'Tonic',
    company: ['CANOPY', 'Backend Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'CSS', 'Javascript'],
    button: 'See Project',
  },
  {
    img: './imgs/pic2.png',
    title: 'Multi-Post Stories',
    company: ['CANOPY', 'Backend Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'Javascript'],
    button: 'See Project',
  },
  {
    img: './imgs/pic3.png',
    title: 'Tonic',
    company: ['CANOPY', 'Backend Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'Javascript'],
    button: 'See Project',
  },
  {
    img: './imgs/pic4.png',
    title: 'Multi-Post Stories',
    company: ['CANOPY', 'Backend Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'Javascript'],
    button: 'See Project',
  },
];

const cards = [
  {
    img: './imgs/card1desktop.png',
    title: 'Tonic',
    company: ['CANOPY', 'Backend Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'CSS', 'Javascript'],
    button: 'See Project',
  },
  {
    img: './imgs/carddesktop2.png',
    title: 'Multi-Post Stories',
    company: ['FACEBOOK', 'Fullstack Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'Ruby on rails', 'Css', 'Javascript'],
    button: 'See Project',
  },
  {
    img: './imgs/card3desktop.png',
    title: 'Facebook 360',
    company: ['FACEBOOK', 'Fullstack Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'Ruby on rails', 'Css', 'Javascript'],
    button: 'See Project',
  },
  {
    img: './imgs/card4desktop.png',
    title: 'Uber Navigation',
    company: ['UBER', 'Lead Developer', '2018'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'Ruby on rails', 'Css', 'Javascript'],
    button: 'See Project',
  },
];

const workContent = document.querySelector('#deskCards');
cards.forEach((desc) => {
  const workCards = document.createElement('div');
  workCards.innerHTML = `  
     
     <div class="card">
      <img src=${desc.img} alt="Card One" width="550">
      <div class="container">
          <h2><b>${desc.title}</b></h2>
              <ul class="pic-one">
                  <li>${desc.company[0]}</li>
                  <li class="card-list">${desc.company[1]}</li>
                  <li class="card-list">${desc.company[2]}</li>
              </ul>
          <p>${desc.description}</p>
          <ul class="pic-two">
              <li>${desc.languages[0]}</li>
              <li>${desc.languages[1]}</li>
              <li>${desc.languages[2]}</li>
          </ul>
          <div class="card-button"  onclick="popup()">${desc.button}</div>
      </div>
  </div>
    `;

  workContent.appendChild(workCards);
});

const worksMobile = document.querySelector('#cards');
mobile.forEach((mobDesc) => {
  const workMobile = document.createElement('div');
  workMobile.innerHTML = `  
     
    <div class="card">
      <img src=${mobDesc.img} alt="Card One" style="width:100%">
      <div class="container">
          <h2><b>${mobDesc.title}</b></h2>
              <ul class="pic-one">
                  <li>${mobDesc.company[0]}</li>
                  <li class="card-list">${mobDesc.company[1]}</li>
                  <li class="card-list">${mobDesc.company[2]}</li>
              </ul>
          <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
          <ul class="pic-two">
              <li>${mobDesc.languages[0]}</li>
              <li>${mobDesc.languages[1]}</li>
              <li>${mobDesc.languages[2]}</li>
          </ul>
          <div class="card-button" onclick="popup()">${mobDesc.button}</div>
      </div>
    </div>
    `;

  worksMobile.appendChild(workMobile);
});

const popper = document.querySelector('#popmenu');

// eslint-disable-next-line no-unused-vars
function popup() {
  popper.classList.toggle('active');
}

// form validation
const formemail = document.querySelector('#form');
const emailerror = document.querySelector('.emailerror');
const userEmail = document.querySelector('.useremail');

formemail.addEventListener('submit', (e) => {
  const userinput = userEmail.value;
  if (/[A-Z]/.test(userinput)) {
    emailerror.innerHTML = 'invalid email, please use small letters';
    emailerror.classList.add('.emailerror');
    e.preventDefault();
  }
});

const clientName = document.getElementById('fullname');
const clientEmail = document.getElementById('email');
const clientMessage = document.getElementById('message-input');

window.onload = () => {
  const formData = localStorage.getItem('formKey');

  if (formData) {
    const form = JSON.parse(formData);
    clientName.value = form.clientName;
    clientEmail.value = form.clientEmail;
    clientMessage.value = form.clientMessage;
  }
};

formemail.addEventListener('input', () => {
  const formstorage = {
    clientName: clientName.value,
    clientEmail: clientEmail.value,
    clientMessage: clientMessage.value,
  };
  localStorage.setItem('formKey', JSON.stringify(formstorage));
});
