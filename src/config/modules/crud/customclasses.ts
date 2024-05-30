export default {
  id: 'customclasses',
  idSingular: 'customclass',
  saveable: true,
  typeName: 'customclass',
  label: 'customclass.customclasses',
  label_details: 'customclass.customclass',
  verbose_label_singular: 'customclass.verbose_customclass',
  itemBreadcrumb: 'title',
  i18n: true,
  groupFields: [
    {
      key: 'info',
      label: 'generic.general_info',
      hashLink: 'info-general',
      panel: true,
    },
  ],
  fields: [
    {
      key: 'id',
      fetch: {
        listing: true,
      }
    },
    {
      key: 'title',
      groupkey: 'info',
      label: 'generic.title',
      type: 'text',
      search: true,
      required: true,
      international: true,
      display: {
        add: true,
        listing: true,
        edit: true,
      },
      props: {
        counter: 255,
      },
    },
    {
      key: 'code',
      groupkey: 'info',
      label: 'generic.code',
      type: 'text',
      search: true,
      required: true,
      display: {
        add: true,
        listing: true,
        edit: true,
      },
      props: {
        counter: 255,
      },
    },
    {
      key: 'description',
      groupkey: 'info',
      label: 'generic.description',
      type: 'textarea',
      display: {
        add: true,
        listing: true,
        edit: true,
      },
      props: {
        counter: 255,
      },
    },
    {
      key: 'image',
      groupkey: 'info',
      label: 'generic.image',
      type: 'media',
      related: 'image { id, filename, file, type, dimensions, weight }',
      listing_attribute: 'file',
      listing_attributes: 'id,file',
      display: {
        listing: true,
        edit: true,
        add: true,
      },
      notsortable: true,
      props: {
        typeFilter: ['image/%']
      },
    },
    {
      key: 'created_since',
      groupkey: 'info',
      label: 'generic.created_since',
      type: 'text',
      sortClause: 'created_at',
      display: {
        listing: true,
      },
      listingStyle: {
        columnWidth: 95,
      },
    },
  ]
};
