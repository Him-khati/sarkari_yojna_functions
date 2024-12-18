import { ID } from 'node-appwrite';

export class BaseRepository {
    // Database Id
    #DATABASE_ID = "674f22820004257f51ca";

    constructor(
        tag,
        database, 
        collectionId,
    ) {
        this.tag = tag;
        this.database = database;
        this.collectionId = collectionId;
    }


    create = async (
        data,
        documentId
    ) => {
        try {

            return await this.database.createDocument(
                this.#DATABASE_ID,
                this.collectionId,
                documentId ?? ID.unique(),
                data
            );
        } catch (error) {
            console.error(`Error creating $tag document: ${error.message}`);
            throw error;
        }
    };

    read = async (
        documentId
    ) => {
        try {

            return await this.database.getDocument(
                this.#DATABASE_ID,
                this.collectionId,
                documentId
            );
        } catch (error) {
            console.error(`Error reading $tag document: ${error.message}`);
            throw error;
        }
    };

    update = async (
        documentId, 
        data
    ) => {

        try {

            return await this.database.updateDocument(
                this.#DATABASE_ID,
                this.collectionId,
                documentId,
                data
            );
        } catch (error) {
            console.error(`Error updating $tag document: ${error.message}`);
            throw error;
        }
    };

    delete = async (
        documentId
    ) => {
        try {

            return await this.database.deleteDocument(
                this.#DATABASE_ID,
                this.collectionId,
                documentId
            );
        } catch (error) {
            console.error(`Error deleting $tag document: ${error.message}`);
            throw error;
        }
    };

    read = async (query = []) => {
        try {

            return await this.database.listDocuments(
                this.#DATABASE_ID,
                this.collectionId,
                query
            );
        } catch (error) {
            console.error(`Error reading $tag documents: ${error.message}`);
            throw error;
        }
    };
}