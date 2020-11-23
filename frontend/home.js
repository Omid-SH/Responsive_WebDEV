/* In this part we will set all buttons listeners and animations */

function setGallery(showData) {
    var homeBigDataButton = document.getElementById("home_big_data_button");
    var homeBigHomeButton = document.getElementById("home_big_home_button");
    var homeSmallDataButton = document.getElementById("home_small_data_button");
    var homeSmallHomeButton = document.getElementById("home_small_home_button");

    var homeBigGallery = document.getElementById("home_big_gallery");
    var homeSmallGallery = document.getElementById("home_small_gallery");
    var homeBigTable = document.getElementById("home_big_table");
    var homeSmallTable = document.getElementById("home_small_table");
 
    if(showData==1) {
        homeBigDataButton.style.borderBottom = "5px solid var(--color_dark)";
        homeSmallDataButton.style.borderBottom = "5px solid var(--color_dark)";
        homeBigHomeButton.style.borderBottom = "5px solid var(--color_light)"; 
        homeSmallHomeButton.style.borderBottom = "5px solid var(--color_light)";
        
        homeBigGallery.style.display = "none";
        homeSmallGallery.style.display = "none";
        homeBigTable.style.display = "block";
        homeSmallTable.style.display = "block";
        return;  
    }

    homeBigDataButton.style.borderBottom = "5px solid var(--color_light)";
    homeSmallDataButton.style.borderBottom = "5px solid var(--color_light)"; 
    homeBigHomeButton.style.borderBottom = "5px solid var(--color_dark)"; 
    homeSmallHomeButton.style.borderBottom = "5px solid var(--color_dark)"; 

    homeBigGallery.style.display = "block";
    homeSmallGallery.style.display = "block";
    homeBigTable.style.display = "none";
    homeSmallTable.style.display = "none";
}

function showNavbarSmall(show) {
    var homeSmallSideNavbar = document.getElementById("home_small_side_navbar");
    var homeSmallCollapseButton = document.getElementById("home_small_collapse_button");
    var homeSmallCollapseButtonCross = document.getElementById("home_small_collapse_button_cross");

    if(show == 1) {
        homeSmallCollapseButton.style.display = 'none'
        homeSmallCollapseButtonCross.style.display = 'block'
        homeSmallSideNavbar.style.animation = "fadeInRigth 1s infinite";
        homeSmallSideNavbar.style.animationIterationCount = "1";
        homeSmallSideNavbar.style.display = "block";

        return;  
    }

    homeSmallCollapseButton.style.display = 'block'
    homeSmallCollapseButtonCross.style.display = 'none'
    homeSmallSideNavbar.style.animation = "fadeOutLeft 0.7s infinite";
    homeSmallSideNavbar.style.animationIterationCount = "1";
    homeSmallSideNavbar.style.animationFillMode = "forwards";

}

function nightMode(checkbox) {

    if(checkbox.checked == true) {
        document.documentElement.style.setProperty('--color_light', '#662020');
        document.documentElement.style.setProperty('--color_dark', 'brown');
        document.documentElement.style.setProperty('--white_space', 'black');
        document.documentElement.style.setProperty('--black_space', 'white');

        document.getElementById("nigth_mode_sw1").setAttribute('checked', "true"); 
        document.getElementById("nigth_mode_sw2").setAttribute('checked', "true");

        return;
    }

    document.documentElement.style.setProperty('--color_light', 'lightblue');
    document.documentElement.style.setProperty('--color_dark', 'rebeccapurple');
    document.documentElement.style.setProperty('--white_space', 'white');
    document.documentElement.style.setProperty('--black_space', 'black');

    document.getElementById("nigth_mode_sw1").removeAttribute("checked");
    document.getElementById("nigth_mode_sw2").removeAttribute("checked");
}
