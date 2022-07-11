// mobile menu section
const mobileMenu = document.querySelector('.m-menu-bar');
const hamburgerMenu = document.querySelector('.hamburger-menu-bar');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.menu-list-1').forEach((n) => n.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  mobileMenu.classList.remove('active');
}));

// Portfolio card detail information
const cards = [
  {
    card_image: 'assest/pic1.PNG',
    card_title: 'Tonic',
    card_title_item: 'CANOPY',
    counter_image: 'assest/count-icon.PNG',
    card_title_text: ['Back End Dev', '2015'],
    project_description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://github.com/ecekpo/Portfolio.git',
    source_code: 'https://github.com/ecekpo/Portfolio.git',
  },
  {
    card_image: 'assest/pic2.PNG',
    card_title: 'Multi-Post Stories',
    card_title_item: 'CANOPY',
    counter_image: 'assest/count-icon.PNG',
    card_title_text: ['Back End Dev', '2015'],
    project_description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://github.com/ecekpo/Portfolio.git',
    source_code: 'https://github.com/ecekpo/Portfolio.git',
  },
  {
    card_image: 'assest/pic3.PNG',
    card_title: 'Facebook 360',
    card_title_item: 'CANOPY',
    counter_image: 'assest/count-icon.PNG',
    card_title_text: ['Back End Dev', '2015'],
    project_description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://github.com/ecekpo/Portfolio.git',
    source_code: 'https://github.com/ecekpo/Portfolio.git',
  },
  {
    card_image: 'assest/pic4.PNG',
    card_title: 'Uber Navigation',
    card_title_item: 'CANOPY',
    counter_image: 'assest/count-icon.PNG',
    card_title_text: ['Back End Dev', '2015'],
    project_description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://github.com/ecekpo/Portfolio.git',
    source_code: 'https://github.com/ecekpo/Portfolio.git',
  },
];

// Section handles Card using an array of project data objects
const portfolio = document.querySelector('.portfolio-works');
portfolio.removeChild(portfolio.firstElementChild);

cards.forEach((project) => {
  const ul = document.createElement('ul');
  ul.className = 'project-card';
  portfolio.appendChild(ul);

  let li = document.createElement('li');
  li.className = 'project-img-wrapper';
  li.innerHTML = `<img src=${project.card_image} alt=${project.card_title} class='Project-img'>`;
  ul.appendChild(li);

  li = document.createElement('li');
  li.className = 'project-content-block';
  ul.appendChild(li);

  const projectContainer = document.createElement('div');
  projectContainer.className = 'project-container';
  li.appendChild(projectContainer);

  const h1 = document.createElement('h1');
  h1.className = 'project-title';
  h1.innerHTML = project.card_title;
  projectContainer.appendChild(h1);

  const projectInfo = document.createElement('div');
  projectInfo.className = 'project-info';
  projectContainer.appendChild(projectInfo);

  const h2 = document.createElement('h2');
  h2.className = 'project-info-title';
  h2.innerHTML = project.card_title_item;
  projectInfo.appendChild(h2);

  project.card_title_text.forEach((infoText) => {
    const img = document.createElement('img');
    img.src = project.counter_image;
    img.alt = 'counter';
    projectInfo.appendChild(img);

    const p = document.createElement('p');
    p.className = 'project-info-item';
    p.innerHTML = infoText;
    projectInfo.appendChild(p);
  });

  const projectDescription = document.createElement('p');
  projectDescription.className = 'project-description';
  projectDescription.innerHTML = project.project_description;
  li.appendChild(projectDescription);

  // li child ul
  const tags = document.createElement('ul');
  tags.className = 'tags';
  li.appendChild(tags);

  project.tags.forEach((tagText) => {
    const tagItem = document.createElement('li');
    tagItem.className = 'tag-content';
    tagItem.textContent = tagText;
    tags.appendChild(tagItem);
  });

  // li last child
  const actionContainer = document.createElement('div');
  actionContainer.className = 'action-container';
  li.appendChild(actionContainer);

  const actionButton = document.createElement('button');
  actionButton.className = 'action-btn see-project';
  actionButton.type = 'button';
  actionButton.textContent = 'See project';
  actionContainer.appendChild(actionButton);
});

// Section cover desktop and mobile pop-up Toogle
const seeProjectBtn = Array.from(document.querySelectorAll('.see-project'));
const closeModalBtn = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-container');
const body = document.querySelector('body');

// Event handler on see project button click
seeProjectBtn.forEach((button, index) => {
  button.addEventListener('click', () => {
    modal.style.display = 'flex';
    body.style.overflow = 'hidden';

    // Pop-up Modal
    const modalData = cards[index];
    const modalTags = Array.from(
      document.querySelectorAll('.works-modal .tag-content'),
    );
    const modalCounterImg = Array.from(
      document.querySelectorAll('.works-modal .project-info img'),
    );
    const infoItems = Array.from(
      document.querySelectorAll('.works-modal .project-info-item'),
    );

    document.querySelector('.works-modal .project-title').innerHTML = modalData.card_title;
    document.querySelector('.works-modal .project-info-title').innerHTML = modalData.card_title_item;
    document.querySelector('.works-modal .Project-img').src = modalData.card_image;
    document.querySelector('.works-modal .project-description').innerHTML = modalData.project_description;
    document.querySelector('.works-modal .see-live').href = modalData.live_version;
    document.querySelector('.works-modal .see-source').href = modalData.source_code;

    modalCounterImg.forEach((infoImg) => {
      infoImg.src = modalData.counter_image;
      infoImg.alt = modalData.card_title;
    });
    infoItems.forEach((infoItem, idx) => {
      infoItem.innerHTML = modalData.card_title_text[idx];
    });
    modalTags.forEach((tag, idx) => {
      tag.innerHTML = modalData.tags[idx];
    });

    // Handle modal buttons
    document.querySelector('.works-modal .see-live').onclick = () => {
      window.location.href = modalData.live_version;
    };
    document.querySelector('.works-modal .see-source').onclick = () => {
      window.location.href = modalData.source_code;
    };
  });
});

// Moodal close button click action
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
});

//  Email input, validation and form storage section
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
