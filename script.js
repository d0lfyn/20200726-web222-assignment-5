/* Add any JavaScript you need to this file. */
const MusicCollection = (pLink, pCoverArt, pTitle, pRelease, pDescription, pTags) => {
  return {
    link: pLink,
    coverArt: pCoverArt,
    title: pTitle,
    release: pRelease,
    description: pDescription,
    tags: pTags
  };
};

const Photo = (pLink, pPhoto, pTitle, pDate, pDescription, pTags) => {
  return {
    link: pLink,
    photo: pPhoto,
    title: pTitle,
    date: pDate,
    description: pDescription,
    tags: pTags
  };
};

const musicCollections = [
  MusicCollection(
    'https://open.spotify.com/album/4g2TKTyjRaonCTQmDH7P35?si=7gNSNu24SVCJLX6Pjo7CmQ',
    'https://i.scdn.co/image/ab67616d00001e0231988e5b95e43b1e84b86261',
    'Prelude, Allemande',
    new Date(2020, 3, 30),
    `Arrangements of Johann Sebastian Bach's Prelude in C and Allemande in a.`,
    ['classical', 'electronic']
  ),
  MusicCollection(
    'https://open.spotify.com/album/4fqssgrvVQbojEwmOI09vs?si=88ZrWvYXRKSxjWlysm-qwA',
    'https://i.scdn.co/image/ab67616d00001e02f06758d17de2300b76d55e15',
    'Moments of Summer',
    new Date(2020, 6, 19),
    'Original compositions. A miniature celebration of summer.',
    ['classical']
  )
];

