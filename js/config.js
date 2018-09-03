var config = (function(){


    var row = 11;
    var col = 8;
    var objectCount = 11;
    var repeatCount = row * col / objectCount;

    var itemDirectionHTML = ` <div class="grid-item-direction">
                                    <div class="y up"></div>
                                    <div class="y down"></div>
                                    <div class="x left"></div>
                                    <div class="x right"></div>
                              </div>`;

    return {
        row : row,
        col : col,
        objectCount : objectCount,
        repeatCount : repeatCount, 
        itemDirectionHTML : itemDirectionHTML,
    }

})();