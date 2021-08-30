const slides = document.querySelectorAll(".slider-image-block"),
      prev = document.querySelector(".arrow_left"),
      next = document.querySelector(".arrow_right");
      slidesTitle = document.querySelectorAll(".project_title-item");
      sliderDescr = document.querySelectorAll(".slider_details");

      mobilePrev = document.querySelector(".mobile_arrow-left");
      mobileNext = document.querySelector(".mobile_arrow-right");
      

      dots = document.querySelectorAll(".dot_item");



      let slideIndex = 1;
      showSlides(slideIndex = 1);

     
      
function showSlides(n) {
          if(n > slides.length) {
              slideIndex = 1;
          }

          if(n < 1 ) {
              slideIndex = slides.length;
          }


          slides.forEach(item => item.style.display = "none");
          slides[slideIndex - 1].style.display = "block";

          slidesTitle.forEach(changeTitle);
          function changeTitle(item) {
              item.classList.add("project_title-item");
              item.classList.remove("project_title-itemActive");
            }
          slidesTitle[slideIndex - 1].classList.add("project_title-itemActive");

          sliderDescr.forEach(item => item.style.display = "none");
          sliderDescr[slideIndex - 1].style.display = "flex";



          dots.forEach(changeDots);
          function changeDots(item) {
              item.classList.add("dot_item");
              item.classList.remove("dot-active");
            }
          dots[slideIndex - 1].classList.add("dot-active");
          
          dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');
                slideIndex = slideTo;
                showSlides();
            
            });
        });
        
        slidesTitle.forEach(title => {
            title.addEventListener('click', (e) => {
                const titleTo = e.target.getAttribute('data-title-to');
                slideIndex = titleTo;
                showSlides();
            });
        });

          };

     

 
    
        //function plusSlides(n) {
         //   showSlides(slideIndex +=n);
        //    console.log(n);
        //prev.addEventListener("click", () => {
        //    plusSlides(-1);

        //});

        //next.addEventListener("click", () => {
            //plusSlides(+1);
        //});

        prev.addEventListener('click', () => {
            
    
            if (slideIndex == 1) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            }
    
            showSlides();
        });
    
       
    next.addEventListener('click', () => {
        
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
            showSlides();
    });

    mobilePrev.addEventListener('click', () => {
            
    
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        showSlides();
    });

    mobileNext.addEventListener('click', () => {
            
    
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        showSlides();
    });


