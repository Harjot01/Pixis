export default {
    name: 'thumbnail',
    type: 'document',
    title: 'Thumbnails',
    fields: [
        {
            title: 'Add Thumbnail',
            name: 'thumbnailimg',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Thumnail name',
        },
        {
            title: 'Created At',
            name: 'createdAt',
            type: 'datetime',
        },

    ]
}