import { BaseRepository } from './base_repository.js';

export class AuthorRepository extends BaseRepository {

    constructor(database) {
        super(
            "Author", //TAG
            database,  
            '674f2400002e16ffb130' //Author Collection ID
        );
    }

    findById = async (id) => {
        try {
            const query = [`id=${id}`];
            return await this.list(query);
        } catch (error) {
            console.error(`Error finding ${tag} by id: ${error.message}`);
            throw error;
        }
    };
}
