var productDetailGroupChoiceButton = document.getElementsByClassName(".product-detail__group__choice__button");

      function handleClick(event) {
        console.log(event.target);
        // console.log(this);
        // 콘솔창을 보면 둘다 동일한 값이 나온다

        console.log(event.target.classList);

        if (event.target.classList[1] === "clicked") {
          event.target.classList.remove("clicked");
        } else {
          for (var i = 0; i < productDetailGroupChoiceButton.length; i++) {
            productDetailGroupChoiceButton[i].classList.remove("clicked");
          }

          event.target.classList.add("clicked");
        }
      }

      function init() {
        for (var i = 0; i < productDetailGroupChoiceButton.length; i++) {
          productDetailGroupChoiceButton[i].addEventListener("click", handleClick);
        }
      }

      init();