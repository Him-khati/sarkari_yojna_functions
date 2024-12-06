export function validateYojna(yojna) {
    
    if(yojna.title == null || yojna.title.trim().length == 0 ){
        throw "Invalid Yojna : title is not provided";
    }

    if(yojna.content == null || yojna.content.trim().length == 0){
        throw "Invalid Yojna : content is not provided";
    }

    return true;
};
