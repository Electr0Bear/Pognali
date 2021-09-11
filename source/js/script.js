// Шапка

const navButton = document.querySelector('.page-header__menu-button');
const navButtonText = document.querySelectorAll('.page-header__menu-button-open, .page-header__menu-button-close');
const navMenu = document.querySelector('.page-header__navigation');
const navMenuElement = document.querySelectorAll('.page-header__nav-list, .page-header__auth-item, .page-header__socials-list');
const navLogo = document.querySelectorAll('.page-header__logo-regular, .page-header__logo-blue');

document.addEventListener('scroll', () => {
  if (window.pageYOffset > 40 && navMenu.classList.contains('page-header__navigation--closed') && !navMenu.classList.contains('page-header__navigation--scrolled')) {
    navMenu.classList.toggle('page-header__navigation--scrolled');
    navLogo[0].setAttribute('hidden', 'hidden');
    navLogo[1].removeAttribute('hidden', 'hidden');
    navMenuElement[0].classList.toggle('page-header__nav-list--scrolled');
  } else if (window.pageYOffset < 40 && navMenu.classList.contains('page-header__navigation--closed') && navMenu.classList.contains('page-header__navigation--scrolled')) {
    navMenu.classList.remove('page-header__navigation--scrolled');
    navLogo[1].setAttribute('hidden', 'hidden');
    navLogo[0].removeAttribute('hidden', 'hidden');
    navMenuElement[0].classList.remove('page-header__nav-list--scrolled');
  }
})

navButton.addEventListener('click', evt => {
  evt.preventDefault();
  if (!navButton.classList.contains('page-header__menu-button--opened')) {
    console.log('меню открывается');

    navMenu.classList.remove('page-header__navigation--closed');

    if (navLogo[0].getAttribute('hidden') === null && !navMenu.classList.contains('page-header__navigation--scrolled')) {
      console.log(navLogo[0].getAttribute('hidden'));
      console.log(navLogo[1].getAttribute('hidden'));

      navLogo[0].setAttribute('hidden', 'hidden');
      navLogo[1].removeAttribute('hidden', 'hidden');
    }

    navButton.classList.toggle('page-header__menu-button--opened');
    navButtonText[0].setAttribute('hidden', 'hidden');
    navButtonText[1].removeAttribute('hidden', 'hidden');

    navMenuElement.forEach(element => {
      // element.classList.remove('page-header__menu-element--closed');
      if (element.classList.contains('page-header__nav-list')) {
        element.classList.remove('page-header__nav-list--closed')
      }
      if (element.classList.contains('page-header__auth-item')) {
        element.classList.remove('page-header__auth-item--closed')
      }
      if (element.classList.contains('page-header__socials-list')) {
        element.classList.remove('page-header__socials-list--closed')
      }
    });
  } else {
    console.log('меню закрывается');

    navMenu.classList.toggle('page-header__navigation--closed');

    if (navLogo[1].getAttribute('hidden') === null && !navMenu.classList.contains('page-header__navigation--scrolled')) {
      console.log(navLogo[0].getAttribute('hidden'));
      console.log(navLogo[1].getAttribute('hidden'));

      navLogo[1].setAttribute('hidden', 'hidden');
      navLogo[0].removeAttribute('hidden', 'hidden');
    }

    navButton.classList.remove('page-header__menu-button--opened');
    navButtonText[1].setAttribute('hidden', 'hidden');
    navButtonText[0].removeAttribute('hidden', 'hidden');

    navMenuElement.forEach(element => {
      // element.classList.toggle('page-header__menu-element--closed');
      if (element.classList.contains('page-header__nav-list')) {
        element.classList.toggle('page-header__nav-list--closed')
      }
      if (element.classList.contains('page-header__auth-item')) {
        element.classList.toggle('page-header__auth-item--closed')
      }
      if (element.classList.contains('page-header__socials-list')) {
        element.classList.toggle('page-header__socials-list--closed')
      }
    });
  }
});

