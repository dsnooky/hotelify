// Scroll animations
const items = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.2});
items.forEach(el=>observer.observe(el));

// Affiliate click tracking
document.querySelectorAll('.track').forEach(link=>{
  link.addEventListener('click',()=>{
    gtag('event','affiliate_click',{
      event_category:'Agoda',
      event_label:link.href
    });
  });
});
