function showInput() {
  let input = document.getElementById("input").value;
  if (input.length === 0) {
    alert("Mohon Isi Nama Anda!");
    document.getElementById("tgl").value = "";
    return false;
  }
  let today = new Date();
  let dt = document.getElementById("tgl").value;
  if (dt === "" || dt === null) {
    alert("Mohon Masukkan Tanggal");
    document.getElementById("input").value = "";
    return false;
  } else if (new Date(dt) >= today) {
    alert("Tanggal Lahir Anda Tidal Valid!");
    document.getElementById("tgl").value = "";
    document.getElementById("input").value = "";
    return false;
  }
  document.getElementById("gift").style.display = "initial";
  document.getElementById("form").style.display = "none";
  document.getElementById("p").style.display = "initial";
  setTimeout(function () {
    if ((document.getElementById("mainbox").style.display = "initial")) {
      document.getElementById("gift").style.display = "none";
    }
  }, 3500);
  document.getElementById("output").innerHTML =
    "HELLO " + input.toUpperCase() + " WE WISH YOU BIRTHDAY ON " + dt;
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
function spin() {
  //   wheel.play();
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let Select = "";
  let a = shuffle([1890, 2250, 2610]);
  let b = shuffle([1850, 2210, 2570]);
  let c = shuffle([1770, 2130, 2490]);
  let d = shuffle([1810, 2110, 2470]);
  let e = shuffle([1630, 1990, 2350]);
  let f = shuffle([1570, 1930, 2290]);
  let g = shuffle([1890, 2250, 2610]);
  let h = shuffle([1850, 2210, 2570]);
  let i = shuffle([1770, 2130, 2490]);
  let j = shuffle([1810, 2110, 2470]);
  let result = shuffle([
    a[0],
    b[0],
    c[0],
    d[0],
    e[0],
    f[0],
    g[0],
    h[0],
    i[0],
    j[0],
  ]);

  if (a.includes(result[0])) SelectedItem = "TV";
  if (b.includes(result[0])) SelectedItem = "A";
  if (c.includes(result[0])) SelectedItem = "TV5";
  if (d.includes(result[0])) SelectedItem = "ZONK3";
  if (e.includes(result[0])) SelectedItem = "ZONK5";
  if (f.includes(result[0])) SelectedItem = "TV2";
  if (g.includes(result[0])) SelectedItem = "TV3";
  if (h.includes(result[0])) SelectedItem = "TV4";
  if (i.includes(result[0])) SelectedItem = "ZONK";
  if (j.includes(result[0])) SelectedItem = "TV5";

  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + result[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);
  setTimeout(function () {
    let input = document.getElementById("input").value;
    Swal.fire({
      title: "CONGRATZ" + " " + input.toUpperCase() + ",",
      html:
        "YOU GOT" +
        " " +
        SelectedItem +
        " " +
        "FROM US" +
        '<a href="#"><br> Claim Now </a>',
      // // imageUrl: "https://unsplash.it/400/200",
      // imageWidth: 300,
      // imageHeight: 300,
      // imageAlt: "Custom image",
    });
  }, 5500);
  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);
}
