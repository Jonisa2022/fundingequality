<button onclick="myFunction()">Submit</button>

<p id="demo"></p>
`1`
<script>
function myFunction() {
  var txt;
  if (confirm("Thank You!")) {
    txt = "Thank you!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}
</script>