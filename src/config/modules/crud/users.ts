export default {
  id: 'users',
  idSingular: 'user',
  typeName: 'user',
  label: 'user.users',
  saveable: true,
  label_details: 'user.user',
  verbose_label_singular: 'user.verbose_user',
  itemBreadcrumb: 'email',
  i18n: false,
  menu: {
    title: 'user.users',
    icon: 'supervised_user_circle',
  },
  submodules: [
    {
      id: 'users.roles',
      title: 'role.roles',
      path: '/roles'
    }
  ],
  filters: [
    {
      id: 'status',
      type: 'select',
      whereClause: 'status',
      label: 'ui.select_status',
    },
    {
      id: 'dates',
      type: 'daterange',
      whereClause: [
        'created_at[>=]',
        'created_at[<=]',
      ],
    }
  ],
  fields: [
    {
      key: 'id',
      label: 'ID',
      type: 'text',
      groupkey: 'general',
      listingStyle: {
        columnWidth: 75,
      },
      search: true,
      display: {
        listing: true,
      },
    },
    {
      key: 'status',
      label: 'generic.state',
      type: 'status',
      groupkey: 'general',
      listingStyle: {
        columnWidth: 155,
      },
      items: [
        {
          value: 1,
          text: 'generic.online',
          color: 'success',
        },
        {
          value: 2,
          text: 'user.pending',
          color: 'warning',
        },
        {
          value: 0,
          text: 'generic.offline',
          color: 'grey lighten-2',
        },
      ],
      fetch: {
        edit: true,
      },
      display: {
        add: true,
        listing: true,
      },
    },
    {
      key: 'email',
      label: 'user.email',
      type: 'email',
      groupkey: 'general',
      search: true,
      required: true,
      props: {
        counter: 255,
      },
      display: {
        add: true,
        listing: true,
        edit: true,
      },
    },
    {
      key: 'firstname',
      label: 'user.firstname',
      type: 'text',
      groupkey: 'general',
      search: true,
      required: true,
      props: {
        counter: 100,
      },
      display: {
        add: true,
        listing: true,
        edit: true,
      },
    },
    {
      key: 'lastname',
      label: 'user.lastname',
      type: 'text',
      groupkey: 'general',
      search: true,
      required: true,
      props: {
        counter: 100,
      },
      display: {
        add: true,
        listing: true,
        edit: true,
      },
    },
    // {
    //   key: 'function',
    //   label: 'user.function',
    //   type: 'text',
    //   groupkey: 'general',
    //   props: {
    //     counter: 255,
    //   },
    //   display: {
    //     add: true,
    //     edit: true,
    //   },
    // },
    // {
    //   key: 'gender',
    //   label: 'user.gender',
    //   type: 'select',
    //   groupkey: 'general',
    //   itemText: 'text',
    //   itemValue: 'value',
    //   items: [
    //     {
    //       value: 'H',
    //       text: 'user.man',
    //     },
    //     {
    //       value: 'F',
    //       text: 'user.woman',
    //     },
    //     {
    //       value: 'U',
    //       text: 'generic.not_applicable',
    //     }
    //   ],
    //   display: {
    //     add: true,
    //     edit: true,
    //   },
    //   props: {
    //     multiple: false,
    //     clearable: true,
    //   }
    // },
    // {
    //   key: 'phone',
    //   label: 'user.phone',
    //   type: 'tel',
    //   groupkey: 'general',
    //   display: {
    //     add: true,
    //     edit: true,
    //   },
    //   props: {
    //     counter: 50,
    //   },
    // },
    // {
    //   key: 'mobile',
    //   label: 'user.mobile',
    //   type: 'tel',
    //   groupkey: 'general',
    //   props: {
    //     counter: 50,
    //   },
    //   display: {
    //     add: true,
    //     edit: true,
    //   },
    // },
    {
      key: 'password',
      label: 'user.password',
      type: 'password',
      groupkey: 'general',
      required: true,
      props: {
        counter: 255,
      },
      display: {
        add: true,
      },
    },
    {
      key: 'confirmpassword',
      label: 'user.confirm_password',
      type: 'password',
      groupkey: 'general',
      required: true,
      display: {
        add: true,
      },
      props: {
        counter: 255,
      },
    },
    {
      key: 'created_since',
      groupkey: 'general',
      label: 'generic.created_since',
      type: 'text',
      sortClause: 'created_at',
      listingStyle: {
        columnWidth: 95,
      },
      international: true,
      display: {
        listing: true,
      },
    },
    {
      key: 'last_login_date',
      groupkey: 'general',
      label: 'user.last_login_date',
      type: 'text',
      display: {
        listing: true,
        edit: true,
      },
      props: {
        disabled: true,
      },
    },
  ]
}