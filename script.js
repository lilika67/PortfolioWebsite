<script>
        var tablinks = document.getElementsByClassName('tab-links');
        var tabcontents = document.getElementsByClassName('tab-contents');

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
    </script>

    <script>
        var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = '0';
        }

        function closemenu(){
            sidemenu.style.right = '-200px';
        }
    </script>

    <!-- form -->

    <script>
        // Initialize EmailJS with your user ID
        emailjs.init("KHsegh3YmxHitdn0N");
  
        function sendMail() {
          let params = {
            sendername: document.querySelector("#Name").value,
            to: document.querySelector("#Email").value,
            replyto: document.querySelector("#replyto").value,
            message: document.querySelector("#Message").value,
          };
          let serviceID = "service_xwbyyam";
          let templateID = "template_drfoba4";
  
          // Send the email
          emailjs
            .send(serviceID, templateID, params)
            .then((response) => {
              alert("Email sent successfully");
            })
            .catch((error) => {
              console.log("Error sending email:", error);
              alert("An error occurred while sending the email");
            });
        }
      </script>



      <!-- sticky -->
      <!-- <script>
        let prevScrollPos = window.pageYOffset;
        window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-60px"; // Adjust the height as needed
        }
        prevScrollPos = currentScrollPos;
        };

      </script> -->
      <script>
      window.addEventListener('scroll', function () {
        var stickyNav = document.getElementById("stickyNav");
        var header = document.getElementById("header");
        var headerHeight = header.offsetHeight;
    
        if (window.pageYOffset >= headerHeight) {
            stickyNav.classList.add("sticky");
        } else {
            stickyNav.classList.remove("sticky");
        }
    });
    </script>
    


</body>
</html>
          
          
  