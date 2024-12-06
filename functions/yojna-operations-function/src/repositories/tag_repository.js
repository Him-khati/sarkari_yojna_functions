import { generateTagId } from '../utils/tag_utils.js';
import { BaseRepository } from './base_repository.js';

export class TagRepository extends BaseRepository {

    constructor(database) {
        super(
            "Tag", //TAG
            database,
            '674f25c300005f682136' //TAG Collection ID
        );
    }

    async insertTags(tags) {
        const addedIds = [];

        for (const tag of tags) {

            const documentId = generateTagId(tag);
            const data = tag;
            console.log(`Document Id ${documentId}`);

            try {
                // Check if the document exists
                    await this.create( 
                        data,
                        documentId
                    );

                    addedIds.push(
                        documentId
                    );
            } catch (error) {
                console.error(`Error checking document: ${error.message}`);
            }
        }

        return addedIds;
    };
}
