export class YojnaRequestHandler {

    constructor(
        authorRepository,
        tagRepository,
        yojnaRepository
    ) {
        this.authorRepository = authorRepository;
        this.tagRepository = tagRepository;
        this.yojnaRepository = yojnaRepository;
    }

    async handleRequest(request, response) {

        switch (request.path) {
            case '/fetch_yojnas':
                return this.fetchYojnaList(request, response);
            case '/add_yojna':
                return response.json({
                    motto: "Build like a team of hundreds_",
                    learn: "https://appwrite.io/docs",
                    connect: "https://appwrite.io/discord",
                    getInspired: "https://builtwith.appwrite.io",
                  });
            case '/update_yojna':
                return this.updateYojna(request, response);
            default:
                return response.send({
                    error: 'Path not found'
                }, 404);
        }
    }

    async addNewYojna(req, res) {

        
        const requestData = req.payload ? JSON.parse(req.payload) : {};

        const yojna = requestData.yojna;
        const tags = requestData.tags;
        const authors = requestData.authors;

        try {
            _validateYojnaData(yojna);
            _validateTags(tags);
            _validateAuthors(authors);
        } catch (error) {
            res.json({ error: error.message }, 400);
            return;
        }

        try {
            let [tagIds, authorIds] = await Promise.all([
                _insertTags(tags),
                _insertAuthors(authors)
            ]);

            await _insertYojna(
                yojna,
                tagIds,
                authorIds
            );
            res.json({ "success": true });
        } catch (error) {
            sessionId = nanoid(11);

            console.log(`[${sessionId}] Error Inserting yojna ${error}`);
            res.json({ error: `[${sessionId}] Error Adding yojna` }, 500);
        }
    }

    async _insertTags(
        tags
    ) {

        const addedIds = [];
        const existingIds = [];

        for (const tag of tags) {
            const documentId = item.id; // Assuming each item has a unique "id"
            const data = item.data; // Item data

            try {
                // Check if the document exists
                await database.getDocument(databaseId, collectionId, documentId);
                existingIds.push(documentId); // Document already exists
            } catch (error) {
                if (error.code === 404) {
                    // Document not found, proceed to create
                    await database.createDocument(
                        databaseId,
                        collectionId,
                        documentId,
                        data
                    );
                    addedIds.push(documentId); // Document created
                } else {
                    console.error(`Error checking document: ${error.message}`);
                    throw error;
                }
            }
        }

    }

    async _insertAuthors(
        authors
    ) {

    }

    async _insertYojna(
        yojna,
        tagIds,
        authorIds
    ) {
        yojna.tags = tagIds;
        yojna.authors = authorIds;
    }
}

export default {
    YojnaRequestHandler
};
