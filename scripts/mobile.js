if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // is mobile..
  document.body.style = "display: flex; justify-content: center; align-self:center; padding: 15vw; background: #74B2B0; color: white;"
  document.body.innerHTML = '<div><img src="./../assets/logo.svg" alt="logo" style="width: 100%; height: 100%; -webkit-filter: drop-shadow(5px 5px 5px white)"><p style="text-align: center;">Thank you for having interest in ACCESS. Please use your laptops to view our website. Thank you for understanding.</p></div>';
}