const photos = [
  Photo(
    'http://fav.me/dd5upo8',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6279502f-0e0b-4c79-ae55-9d181a870325/dd5upo8-f3d99818-a0c2-4bc3-82bb-ece9475baff6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjI3OTUwMmYtMGUwYi00Yzc5LWFlNTUtOWQxODFhODcwMzI1XC9kZDV1cG84LWYzZDk5ODE4LWEwYzItNGJjMy04MmJiLWVjZTk0NzViYWZmNi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.gE2EXxGxsSSj8rRIwW0lNva5lMxJOL39H745ewZhDTk',
    'Autumn Abstract',
    new Date(2016, 8, 18),
    'A colourful abstract of autumn leaves.',
    ['abstract', 'nature']
  ),
  Photo(
    'http://fav.me/dd5uygf',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6279502f-0e0b-4c79-ae55-9d181a870325/dd5uygf-f5bb86ca-9b46-4ab4-bf5b-d889beee2c89.jpg/v1/fill/w_894,h_894,q_70,strp/_dsc3241_by_0delphi_dd5uygf-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yNTQ5IiwicGF0aCI6IlwvZlwvNjI3OTUwMmYtMGUwYi00Yzc5LWFlNTUtOWQxODFhODcwMzI1XC9kZDV1eWdmLWY1YmI4NmNhLTliNDYtNGFiNC1iZjViLWQ4ODliZWVlMmM4OS5qcGciLCJ3aWR0aCI6Ijw9MjU0OSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.QS8Ca_YUfKMpMUs8dQhfKUkeueYxAoS6pnimy3qdX0o',
    'Autumn Leaves',
    new Date(2016, 9, 26),
    'A bright abstract of autumn leaves.',
    ['abstract', 'nature']
  ),
  Photo(
    'http://fav.me/dd5uwsw',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6279502f-0e0b-4c79-ae55-9d181a870325/dd5uwsw-05ec9c87-7032-41bc-966d-148dac74b574.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjI3OTUwMmYtMGUwYi00Yzc5LWFlNTUtOWQxODFhODcwMzI1XC9kZDV1d3N3LTA1ZWM5Yzg3LTcwMzItNDFiYy05NjZkLTE0OGRhYzc0YjU3NC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.pA-feU3oVuobgYIZHD1t443CJxhorHKvWbOt64Ypddk',
    'Mid-day-night',
    new Date(2016, 9, 26),
    'An abstract full of contrast, taken at a park around noon.',
    ['abstract']
  ),
  Photo(
    'http://fav.me/dd5ux99',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6279502f-0e0b-4c79-ae55-9d181a870325/dd5ux99-d3438f59-f69a-42a9-a72b-0ef4d10315a5.jpg/v1/fill/w_1280,h_2282,q_75,strp/_dsc3594_by_0delphi_dd5ux99-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yMjgyIiwicGF0aCI6IlwvZlwvNjI3OTUwMmYtMGUwYi00Yzc5LWFlNTUtOWQxODFhODcwMzI1XC9kZDV1eDk5LWQzNDM4ZjU5LWY2OWEtNDJhOS1hNzJiLTBlZjRkMTAzMTVhNS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.22iSRX7f6Ze1_Ec5xgq2i5xG6aTUUxOlYxqVw3VGYUA',
    'Pond Still',
    new Date(2016, 10, 27),
    `A striking abstract of a pond's rippling surface.`,
    ['abstract', 'nature']
  ),
  Photo(
    'http://fav.me/dd5uwa7',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6279502f-0e0b-4c79-ae55-9d181a870325/dd5uwa7-8d969382-3a95-45cc-b22c-0679c1693255.jpg/v1/fill/w_1280,h_719,q_75,strp/_dsc3815_by_0delphi_dd5uwa7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MTkiLCJwYXRoIjoiXC9mXC82Mjc5NTAyZi0wZTBiLTRjNzktYWU1NS05ZDE4MWE4NzAzMjVcL2RkNXV3YTctOGQ5NjkzODItM2E5NS00NWNjLWIyMmMtMDY3OWMxNjkzMjU1LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.543Vpy0r43BJMkICnODTDlW_4vtSPXpBzQzCDXekXnI',
    'Pond Abstract',
    new Date(2017, 4, 11),
    'A moody abstract taken at a pond near dusk.',
    ['abstract', 'nature']
  ),
  Photo(
    'http://fav.me/dd5uwos',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6279502f-0e0b-4c79-ae55-9d181a870325/dd5uwos-8da486e9-1cc1-4409-824b-490bfd705a80.jpg/v1/fill/w_1280,h_718,q_75,strp/_dsc3960_by_0delphi_dd5uwos-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MTgiLCJwYXRoIjoiXC9mXC82Mjc5NTAyZi0wZTBiLTRjNzktYWU1NS05ZDE4MWE4NzAzMjVcL2RkNXV3b3MtOGRhNDg2ZTktMWNjMS00NDA5LTgyNGItNDkwYmZkNzA1YTgwLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.c8XNq35wNNaQNv96ByWUJ4MgZNcE4EbaVbfAxI-ISs4',
    'Summer Tree',
    new Date(2017, 5, 3),
    'A radiant abstract of a tree during summertime.',
    ['abstract', 'nature']
  ),
  Photo(
    'http://fav.me/dd5uwgp',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6279502f-0e0b-4c79-ae55-9d181a870325/dd5uwgp-9eae3026-b370-4798-a0a3-f6edb0ebff31.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjI3OTUwMmYtMGUwYi00Yzc5LWFlNTUtOWQxODFhODcwMzI1XC9kZDV1d2dwLTllYWUzMDI2LWIzNzAtNDc5OC1hMGEzLWY2ZWRiMGViZmYzMS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.3NsfIykN9F2qKrOE08gD9ep18kPwz0sEv_JlXg-1o34',
    'Summer Pondside',
    new Date(2017, 5, 3),
    'A pretty abstract by the pond during summertime.',
    ['abstract', 'nature']
  ),
  Photo(
    'http://fav.me/dd68w6v',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6279502f-0e0b-4c79-ae55-9d181a870325/dd68w6v-6714c49c-e49b-411d-9bf7-75d8bf174d46.jpg/v1/fill/w_1280,h_719,q_75,strp/_dsc4021_by_0delphi_dd68w6v-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MTkiLCJwYXRoIjoiXC9mXC82Mjc5NTAyZi0wZTBiLTRjNzktYWU1NS05ZDE4MWE4NzAzMjVcL2RkNjh3NnYtNjcxNGM0OWMtZTQ5Yi00MTFkLTliZjctNzVkOGJmMTc0ZDQ2LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.AIDChlKpJnAy_JRFMtJ0PG3ZomP6r9p8Nrp4T_0dvoI',
    'Reflexions',
    new Date(2017, 5, 5),
    'A halting abstract of a pond.',
    ['abstract', 'nature']
  ),
  Photo(
    'http://fav.me/dd5uxtn',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6279502f-0e0b-4c79-ae55-9d181a870325/dd5uxtn-72566aee-806c-4edf-8535-0622bb3ac6b4.jpg/v1/fill/w_1280,h_719,q_75,strp/_dsc4585_by_0delphi_dd5uxtn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MTkiLCJwYXRoIjoiXC9mXC82Mjc5NTAyZi0wZTBiLTRjNzktYWU1NS05ZDE4MWE4NzAzMjVcL2RkNXV4dG4tNzI1NjZhZWUtODA2Yy00ZWRmLTg1MzUtMDYyMmJiM2FjNmI0LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.vj4yoCcFU0eGgxcX4hffdFAYpTp3HcdkqVQucBT2tSY',
    'Autumn Foliage',
    new Date(2017, 9, 22),
    'A vibrant snapshot of autumn foliage.',
    ['nature']
  ),
  Photo(
    'http://fav.me/dd5uy5q',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6279502f-0e0b-4c79-ae55-9d181a870325/dd5uy5q-daf96acb-fb99-498d-b5ab-182ab3d288f3.jpg/v1/fill/w_1280,h_719,q_75,strp/_dsc4631_by_0delphi_dd5uy5q-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MTkiLCJwYXRoIjoiXC9mXC82Mjc5NTAyZi0wZTBiLTRjNzktYWU1NS05ZDE4MWE4NzAzMjVcL2RkNXV5NXEtZGFmOTZhY2ItZmI5OS00OThkLWI1YWItMTgyYWIzZDI4OGYzLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2IKfAl5N7EqAUEt8_ptsSzpg3fNOUZ7Aejfk23HkmKo',
    'Grass Abstract',
    new Date(2018, 4, 5),
    'A cheerful abstract of grass protruding from a puddle.',
    ['abstract', 'nature']
  ),
  Photo(
    'http://fav.me/ddesa6z',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6279502f-0e0b-4c79-ae55-9d181a870325/ddesa6z-dda77311-fc2a-45ca-a11a-dafcdd214a8d.jpg/v1/fill/w_446,h_250,q_70,strp/_dsc4884_by_0delphi_ddesa6z-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MTkiLCJwYXRoIjoiXC9mXC82Mjc5NTAyZi0wZTBiLTRjNzktYWU1NS05ZDE4MWE4NzAzMjVcL2RkZXNhNnotZGRhNzczMTEtZmMyYS00NWNhLWExMWEtZGFmY2RkMjE0YThkLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.kbWMc4DuXU8YepEUXI456EqLY_EBkuz61CCPCUysgEI',
    'Lakeside',
    new Date(2019, 7, 24),
    'A pleasant view of Lake Ontario.',
    ['nature']
  )
];