if (window.location.href.indexOf('/index.html') !== -1) {
  console.log('Главная');
  // Тарифы для бизнеса

  const businessRatesShowBtn = document.querySelector('.profile-rates__business-rates-link');
  const businessRatesCloseBtn = document.querySelector('.profile-rates__business-close-button');
  const businessRates = document.querySelector('.profile-rates__business-popup');


  businessRatesShowBtn.addEventListener('click', evt => {
    evt.preventDefault();
    if (!businessRates.classList.contains('profile-rates__business-popup--show')) {
      businessRates.classList.toggle('profile-rates__business-popup--show');
    }
  });

  businessRatesCloseBtn.addEventListener('click', evt => {
    evt.preventDefault();
    if (businessRates.classList.contains('profile-rates__business-popup--show')) {
      businessRates.classList.remove('profile-rates__business-popup--show');
    }
  });

  document.addEventListener('keyup', evt => {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      if (businessRates.classList.contains('profile-rates__business-popup--show')) {
        businessRates.classList.remove('profile-rates__business-popup--show');
      }
    }
  });
}

if (window.location.href.indexOf('/form.html') !== -1) {
  console.log('Направления');

  // Слайдер формы

  const planStep = document.querySelectorAll('.add-plan__step')
  const btnNext = document.querySelector('.add-plan__button-next-step');
  const btnPrev = document.querySelector('.add-plan__button-previous-step');
  const btnSubmit = document.querySelector('.add-plan__button-submit');
  const sliderBtns = document.querySelectorAll('.add-plan__slider-button');

  btnNext.addEventListener('click', evt => {
    evt.preventDefault();
    for (let i = 0; i < planStep.length; i++) {
      console.log(planStep[i]);
      if (planStep[i].classList.contains('add-plan__step--show')) {
        const j = i + 1;
        if (j < planStep.length) {
          planStep[i].classList.remove('add-plan__step--show');
          sliderBtns[i].classList.remove('add-plan__slider-button--active');
          planStep[j].classList.toggle('add-plan__step--show');
          sliderBtns[j].classList.toggle('add-plan__slider-button--active');
          if (!btnPrev.classList.contains('add-plan__button--show') && j > 0) {
            btnPrev.classList.toggle('add-plan__button--show');
          }
          if ((j + 1) === planStep.length) {
            btnSubmit.classList.toggle('add-plan__button--show');
            btnNext.classList.remove('add-plan__button--show');
          }
        }
        break
      }
    }
  });

  btnPrev.addEventListener('click', evt => {
    evt.preventDefault();
    for (let i = (planStep.length - 1); i >= 0; i--) {
      console.log(planStep[i]);
      if (planStep[i].classList.contains('add-plan__step--show')) {
        const j = i - 1;
        if (j >= 0) {
          planStep[i].classList.remove('add-plan__step--show');
          sliderBtns[i].classList.remove('add-plan__slider-button--active');
          planStep[j].classList.toggle('add-plan__step--show');
          sliderBtns[j].classList.toggle('add-plan__slider-button--active');
          if (btnSubmit.classList.contains('add-plan__button--show') && j < planStep.length) {
            btnSubmit.classList.remove('add-plan__button--show');
            btnNext.classList.toggle('add-plan__button--show');
          }
          if (j === 0) {
            btnPrev.classList.remove('add-plan__button--show');
          }
        }
        break
      }
    }
  });

  // Выпадающий список стран на странице формы

  const countryCurrentInput = document.querySelector('.step-two__countries-select-current');
  const countryInputDroplist = document.querySelector('.step-two__countries-droplist');

  countryCurrentInput.addEventListener('click', evt => {
    evt.preventDefault();
    if (!countryCurrentInput.classList.contains('step-two__countries-select-current--active')) {
      countryCurrentInput.classList.toggle('step-two__countries-select-current--active');
      countryInputDroplist.classList.toggle('step-two__countries-droplist--show');
    } else if (countryCurrentInput.classList.contains('step-two__countries-select-current--active')) {
      countryCurrentInput.classList.remove('step-two__countries-select-current--active');
      countryInputDroplist.classList.remove('step-two__countries-droplist--show');
    }
  });

  document.addEventListener('keyup', evt => {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      if (countryCurrentInput.classList.contains('step-two__countries-select-current--active')) {
        countryCurrentInput.classList.remove('step-two__countries-select-current--active');
        countryInputDroplist.classList.remove('step-two__countries-droplist--show');
      }
    }
  });


}
