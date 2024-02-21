// TOGGLE FOR MEDIA BUTTON
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('.toggle-btn');
    const navContainer = document.querySelector('.nav-container');

    // Function to handle toggling the menu
    function toggleMenu() {
        navContainer.classList.toggle('active');
    }

    // Event listener for the toggle button
    toggleButton.addEventListener('click', toggleMenu);

    // Close the navigation menu when a menu item is clicked
    const navItems = document.querySelectorAll('.nav-container ul li');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navContainer.classList.remove('active');
        });
    });

    // Event listener for window resize
    window.addEventListener('resize', function () {
        // Check the screen width, for example, you can use 768 pixels as the threshold
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // If the screen width is greater than or equal to 768 pixels, ensure the menu is open
        if (screenWidth >= 768) {
            navContainer.classList.add('active');
        } else {
            // If the screen width is less than 768 pixels, close the menu
            navContainer.classList.remove('active');
        }
    });
});


// This is the script for the login/register ========================================================

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});


// This is the script for the categories buttons scroll ==========================================================

function scrollToPastriesDiv() {
    if (window.innerWidth <= 773) {
        // Code for smaller screens
        window.scrollTo(0, 2190);
    } else {
        // Default code for larger screens
        window.scrollTo(0, 895);
    }
}

function scrollToCakesDiv() {
    if (window.innerWidth <= 768) {
        // Code for smaller screens
        window.scrollTo(0, 4115);
    } else {
        // Default code for larger screens
        window.scrollTo(0, 1685);
    }
}

function scrollToCookiesDiv() {
    if (window.innerWidth <= 768) {
        // Code for smaller screens
        window.scrollTo(0, 6035);
    } else {
        // Default code for larger screens
        window.scrollTo(0, 2470);
    }
}

function scrollToDrinksDiv() {
    if (window.innerWidth <= 768) {
        // Code for smaller screens
        window.scrollTo(0, 7955);
    } else {
        // Default code for larger screens
        window.scrollTo(0, 3260);
    }
}



// This is the script for the recipes show more buttons====================================================

// PASTRIES ===============================================

// CINNAMON ROLL
function showCR() {
    document.getElementById('cr-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideCR() {
    document.getElementById('cr-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}

//BEEHIVE
function showBH() {
    document.getElementById('bh-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideBH() {
    document.getElementById('bh-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}

//BREAD
function showBD() {
    document.getElementById('bd-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideBD() {
    document.getElementById('bd-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}

// CROSSIANT
function showCT() {
    document.getElementById('ct-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideCT() {
    document.getElementById('ct-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}

// CAKES ================================================

// VANILLA CAKE
function showVC() {
    document.getElementById('vc-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideVC() {
    document.getElementById('vc-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}

// CHOCLATE CAKE
function showCC() {
    document.getElementById('cc-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideCC() {
    document.getElementById('cc-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}

// CHEESECAKE
function showCH() {
    document.getElementById('ch-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideCH() {
    document.getElementById('ch-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}

// RED VALVET CAKE
function showRD() {
    document.getElementById('rd-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideRD() {
    document.getElementById('rd-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}

//COOKIES =================================================

//CHOCLATE CHIP COOKIES

function showCCC() {
    document.getElementById('ccc-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideCCC() {
    document.getElementById('ccc-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}

//BROWNIE COOKIES
function showBC() {

    document.getElementById('bc-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideBC() {
    document.getElementById('bc-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}

//SMORES COOKIES
function showSC() {
    document.getElementById('sc-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideSC() {
    document.getElementById('sc-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}

// LINZER COOKIES
function showLZ() {
    document.getElementById('lz-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideLZ() {
    document.getElementById('lz-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}


//DRINKS ===============


// VANILLA MILKSHAKE
function showVM() {
    document.getElementById('vm-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideVM() {
    document.getElementById('vm-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}

//SALTED CAREML MILKSHAKES
function showSM() {
    document.getElementById('sm-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideSM() {
    document.getElementById('sm-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}

//STRAWBERRY CHEESCAKE MILKESHAKE
function showSTR() {
    document.getElementById('str-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideSTR() {
    document.getElementById('str-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}

// ICED COFFE MILKSHAKE
function showIM() {
    document.getElementById('im-recipe').style.display="block"
    document.getElementById('show').style.display="none"
}

function hideIM() {
    document.getElementById('im-recipe').style.display="none"
    document.getElementById('show').style.display="inline"

}

// SHARE PHOTOS BUTTON TO be REDIRECTED TOT HE LOGIN
function redirectToLogin() {
    // Get the current URL and encode it
    var currentUrl = encodeURIComponent(window.location.href);
    // Redirect to the login page with the 'next' parameter
    var loginUrl = "/?next=" + currentUrl;

    window.location.href = loginUrl;
}