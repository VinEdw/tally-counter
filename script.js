const counter = document.querySelector(".counter");
const inc = document.querySelector(".increment");
const dec = document.querySelector(".decrement");

function get_count() {
  const text = counter.textContent;
  const count = parseInt(text, 10);
  return count;
}

function set_count(val) {
  val = parseInt(val)
  val = Number.isInteger(val) ? val : get_count();
  counter.textContent = val;
}

inc.addEventListener("click", () => {
  set_count(get_count() + 1);
});
dec.addEventListener("click", () => {
  set_count(get_count() - 1);
});
counter.addEventListener("dblclick", () => {
  const val = prompt("Set counter value (int)");
  set_count(val);
});