const toggleSpan = span => {
  const navItems = document.querySelectorAll('nav > ul > li');
  navItems.forEach(navItem => navItem.querySelector('span').classList.remove('active'));
  span.classList.add('active');
};

const createSectionToggler = (span, section) => {
  return () => {
    toggleSpan(span);

    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => section.classList.add('hidden'));

    section.classList.remove('hidden');

    const cards = section.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('hidden'));
  };
};

const createTagToggler = (tag, span, section) => {
  return () => {
    toggleSpan(span);

    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => section.classList.add('hidden'));

    section.classList.remove('hidden');

    const cards = section.querySelectorAll('.card');
    cards.forEach(card => {
      if (card.classList.contains(tag)) card.classList.remove('hidden');
      else card.classList.add('hidden');
    });
  };
};

const refreshPage = () => {
  const sections = document.querySelectorAll('main > section');
  sections.forEach(section => section.classList.remove('hidden'));

  const navItems = document.querySelectorAll('nav > ul > li');
  navItems.forEach(navItem => navItem.querySelector('span').classList.remove('active'));
  const homeLi = navItems[0];
  const homeSpan = homeLi.querySelector('span');
  homeSpan.classList.add('active');

  for (let i = 0; i < 2; i++) {
    const cards = sections[i].querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('hidden'));
  }
};

