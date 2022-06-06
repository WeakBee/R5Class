if (window.matchMedia("(max-width: 992px)").matches) {
  } else {
    gsap.from(".kotak", {
        scrollTrigger: {
            trigger: "#Jadwal-Pelajaran",
            start: "top 80%", 
            end: "top 80%", 
            toggleActions: "restart none none reverse",
        },
        y: -200,
        duration:1,
    });
  }
