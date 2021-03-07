const btnContacts = document.querySelector(".btn-contacts");
const modal = document.querySelector(".modal");
const modalClose = modal.querySelector(".modal-close");
const modalForm = modal.querySelector(".modal-form");
const nameInput = modal.querySelector(".name-input");
const mailInput = modal.querySelector(".mail-input");
const messageInput = modal.querySelector(".message-input")

let isStorageSupport = true;
let nameFromStorage = "";
let mailFromStorage = "";

try {
  nameFromStorage = localStorage.getItem("name");
  mailFromStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
};


btnContacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  if (nameFromStorage) {
    if (nameFromStorage) {
    nameInput.value = nameFromStorage;
    mailInput.focus();
    } else {
    mailInput.value = mailFromStorage;
    message.focus();
    }
    } else {
    nameInput.focus();
    }
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
  if (!nameInput.value || !mailInput.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameInput.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});

ymaps.ready(init);

function init() {
  const map = new ymaps.Map('map', {
    center: [59.938916, 30.321529],
    zoom: 17,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });

  const placemark = new ymaps.Placemark([59.938635, 30.323118], {
      hintContent: '<div class="contacts__hint">ул. Большая Конюшенная, 19/8</div>',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './img/map-marker.svg',
      iconImageSize:  [231, 190],
      iconImageOffset: [-55, -180]
    });

  map.geoObjects.add(placemark);
}
