var Cont = { val: 0 },
  NewVal = 7;

TweenLite.to(Cont, 3, {
  val: NewVal,
  roundProps: "val",
  onUpdate: function () {
    document.getElementById("semester").innerHTML = Cont.val;
  },
  scrollTrigger: {
    trigger: "#welcome",
    start: 'top center',
    toggleActions: 'play none none none',
  },
});

if (window.matchMedia("(max-width: 992px)").matches) {

} else {

}
