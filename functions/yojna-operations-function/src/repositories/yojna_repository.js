import { BaseRepository } from './base_repository.js';

export class YojnaRepository extends BaseRepository {

    constructor(database) {
        super(
            "Yojna", //TAG
            database,  
            'yojna' //Collection ID
        );
    }

    insert = async (yojna) => {

        try {
            await this.create(yojna);
        } catch (error) {
            console.error(`Error finding user by email: ${error.message}`);
            throw error;
        }
    };

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
