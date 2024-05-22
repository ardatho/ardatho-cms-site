export default {
  id: 'roles',
  idSingular: 'role',
  saveable: true,
  typeName: 'role',
  label: 'role.roles',
  label_details: 'role.role',
  verbose_label_singular: 'role.verbose_role',
  itemBreadcrumb: 'title',
  i18n: true,
  groupFields: [
    {
      key: 'info',
      label: 'generic.general_info',
      hashLink: 'info-general',
      panel: true,
    },
    {
      key: 'users',
      label: 'user.users_listing',
      hashLink: 'role-usagers',
      panel: true
    },
    {
      key: 'userrights',
      label: 'role.userrights_listing',
      hashLink: 'role-droits-usager',
      panel: true
    }
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
    {
      key: 'users',
      groupkey: 'users',
      label: 'user.users',
      type: 'relations',
      related: 'users { id, lastname, firstname, email, status }',
      related_id: 'users',
      idSingular: 'user',
      related_fields: 'id, lastname, firstname, email, status',
      relationType: 'multiple',
      international: true,
      col: 'col-12',
      display: {
        edit: false,
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
            key: 'email',
            label: 'user.email',
            type: 'text',
            display: {
              table: true,
            }
          },
          {
            key: 'status',
            label: 'generic.state',
            type: 'status',
            display: {
              table: true,
            },
            listingStyle: {
              columnWidth: 80,
            },
          },
        ],
        actions: {
          selectRows: true,
          editRows: false,
          deleteRows: true,
          addRows: true,
        },
      }
    },
    {
      key: 'userrightsmodule',
      groupkey: 'userrights',
      label: 'role.modules',
      type: 'expandabletable',
      related: 'userrightsmodule { id keymodule permissions userrightsfield { id keyfield permissions } }',
      col: 'col-12',
      display: {
        edit: false,
      },
      props: {
        itemKey: 'name',
        headers: [
          {
            key: 'modules',
            text: 'Modules Name',
            value: 'name',
            type: 'text',
            showExpandCheckbox: false,
            align: 'start',
            sortable: true,
          },
        ],
      }
    },
  ]
};
