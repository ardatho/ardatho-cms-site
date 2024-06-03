import sections from '../global/sections';

export default {
  id: 'pages',
  idSingular: 'page',
  saveable: true,
  duplicable: true,
  typeName: 'page',
  label: 'page.pages',
  label_details: 'page.edit_pages',
  verbose_label_singular: 'page.verbose_page',
  itemBreadcrumb: 'title',
  i18n: true,
  previewUrl: (item, i18n) => {
    const siteUrl = i18n('page.site_url');
    const slug = item.slug.replaceAll('{', '').replaceAll('}', '');
    return `https://${siteUrl}/${slug[0] === '/' ? '' : '/'}${slug}?cmspreview=true`;
  },
  menu: {
    title: 'page.pages',
    icon: 'insert_drive_file',
  },
  submodules: [],
  treeview: true,
  treeviewMaxLevel: 4,
  rankable: true,
  filters: [],
  groupFields: [
    {
      key: 'info',
      label: 'generic.general_info',
      hashLink: 'general-info',
      panel: true,
    },
    {
      key: 'builder',
      label: 'Builder',
      hashLink: 'builder',
      panel: true,
    },
  ],
  fields: [
    {
      key: 'id',
      label: 'ID',
      listing: true,
      listingStyle: {
        columnWidth: 80,
      },
      display: {
        listing: true,
      },
    },
    {
      key: 'title',
      groupkey: 'info',
      label: 'page.internal_title',
      type: 'text',
      col: 'col-12 col-sm-6',
      required: true,
      search: true,
      international: true,
      display: {
        add: true,
        listing: true,
        treeview: true,
        edit: true,
      },
    },
    {
      key: 'name',
      groupkey: 'info',
      label: 'page.route_name',
      type: 'text',
      col: 'col-12 col-sm-6',
      listingStyle: {
        columnWidth: 200,
      },
      props: {
        disabled: true,
      },
      search: true,
      display: {
        edit: true,
      },
    },
    {
      key: 'slug',
      groupkey: 'info',
      label: 'page.slug',
      type: 'slug',
      col: 'col-12',
      required: true,
      international: true,
      display: {
        listing: true,
        treeview: true,
        add: true,
        edit: true,
      },
      listingStyle: {
        columnWidth: 250,
      },
    },
    {
      key: 'status',
      type: 'status',
      label: 'generic.state',
      display: {
        edit: true,
        treeview: true,
        listing: true,
      },
      listingStyle: {
        columnWidth: 80,
      },
    },
    {
      key: 'meta_title',
      groupkey: 'info',
      label: 'page.meta_title',
      type: 'textarea',
      col: 'col-12 col-sm-6',
      international: true,
      display: {
        add: true,
        edit: true,
      },
    },
    {
      key: 'meta_description',
      groupkey: 'info',
      label: 'page.meta_description',
      type: 'textarea',
      col: 'col-12 col-sm-6',
      international: true,
      display: {
        add: true,
        edit: true,
      },
      props: {
        counter: 140,
      },
    },
    sections,
    {
      key: 'parents',
      related: 'parents { ids }',
      fetch: {
        edit: true
      }
    }
  ]
};
