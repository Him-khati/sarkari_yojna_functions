export class YojnaRequestHandler {

    constructor(
        authorRepository,
        tagRepository,
        yojnaRepostiory
    ) {
        this.authorRepository = authorRepository;
        this.tagRepository = tagRepository;
        this.yojnaRepostiory = yojnaRepostiory;
    }

    async handleRequest(request, response) {

        switch (request.path) {
            case '/fetch_yojnas':
                fetchYojnaList(request, response);
                break;
            case '/add_yojna':
                addNewYojna(request, response);
                break;
            case '/update_yojna':
                updateYojna(request, response);
                break;
            default:
                response.send({
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

        this.yojnaRepostiory.
    }
}