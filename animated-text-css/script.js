const logoPaths = document.querySelectorAll("#logo path");
for (let i = 0; i < logoPaths.length; i++) {
  console.log(`Letter ${i} is in ${Math.ceil(logoPaths[i].getTotalLength())}`);
}
