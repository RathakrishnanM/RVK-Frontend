const pages = [
  { name: "home", url: "/html/index" },
  { name: "about us", url: "/html/aboutpage" },
  { name: "blogs", url: "/html/blogpage" },
  { name: "contact us", url: "/html/contactpage" },
  { name: "graphics designs", url: "/html/graphics" },
  { name: "website development", url: "/html/website" },
  { name: "branding and identity development", url: "/html/branding" },
  { name: "ui/html/ux designs", url: "/html/uiux" },
  { name: "search engine optimization", url: "/html/seo" },
  { name: "social media marketing", url: "/html/socialmedia" },
  { name: "paid campaings", url: "/html/compainga" },
  { name: "promotions", url: "/html/promotions" },
  { name: "ad shoot", url: "/html/shoot" },
  { name: "video production", url: "/html/productions" },
];

document.getElementById("search").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const input = this.value.trim().toLowerCase();

    if (!input) return;

    const match = pages.find(page => page.name.toLowerCase() === input);

    if (match) {
      window.location.href = `${match.url}.html`;
    } else {
      window.location.href = 'pageNotFound.html';
    }
  }
});

document.getElementById("search1").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const input = this.value.trim().toLowerCase();

    if (!input) return;

    const match = pages.find(page => page.name.toLowerCase() === input);

    if (match) {
      window.location.href = `${match.url}.html`;
    } else {
      window.location.href = 'pageNotFound.html';
    }
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetUrl = this.href;

      // Skip external links
      const isInternal = targetUrl.startsWith(location.origin);
      if (!isInternal) return;

      // Skip empty or hash-only links (like href="#" or href="#section")
      const hrefAttr = this.getAttribute('href');
      if (!hrefAttr || hrefAttr === '#' || hrefAttr.startsWith('#')) return;

      // Show loader and navigate after delay
      e.preventDefault();
      document.getElementById('loader').classList.add('active');

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 1000);
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
    const serviceInput = document.getElementById('serviceSelector');
    const choicesWrapper = document.getElementById('choicesWrapper');

    serviceInput.addEventListener('click', function () {
        choicesWrapper.style.display = choicesWrapper.style.display === 'none' ? 'block' : 'none';
    });

    // Optional: Hide when clicking outside
    document.addEventListener('click', function (e) {
        if (!document.querySelector('.service-select-container').contains(e.target)) {
            choicesWrapper.style.display = 'none';
        }
    });
});


const popUp = document.getElementById('pop-up');
const form = document.getElementById('form-handler');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const city = document.getElementById('city').value;
  const message = document.getElementById('message').value;

  const services = Array.from(document.querySelectorAll('input[name="services"]:checked'))
    .map(cb => cb.value);

  const payload = { name, mobile, services, city, message };
  console.log('Sending payload:', payload);

  try {
    const response = await fetch('http://192.168.0.61:3000/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (result.success) {
      popUp.style.display = 'flex';
    } else {
      alert('Submission failed!');
    }
  } catch (err) {
    console.error('Fetch error:', err);
    alert('Something went wrong.');
  }

  setTimeout(() => {
    popUp.style.display = 'none';
    window.location.href = '/index.html';
  }, 1300);
});