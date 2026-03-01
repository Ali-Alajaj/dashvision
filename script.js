const cardsData = {
  totalUsers: 3546,
  totalOrders: 233,
  revenueCents: 962175,
  conversionRate: 657
};

function animateCount() {
  const duration = 2000; // Total animation time in milliseconds (2 seconds)
  const frameRate = 1000 / 60; // 60 frames per second
  const totalFrames = Math.round(duration / frameRate);

  const elements = document.querySelectorAll('.js-card-data');

  elements.forEach((el) => {
    const dataType = el.dataset.dataType;
    const finalValue = cardsData[dataType];
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      
      // Calculate the progress (0 to 1)
      const progress = frame / totalFrames;
      // Use an "ease-out" effect so it slows down at the end
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = finalValue * easeOutProgress;

      // Format the number based on the type
      el.innerHTML = formatDisplayValue(currentValue, dataType);

      if (frame === totalFrames) {
        clearInterval(interval);
      }
    }, frameRate);
  });
}

function formatDisplayValue(value, type) {
  if (type === 'revenueCents') {
    // Convert cents to dollars and format as currency
    return `$${(value / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  } else if (type === 'conversionRate') {
    // Format as percentage
    return `${(value / 100).toFixed(2)}%`;
  } else {
    // Format as whole numbers for Users and Orders
    return Math.floor(value).toLocaleString();
  }
}

// Run the animation when the window finishes loading
window.addEventListener('load', animateCount);

let mobileNavIsShowing = false
const mobileNav = document.querySelector('nav');

document.querySelector('.js-hamburger-menu')
  .addEventListener('click', () => {
    if (mobileNavIsShowing) {
      mobileNavIsShowing = false;
      mobileNav.classList.remove('show-mobile-nav');
    } else {
      mobileNavIsShowing = true;
      mobileNav.classList.add('show-mobile-nav');
    }
    
  });