function vibrate()
{
    window.navigator.vibrate(200);
    
    document.getElementById('clickSound').currentTime=0;
    document.getElementById('clickSound').play();
}
