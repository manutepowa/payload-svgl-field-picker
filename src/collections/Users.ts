import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed

    {
      name: 'svgl-picker',
      type: 'text',
      label: 'SVGL Picker',
      admin: {
        position: 'sidebar',
        components: {
          Field: '/svgl-field/components#SvglField',
        }
      },
    }
  ],
}