window.onload = () => {
  const sections = document.querySelectorAll('main > section');
  const musicSection = sections[0];
  const photographySection = sections[1];
  const aboutSection = sections[2];

  const headerAs = document.querySelectorAll('header a');
  headerAs.forEach(headerA => headerA.addEventListener('click', refreshPage));

  const navItems = document.querySelectorAll('nav > ul > li');
  const homeLi = navItems[0];
  const homeSpan = homeLi.querySelector('span');
  homeSpan.classList.add('active');
  homeSpan.addEventListener('click', refreshPage);

  const musicLi = navItems[1];
  const musicSpan = musicLi.querySelector('span');
  musicSpan.addEventListener('click', createSectionToggler(musicSpan, musicSection));

  const musicUl = musicLi.querySelector('ul');

  const musicClassicalLi = musicUl.children[0];
  const musicClassicalSpan = musicClassicalLi.children[0];
  musicClassicalSpan.addEventListener(
    'click',
    createTagToggler('classical', musicSpan, musicSection)
  );

  const musicElectronicLi = musicUl.children[1];
  const musicElectronicSpan = musicElectronicLi.children[0];
  musicElectronicSpan.addEventListener(
    'click',
    createTagToggler('electronic', musicSpan, musicSection)
  );

  const photographyLi = navItems[2];
  const photographySpan = photographyLi.querySelector('span');
  photographySpan.addEventListener(
    'click',
    createSectionToggler(photographySpan, photographySection)
  );

  const photographyUl = photographyLi.querySelector('ul');

  const photographyAbstractLi = photographyUl.children[0];
  const photographyAbstractSpan = photographyAbstractLi.children[0];
  photographyAbstractSpan.addEventListener(
    'click',
    createTagToggler('abstract', photographySpan, photographySection)
  );

  const photographyNatureLi = photographyUl.children[1];
  const photographyNatureSpan = photographyNatureLi.children[0];
  photographyNatureSpan.addEventListener(
    'click',
    createTagToggler('nature', photographySpan, photographySection)
  );

  const aboutLi = navItems[3];
  const aboutSpan = aboutLi.querySelector('span');
  aboutSpan.addEventListener('click', createSectionToggler(aboutSpan, aboutSection));

  const musicSectionFlex = musicSection.getElementsByClassName('flex-section')[0];
  musicCollections.forEach(collection => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const link = document.createElement('a');
    link.setAttribute('href', collection.link);
    const image = document.createElement('img');
    image.classList.add('cover-art');
    image.setAttribute('src', collection.coverArt);
    image.setAttribute('alt', collection.title);
    link.appendChild(image);

    const blurb = document.createElement('section');
    blurb.classList.add('blurb');

    const meta = document.createElement('section');
    meta.classList.add('meta');
    const titleH3 = document.createElement('h3');
    titleH3.appendChild(document.createTextNode(collection.title));
    const releaseP = document.createElement('p');
    releaseP.appendChild(document.createTextNode(collection.release.toLocaleDateString('en-CA')));
    meta.append(titleH3, releaseP);

    const description = document.createElement('section');
    description.classList.add('description');
    const descriptionP = document.createElement('p');
    descriptionP.appendChild(document.createTextNode(collection.description));
    const priceA = document.createElement('a');
    priceA.setAttribute('href', collection.link);
    priceA.appendChild(document.createTextNode('Free to stream!'));
    description.append(descriptionP, priceA);

    const category = document.createElement('section');
    category.classList.add('category');
    collection.tags.forEach(tag => {
      const tagSpan = document.createElement('span');
      cardDiv.classList.add(tag);
      tagSpan.appendChild(document.createTextNode(tag));
      tagSpan.addEventListener('click', createTagToggler(tag, musicSpan, musicSection));
      category.appendChild(tagSpan);
    });

    blurb.append(meta, description, category);

    cardDiv.append(link, blurb);
    musicSectionFlex.appendChild(cardDiv);
  });

  const photographySectionFlex = photographySection.getElementsByClassName('flex-section')[0];
  photos.forEach(photo => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const link = document.createElement('a');
    link.setAttribute('href', photo.link);
    const image = document.createElement('img');
    image.classList.add('photo');
    image.setAttribute('src', photo.photo);
    image.setAttribute('alt', photo.title);
    link.appendChild(image);

    const blurb = document.createElement('section');
    blurb.classList.add('blurb');

    const meta = document.createElement('section');
    meta.classList.add('meta');
    const titleH3 = document.createElement('h3');
    titleH3.appendChild(document.createTextNode(photo.title));
    const dateP = document.createElement('p');
    dateP.appendChild(document.createTextNode(photo.date.toLocaleDateString('en-CA')));
    meta.append(titleH3, dateP);

    const description = document.createElement('section');
    description.classList.add('description');
    const descriptionP = document.createElement('p');
    descriptionP.appendChild(document.createTextNode(photo.description));
    const priceA = document.createElement('a');
    priceA.setAttribute('href', photo.link);
    priceA.appendChild(document.createTextNode('Buy from $4.79!'));
    description.append(descriptionP, priceA);

    const category = document.createElement('section');
    category.classList.add('category');
    photo.tags.forEach(tag => {
      const tagSpan = document.createElement('span');
      cardDiv.classList.add(tag);
      tagSpan.appendChild(document.createTextNode(tag));
      tagSpan.addEventListener('click', createTagToggler(tag, photographySpan, photographySection));
      category.appendChild(tagSpan);
    });

    blurb.append(meta, description, category);

    cardDiv.append(link, blurb);
    photographySectionFlex.appendChild(cardDiv);
  });
};
