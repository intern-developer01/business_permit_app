document.addEventListener("DOMContentLoaded", function () {
    var current_fs, next_fs, previous_fs;
    var current = 1;
    var steps = document.querySelectorAll("fieldset").length;

    setProgressBar(current);

    document.querySelectorAll(".next").forEach(function (element) {
      element.addEventListener("click", function () {
        current_fs = this.parentElement;
        next_fs = this.parentElement.nextElementSibling;

        document.querySelectorAll("#progressbar li")[Array.from(document.querySelectorAll("fieldset")).indexOf(next_fs)].classList.add("active");

        next_fs.style.display = "block";

        current_fs.style.display = "none";
        current_fs.style.position = "relative";
        next_fs.style.opacity = 1;

        setProgressBar(++current);
      });
    });

    document.querySelectorAll(".previous").forEach(function (element) {
      element.addEventListener("click", function () {
        current_fs = this.parentElement;
        previous_fs = this.parentElement.previousElementSibling;

        document.querySelectorAll("#progressbar li")[Array.from(document.querySelectorAll("fieldset")).indexOf(current_fs)].classList.remove("active");

        previous_fs.style.display = "block";

        current_fs.style.display = "none";
        current_fs.style.position = "relative";
        previous_fs.style.opacity = 1;

        setProgressBar(--current);
      });
    });

    function setProgressBar(curStep) {
      var percent = (100 / steps) * curStep;
      percent = percent.toFixed();
      document.querySelector(".progress-bar").style.width = percent + "%";
    }

    document.querySelectorAll(".submit").forEach(function (element) {
      element.addEventListener("click", function () {
        return false;
      });
    });
  });