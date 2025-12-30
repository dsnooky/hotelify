// Scroll animation
const items = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.2});
items.forEach(el=>observer.observe(el));

// Click tracking (console for now)
document.querySelectorAll('.track').forEach(link=>{
  link.addEventListener('click',()=>{
    console.log('Affiliate click:', link.href);
  });
});
