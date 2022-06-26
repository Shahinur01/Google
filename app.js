const searchInput=document.querySelector('#search-input');

searchInput.addEventListener('keydown', function(event) {
    if (event.code==='Enter') {
        search();
    }
})
function search(){
    const input=searchInput.value;
    window.location.href=`https://www.google.com/search?q=${input} &sxsrf=ALiCzsb7DSv3aGDYUDZby5-p2GjGo0UHWg%3A1656208383114&source=hp&ei=_7u3Yv3eBK3gz7sP5LahsAg&iflsig=AJiK0e8AAAAAYrfKD82tpIiy2yR-VdndmxnFeXPhuBMT&ved=0ahUKEwi92uOCgcr4AhUt8HMBHWRbCIYQ4dUDCAc&uact=5&oq=${input}&gs_lcp=Cgdnd3Mtd2l6EAMyCgguELEDENQCEEMyBggAEAoQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIKCC4QsQMQ1AIQQzIKCC4QsQMQ1AIQQzIHCAAQsQMQQzIKCC4QsQMQ1AIQQzIECAAQQzoHCCMQ6gIQJzoECCMQJzoHCC4Q1AIQQzoKCAAQsQMQgwEQQzoFCAAQgAQ6BAguEENQggdY8QtghRJoAXAAeACAAdsBiAGACJIBBTAuMi4zmAEAoAEBsAEK&sclient=gws-wiz`;
}
