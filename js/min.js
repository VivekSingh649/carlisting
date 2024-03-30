// ========================
//     DATA BACKGROUND 
// ========================
document.querySelectorAll('[data-background]').forEach(function (element) {
  var backgroundValue = element.getAttribute('data-background');

  if (backgroundValue.includes('url(')) {
      element.style.background = backgroundValue;
      element.style.backgroundPosition = 'center center';
      element.style.backgroundSize = 'cover';
      element.style.backgroundRepeat = 'no-repeat';
  } else {
      element.style.backgroundColor = backgroundValue;
  }
});

// ============================
//   // HOME PAGE BANNER SLIDER
// ============================
var mySwiper = new Swiper('.hero-banners', {
  loop: true,
  speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

// ============================
//  CAR LISTING SLIDER 
// ============================
var swiper = new Swiper('.carlist-slider', {
  breakpoints: {
    480: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024:{
        slidesPerView: 3.5,
    }
},
  spaceBetween: 25,
  loop: true,
  // autoplay: {
  //   delay: 2000, // milliseconds
  // },
  // speed: 800,
  navigation: {
    nextEl: '.car-arrows .arrow-right',
    prevEl:'.car-arrows .arrow-left',
  },
});

// FILTER CARS 
const filterButtons = document.querySelectorAll('.filter-button');
const productItems = document.querySelectorAll('.car-model-wrapper');

const filterItems = filter => {
    productItems.forEach(item => {
        const itemCategories = item.getAttribute('data-car');
        item.style.display = (filter === 'all' || itemCategories.includes(filter)) ? 'block' : 'none';
        item.classList.add('blink');
        setTimeout(() => item.classList.remove('blink'), 500);
    });
};

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        filterItems(this.getAttribute('data-filter'));
    });
});

// ============================
//  CAR LISTING SLIDER 
// ============================
var swiper = new Swiper('.testimonial-slider', {
  breakpoints: {
    480: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024:{
        slidesPerView: 3.5,
    }
},
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 800,
  navigation: {
    nextEl: '.car-arrows .arrow-right',
    prevEl:'.car-arrows .arrow-left',
  },
});

// ====================================
// SINGLE CAR PREVIEW 
// ====================================
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 5,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  autoplay: {
    delay: 2000, // milliseconds
  },
  speed: 700,
  loop: true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: '.car-arrows .arrow-right',
    prevEl: '.car-arrows .arrow-left',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

// ================================
// EMI CALCULATOR 
// ================================
// Add this at the beginning of the script.js file
document.addEventListener("DOMContentLoaded", function () {
  initializeRangeValues();
});

function initializeRangeValues() {
  updateRangeValue('loanAmountRange', 'loanAmount');
  updateRangeValue('loanTermRange', 'loanTerm');
  updateRangeValue('interestRateRange', 'interestRate');
}

function calculateEMI() {
  const loanAmount = parseFloat(document.getElementById('loanAmount').value);
  const loanTerm = parseFloat(document.getElementById('loanTerm').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value);

  const monthlyInterestRate = (interestRate / 100) / 12;
  const numberOfPayments = loanTerm;

  const numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfPayments);
  const denominator = Math.pow((1 + monthlyInterestRate), numberOfPayments) - 1;

  const emi = loanAmount * (numerator / denominator);
  const totalAmount = emi * numberOfPayments;
  const totalInterest = totalAmount - loanAmount;

  displayResults(emi, loanAmount, totalInterest, totalAmount);
}

function displayResults(emi, principalAmount, totalInterest, totalAmount) {
  document.getElementById('monthlyEMI').innerText = '₹' + emi.toFixed(2);
  document.getElementById('principalAmount').innerText = '₹' + principalAmount.toFixed(2);
  document.getElementById('totalInterest').innerText = '₹' + totalInterest.toFixed(2);
  document.getElementById('totalAmount').innerText = '₹' + totalAmount.toFixed(2);
}

function updateRangeValue(rangeId, inputId) {
  const range = document.getElementById(rangeId);
  const input = document.getElementById(inputId);
  const rangeValue = document.getElementById(`${inputId}RangeValue`);

  input.value = range.value;
  rangeValue.innerText = (inputId === 'loanAmount') ? `₹${Number(range.value).toLocaleString()}` : range.value;
}


// Get the navbar element
var navbar = document.querySelector('.navbar');

// Function to add the "fixed" class after scrolling 120px
function handleScroll() {
  if (window.pageYOffset >= 120) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
}

// Add a scroll event listener to call the handleScroll function
window.addEventListener('scroll', handleScroll);