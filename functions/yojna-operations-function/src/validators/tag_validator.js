
export function validateTags(tags) {
    for(let tag of tags){
        validateTag(tag);
    }

    return true;
};

export function validateTag (tag) {
  
    if(tag.name == null){
        throw "Invalid Tag : name not provided";
    }

    if(tag.name.includes("-")){
        throw "Invalid Tag : name cannot contain -";
    }

    return true;
};
