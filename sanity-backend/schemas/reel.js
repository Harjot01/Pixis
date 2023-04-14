export default {
    name: 'reels',
    type: 'document',
    title: 'Reels',
    fields: [
        {
            name: 'reels',
            type: 'object',
            title: 'Reel Embed',
            fields: [
                {
                    name: 'url',
                    type: 'url',
                    title: 'Reel video URL',
                },
            ],

        },

    ]
}