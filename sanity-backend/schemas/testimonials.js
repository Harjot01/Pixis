export default {

    title: 'Testimonials',
    name: 'testimonials',
    type: 'document',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Testimonial Image',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
              {
                type: 'block'
              },
              
            ]
          },
          {
            name: 'name',
            type: 'string',
            title: 'Testimonial Name',
          },
    ]
}
