function event(game){
    var gridContainer = $('.grid-container')[0];
    var before;
    on(gridContainer,'click',function(e){
        var target = e.target;
        if (target.tagName !== 'IMG') return;
        var item = target.parentNode.parentNode;
        game.view.itemAction(item);
        if (!before){
            before = item;
            return;
        }
        if (before === item) return;
        var beforeIndex = parseInt(before.getAttribute('data-index'));
        var afterIndex = parseInt(item.getAttribute('data-index'));
        var same = game.judge(beforeIndex,afterIndex);
        if (same){
            before = null;
        }else{
            game.view.itemCancelAction(before);
            before = item;
        }
    });

}