import { BaseRepository } from './base_repository.js';

export class TagRepository extends BaseRepository {

    constructor(database) {
        super(
            "Tag", //TAG
            database,  
            '674f25c300005f682136' //TAG Collection ID
        );
    }

    findByEmail = async (email) => {
        try {
            const query = [`email=${email}`];
            return await this.list(query);
        } catch (error) {
            console.error(`Error finding user by email: ${error.message}`);
            throw error;
        }
    };
}
