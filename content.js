var sponsCount = 0;
console.log(sponsCount);
function rmSpons(){
    var spons = "Sponsored";
    var articles = document.querySelectorAll('[data-testid="story-subtitle"] > span[class][data-ft]:nth-of-type(1)');
    for (let art = 0; art < articles.length; art++) {
        var suspect = articles[art];
        var checkit = suspect.textContent;
        var final = '';
        for (let j = 0; j < spons.length; j++) {
            for(let i=0; i < checkit.length; i++){
                if (spons[j] == checkit[i]) {
                    final += spons[j];
                    break;
                }
            }
        }
        if(final == spons){
            if(loopthrough(suspect) == true){
                suspect.closest('[data-testid="fbfeed_story"]').remove();
                sponsCount += 1;
                console.log(sponsCount);
            }
            articles = document.querySelectorAll('[data-testid="story-subtitle"] > span[class][data-ft]:nth-of-type(1)');
        }
    }
}
function loopthrough(parent){
    function traverse(el){
        if(el.children.length > 0){
         for(let i = 0; i < el.children.length; i++){
           traverse(el.children[i]);
         } 
        }
        if(el.children.length == 0){
          if(window.getComputedStyle(el).getPropertyValue('display') == 'none'){
            el.remove();
          }
        }
    }
    traverse(parent);
    return parent.textContent == 'Sponsored';
}
document.addEventListener("scroll", rmSpons);
