let $ = (selector) => document.querySelector(selector)
let $a = (selector) => document.querySelectorAll(selector)
// *************scrollSPY**********************
//scroll into view elements
let about = $('#about')
let skills = $('#skills')
let portfolio = $('#portfolio')
let contact = $('#contact')
let sections = [about, skills, portfolio, contact]
//nav elements
let navLiEl = $a('nav>ul>li>a')

//scroll into view
let scrollToView = (s) => {
    el = $(s);
    if ("scrollIntoView" in el) {
        console.log("supported");
        el.scrollIntoView({ block: "start", behavior: "smooth", inline: "nearest" });
        return false
    }
}
let changeActiveclass = (els) => {

    let navElements = Array.from(navLiEl);
    // console.log(els);
    navElements.forEach(e =>e.classList.remove('active'))
    let offsetTops = navElements.reduce((p,c,i)=>{
        let pe = $(new URL(p.href).hash)
        let ce = $(new URL(c.href).hash)
        // console.log("prev: ",pe, "curr: ",ce);
        
        // console.log(Math.abs(pe.offsetTop + (pe.offsetHeight*.6) - window.scrollY),Math.abs(ce.offsetTop - window.scrollY - 200))
        // console.log("returning: ", Math.abs(pe.offsetTop + (pe.offsetHeight*.6) - window.scrollY) < Math.abs(ce.offsetTop - window.scrollY)? p:c);
        
        return Math.abs(pe.offsetTop + (pe.offsetHeight*.8) - window.scrollY) < Math.abs(ce.offsetTop - window.scrollY - 200)? p:c
    })
    // console.log(offsetTops)
    offsetTops.classList.add('active');

}
var observer = new IntersectionObserver(changeActiveclass,{threshold: [.1,.2,.3,.4,.5]})

sections.forEach(el => observer.observe(el))
// console.log(observer);
// end *************scrollSPY**********************
