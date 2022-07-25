<html>
  <head>
    <title>Online Contest Sample | Examinator</title>
    <link href="https://mathematicalcoder.github.io/examinator/style.css" rel="stylesheet" type="text/css" />
  	<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML"></script>
  </head>
  <body>
  <h1>Online Contest Sample</h1>
    <p>Welcome, <?php echo $_GET["fname"]; ?> <?php echo $_GET["lname"]; ?>, to the examination. The questions are presented below. Good luck!</p>
    <h2>Timer: <span id="timer">0:10<span></h2>

      <!-- custom js -->
      <script>
         window.onload = function () {
            var minute = 0;
            var sec = 10;
            setInterval(function () {
               document.getElementById("timer").innerHTML =
                  minute + " : " + sec;
               sec--;
               if (sec == -1) {
                  minute--;
                  sec = 59;
                  if (minute == -1) {
                     window.location.replace("submit.php");
                  }
               }
            }, 1000);
         };
      </script>
    <form action="submit.php">
    <label for="q1">\(1 + 1 = ?\)</label><br>
    <input type="number" id="p1" name="p1"><br>
    <label for="q2">\(2x + 5 = 15\), what is \(x\)?</label><br>
    <input type="number" id="p2" name="p2"> <br> <br>
    <input type="submit" value="Submit Exam >>">
    </form>
  </body>
</html>
