export default {
  name: 'clients',
  type: 'document',
  title: 'Our Clients',
  fields: [
    {
      title: 'Clients Image',
      name: 'clientimage',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Client Name',
    },
    {
      title: 'Created At',
      name: 'createdAt',
      type: 'datetime',
    },

  ]
}
