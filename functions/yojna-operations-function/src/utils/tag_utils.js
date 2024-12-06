export function generateTagId(tag){
    let tagId = tag
    .name
    .trim()
    .toLowerCase()
    .replace(/ /g, "-"); // Replace All spaces with -

    if(tag.lower_limit != null){
        tagId += `-${tag.lower_limit}`;
    }

    if(tag.upper_limit != null){
        tagId += `-${tag.upper_limit}`;
    }

    return tagId;
}