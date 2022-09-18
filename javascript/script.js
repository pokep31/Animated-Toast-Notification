// getting all attributes
const button = document.querySelector("button"),
      toast = document.querySelector(".toast"),
      closeIcon = document.querySelector(".close"),
      progress = document.querySelector(".progress");

      button.addEventListener("click", () =>{
        toast.classList.add("active");
        progress.classList.add("active");
        // para que el toast se retire automáticamente a los 5 segundos
        setTimeout(() =>{
          toast.classList.remove("active");
        }, 5000); // 1s = 1000 miliseconds

        setTimeout(() =>{
          progress.classList.remove("active");
        }, 5500);
      });

      closeIcon.addEventListener("click", () =>{
        toast.classList.remove("active");
        // para que el toast se retire automáticamente a los 5 segundos
        setTimeout(() =>{
          progress.classList.remove("active");
        }, 300);
      });