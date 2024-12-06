
export function validateAuthors(authors) {
    
    for(let author of authors){
        validateAuthor(author);
    }

    return true;
};

export function validateAuthor (author) {
    
    if(author.name == null){
        throw "Invalid Author : name not provided";
    }

    return true;
};
