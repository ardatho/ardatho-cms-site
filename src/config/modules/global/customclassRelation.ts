export default {
  key: 'customclasses',
  idSingular: 'customclass',
  groupkey: 'customclass',
  label: 'customclass.customclasses',
  type: 'relations',
  related: 'customclasses { id, title, code, description }',
  related_id: 'customclasses',
  relationType: 'multiple',
  col: 'col-12',
  display: {
    edit: true,
  },
  props: {
    table: true,
    tableProps: {
      hideDefaultFooter: true,
      disablePagination: true,
      disableSort: true,
    },
    relatedFields: [
      {
        key: 'title',
        label: 'generic.title',
        type: 'text',
        display: {
          table: true,
        },
      },
      {
        key: 'code',
        label: 'generic.code',
        type: 'text',
        display: {
          table: true,
        },
      },
      {
        key: 'description',
        label: 'generic.description',
        type: 'text',
        display: {
          table: true,
        },
      },
    ],
    actions: {
      toEditRows: true,
      selectRows: true,
      addRows: true,
      deleteRows: true,
    },
  },
};
