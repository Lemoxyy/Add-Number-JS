const answer = (document.getElementById("submit").onclick = function () {
  let ans;

  if (document.getElementById("1btn").checked) {
    ans = document.getElementById("textbox").value;
    ans = Number(ans);
    ans = tod(ans);
    document.getElementById("ans").innerHTML = ans;
  } else if (document.getElementById("2btn").checked) {
    ans = document.getElementById("textbox").value;
    ans = Number(ans);
    ans = todd(ans);
    document.getElementById("ans").innerHTML = ans;
  } else {
    document.getElementById("ans").innerHTML = "Choose one Option";
  }
});

function tod(ans) {
  return ans + 1;
}
function todd(ans) {
  return ans + 2;
}
