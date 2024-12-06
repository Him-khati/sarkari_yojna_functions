import { validateAuthors } from "../validators/author_validator.js";
import { validateTags } from "../validators/tag_validator.js";
import { validateYojna } from "../validators/yojna_validator.js";

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
                return await this.addNewYojna(request, response);
            case '/update_yojna':
                return this.updateYojna(request, response);
            default:
                return response.send({
                    error: 'Path not found'
                }, 404);
        }
    }

    async fetchYojnaList(req, res) {
        

    }

    async addNewYojna(req, res) {
        const requestData = req.body;
        console.log(requestData);

        const yojna = requestData;

        const tags = requestData.tags;
        const authors = requestData.authors;

        yojna.tags = null;
        yojna.authors = null;

        try {

            validateYojna(yojna);
            validateTags(tags);
            validateAuthors(authors);
        } catch (error) {
            console.error(error);
            return res.json({ error: error.message }, 400);
        }

        try {
            let [tagIds, authorIds] = await Promise.all([
                this._insertTags(tags),
                this._insertAuthors(authors)
            ]);

            await this._insertYojna(
                yojna,
                tagIds,
                authorIds
            );
            return res.json({ "success": true });
        } catch (error) {
            const sessionId = "ded"; //TODO fix nano id
            // sessionId = nanoid();

            console.log(`[${sessionId}] Error Inserting yojna ${error}`);
            return res.json({ error: `[${sessionId}] Error Adding yojna` }, 500);
        }
    }

    async _insertTags(
        tags
    ) {
        return await this.tagRepository.insertTags(
            tags
        );
    }

    async _insertAuthors(
        authors
    ) {
        //TODO
        return [];
    }

    async _insertYojna(
        yojna,
        tagIds,
        authorIds
    ) {
        yojna.tags = tagIds;
        yojna.authors = authorIds;

        await this.yojnaRepository.create(
            yojna
        );
    }
}

export default {
    YojnaRequestHandler
};
