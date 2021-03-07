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

