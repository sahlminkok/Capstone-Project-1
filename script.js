// mobile menu

const menu = document.querySelector('#menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cancel = document.querySelector('#cancel');

function display() {
  mobileMenu.classList.toggle('hidden');
}

menu.addEventListener('click', display);

function hide() {
  mobileMenu.classList.toggle('hidden');
}

cancel.addEventListener('click', hide);

const directors = [
  {
    image: 'images/pantami.png',
    name: 'PROF. ISA ALI IBRAHIM PANTAMI',
    profession: 'Minister of Communications and Digital Economy',
    note: 'Prof. Isa Ali Ibrahim (Pantami) is the Honourable Minister of Communications and Digital Economy of the Federal Republic of Nigeria',
  },
  {
    image: 'images/dr.william.png',
    name: 'DR. WILLIAM NWANKWO ALO',
    profession: 'Permanent Secretary',
    note: 'Dr William Nwankwo Alo is a native of Ekwetekwe-Umuezeoka in Ezza North Local Government Area of Ebonyi State. He was born on the 15th day of April, 1965.',
  },
  {
    image: 'images/mrs.n.m.png',
    name: 'DR. (MRS.) N. M. NWACHUKWU',
    profession: 'Director, PRS',
    note: 'Dr. N. M. Nwachukwu is the director of Department of Planning, Research and Statistics',
  },
  {
    image: 'images/mr.samuel.png',
    name: 'MR. SAMUEL OKOYE',
    profession: 'Director, ICT',
    note: 'Mr. Samuel Okoue is the director of Department of Information and Communication Technology',
  },
  {
    image: 'images/eng.abubakar.png',
    name: 'ENGR. ABUBAKAR LADAN ABDULLAHI',
    profession: 'Director, National Frequency Management Council',
    note: 'Born on 24th November, 1963, Engr. Abubakar Ladan Abdullahi, is an indigene of Dange/Shuni Local Government Area of Sokoto State, North-West Nigeria.',
  },
  {
    image: 'images/eng.adamu.png',
    name: 'ENGR. ADAMU MOHAMMED, MNSE',
    profession: 'Ag. Director, Telecoms & Postal Services',
    note: 'A seasoned Engineer extraordinaire Engr. Adamu Mohammed hails from Suleja Emirate of Niger State.',
  },
];

let director = '';
for (let i = 0; i < directors.length; i += 1) {
  director += `
  <section class="director">
      <section class="dir-img">
        <img src="${directors[i].image}" alt="${directors[i].name}">
      </section>
      <section class="info">
        <h4>${directors[i].name}</h4>
        <p class="profession orange">${directors[i].profession}</p>
        <p class="note">${directors[i].note}</p>
      </section>
  </section>`;
}

const directorsSec = document.querySelector('.directors-list');
directorsSec.innerHTML = director;