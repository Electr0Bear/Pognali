// Шапка

const navButton = document.querySelector('.page-header__menu-button');
const navButtonText = document.querySelectorAll('.page-header__menu-button-open, .page-header__menu-button-close');
const navMenu = document.querySelector('.page-header__navigation');
const navMenuElement = document.querySelectorAll('.page-header__nav-list, .page-header__auth-item, .page-header__socials-list');
const navLogo = document.querySelectorAll('.page-header__logo-regular, .page-header__logo-blue');

if (navMenu.classList.contains('page-header__navigation--preopened')) {
  navButton.classList.remove('page-header__menu-button--opened');
  navButtonText[1].setAttribute('hidden', 'hidden');
  navButtonText[0].removeAttribute('hidden', 'hidden');

  navMenuElement.forEach(element => {
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

  navLogo[1].setAttribute('hidden', 'hidden');
  navLogo[0].removeAttribute('hidden', 'hidden');

  navMenu.classList.remove('page-header__navigation--preopened');
}

document.addEventListener('scroll', () => {
  if (window.pageYOffset > 60 && !navMenu.classList.contains('page-header__navigation--opened') && !navMenu.classList.contains('page-header__navigation--scrolled')) {
    navMenu.classList.toggle('page-header__navigation--scrolled');
    navLogo[0].setAttribute('hidden', 'hidden');
    navLogo[1].removeAttribute('hidden', 'hidden');
    navMenuElement[0].classList.toggle('page-header__nav-list--scrolled');
  } else if (window.pageYOffset < 30 && !navMenu.classList.contains('page-header__navigation--opened') && navMenu.classList.contains('page-header__navigation--scrolled')) {
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

    navMenu.classList.toggle('page-header__navigation--opened');

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

    navMenu.classList.remove('page-header__navigation--opened');

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
  const sliderBtns = document.querySelectorAll('.add-plan__slider-buttons-item');

  btnNext.addEventListener('click', evt => {
    evt.preventDefault();
    for (let i = 0; i < planStep.length; i++) {
      if (planStep[i].classList.contains('add-plan__step--show')) {
        const j = i + 1;
        if (j < planStep.length) {
          planStep[i].classList.remove('add-plan__step--show');
          sliderBtns[i].classList.remove('add-plan__slider-buttons-item--active');
          planStep[j].classList.toggle('add-plan__step--show');
          sliderBtns[j].classList.toggle('add-plan__slider-buttons-item--active');
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
      if (planStep[i].classList.contains('add-plan__step--show')) {
        const j = i - 1;
        if (j >= 0) {
          planStep[i].classList.remove('add-plan__step--show');
          sliderBtns[i].classList.remove('add-plan__slider-buttons-item--active');
          planStep[j].classList.toggle('add-plan__step--show');
          sliderBtns[j].classList.toggle('add-plan__slider-buttons-item--active');
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


  // Сообщение об ошибке в пустой форме

  const textAreas = document.querySelectorAll('.extra-info__input-field');
  const submitBtn = document.querySelector('.add-plan__button-submit');
  const form = document.querySelector('.form');

  textAreas.forEach(element => {
    element.addEventListener('focusout', evt => {
      evt.preventDefault();

      if (element.value === "" && !element.classList.contains('extra-info__input-field--error')) {
        element.classList.remove('extra-info__input-field--active');
        element.classList.toggle('extra-info__input-field--error');
        element.parentElement.classList.toggle('extra-info__input-field-wrapper--error');
      } else if (element.value !== "" && !element.classList.contains('extra-info__input-field--active')) {
        element.classList.remove('extra-info__input-field--error');
        element.classList.toggle('extra-info__input-field--active');
        element.parentElement.classList.remove('extra-info__input-field-wrapper--error');
      }
    })

    element.addEventListener('input', evt => {
      evt.preventDefault();
      if (element.value !== "") {
        element.classList.remove('extra-info__input-field--error');
        element.parentElement.classList.remove('extra-info__input-field-wrapper--error');
      }
    })

    if (element.value !== "") {
      element.classList.toggle('extra-info__input-field--active');
    }
  })

  submitBtn.addEventListener('click', evt => {
    evt.preventDefault();

    const textAreasArray = Array.from(textAreas);
    const checkValidity = textAreasArray.every(element => {
      return element.checkValidity()
    });

    if (!checkValidity) {
      const invalidInputs = textAreasArray.filter(element => {
        return !element.checkValidity();
      });
      const validInputs = textAreasArray.filter(element => {
        return element.checkValidity();
      });

      invalidInputs.forEach(element => {
        if (!element.classList.contains('extra-info__input-field--error')) {
          element.classList.toggle('extra-info__input-field--error');
          element.parentElement.classList.toggle('extra-info__input-field-wrapper--error');
        }
      })

      validInputs.forEach(element => {
        if (element.classList.contains('extra-info__input-field--error')) {
          element.classList.remove('extra-info__input-field--error');
          element.parentElement.classList.remove('extra-info__input-field-wrapper--error');
        }
      })

    } else {
      textAreas.forEach(element => {
        if (element.classList.contains('extra-info__input-field--error')) {
          element.classList.remove('extra-info__input-field--error');
          element.parentElement.classList.remove('extra-info__input-field-wrapper--error');
        }
      })
      form.submit();
    }
  })


}

if (window.location.href.indexOf('/catalog.html') !== -1) {
  console.log('Попутчики');

  // Выпадающий список со странами
  const btnTop = document.querySelector('.country-filter__button-top');
  const btnTopText = document.querySelectorAll('.country-filter__button-top-text');
  const btnBottom = document.querySelector('.country-filter__close-btn-bottom')
  const countryFilterDroplist = document.querySelectorAll('.country-filter__continents-list, .country-filter__alphabet-list-wrapper');
  const pageMainHeader = document.querySelector('.page-main__header-wrapper');
  const countryFilterWrapper = document.querySelector('.country-filter__wrapper');

  btnTop.addEventListener('click', evt => {
    evt.preventDefault();
    if (!btnTop.classList.contains('country-filter__button-top--opened')) {
      btnTop.classList.toggle('country-filter__button-top--opened');
      btnTop.classList.toggle('country-filter__button-top--hide');
      pageMainHeader.classList.toggle('page-main__header-wrapper--opened-menu');
      countryFilterWrapper.classList.toggle('country-filter__wrapper--opened');
      btnTopText[0].classList.remove('country-filter__button-top-text--showed');
      btnTopText[1].classList.toggle('country-filter__button-top-text--showed');
      countryFilterDroplist[0].classList.toggle('country-filter__continents-list--show');
      countryFilterDroplist[1].classList.toggle('country-filter__alphabet-list-wrapper--show');
      btnBottom.classList.toggle('country-filter__close-btn-bottom--show');

    } else {
      btnTop.classList.remove('country-filter__button-top--opened');
      btnTop.classList.remove('country-filter__button-top--hide');
      pageMainHeader.classList.remove('page-main__header-wrapper--opened-menu');
      countryFilterWrapper.classList.remove('country-filter__wrapper--opened');
      btnTopText[0].classList.toggle('country-filter__button-top-text--showed');
      btnTopText[1].classList.remove('country-filter__button-top-text--showed');
      countryFilterDroplist[0].classList.remove('country-filter__continents-list--show');
      countryFilterDroplist[1].classList.remove('country-filter__alphabet-list-wrapper--show');
      btnBottom.classList.remove('country-filter__close-btn-bottom--show');
    }
  });

  btnBottom.addEventListener('click', evt => {
    evt.preventDefault();

    if (btnBottom.classList.contains('country-filter__close-btn-bottom--show')) {
      btnTop.classList.remove('country-filter__button-top--opened');
      btnTop.classList.remove('country-filter__button-top--hide');
      pageMainHeader.classList.remove('page-main__header-wrapper--opened-menu');
      countryFilterWrapper.classList.remove('country-filter__wrapper--opened');
      btnTopText[0].classList.toggle('country-filter__button-top-text--showed');
      btnTopText[1].classList.remove('country-filter__button-top-text--showed');
      countryFilterDroplist[0].classList.remove('country-filter__continents-list--show');
      countryFilterDroplist[1].classList.remove('country-filter__alphabet-list-wrapper--show');
      btnBottom.classList.remove('country-filter__close-btn-bottom--show');
    }
  });

  document.addEventListener('keyup', evt => {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      if (btnTop.classList.contains('country-filter__button-top--opened')) {
        btnTop.classList.remove('country-filter__button-top--opened');
        btnTop.classList.remove('country-filter__button-top--hide');
        pageMainHeader.classList.remove('page-main__header-wrapper--opened-menu');
        countryFilterWrapper.classList.remove('country-filter__wrapper--opened');
        btnTopText[0].classList.toggle('country-filter__button-top-text--showed');
        btnTopText[1].classList.remove('country-filter__button-top-text--showed');
        countryFilterDroplist[0].classList.remove('country-filter__continents-list--show');
        countryFilterDroplist[1].classList.remove('country-filter__alphabet-list-wrapper--show');
        btnBottom.classList.remove('country-filter__close-btn-bottom--show');
      }
    }
  });

  // Фильтр попутчиков - открытие-скрытие секций фильтра
  const filterSection = document.querySelectorAll('.companion-filter__filter-list');
  const filterLabel = document.querySelectorAll('.companion-filter__section-label');

  for (let i = 0; i < (filterSection.length - 1); i++) {
    if (!filterSection[i].classList.contains('companion-filter__filter-list--closed') && !filterLabel[i].classList.contains('companion-filter__section-label--closed')) {
      filterSection[i].classList.toggle('companion-filter__filter-list--closed');
      filterLabel[i].classList.toggle('companion-filter__section-label--closed');
    }
  }

  for (let i = 0; i < filterSection.length; i++) {
    filterLabel[i].addEventListener('click', evt => {
      evt.preventDefault();
      if (!filterLabel[i].classList.contains('companion-filter__section-label--closed') && !filterSection[i].classList.contains('companion-filter__filter-list--closed')) {

        filterLabel[i].classList.toggle('companion-filter__section-label--closed');
        filterSection[i].classList.toggle('companion-filter__filter-list--closed');

      } else {

        filterLabel[i].classList.remove('companion-filter__section-label--closed');
        filterSection[i].classList.remove('companion-filter__filter-list--closed');

      }
    });
  }
}
