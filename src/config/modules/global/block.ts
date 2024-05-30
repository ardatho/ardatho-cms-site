import customclassRelation from './customclassRelation';

export default {
  key: 'blocks',
  groupkey: 'content',
  type: 'relations',
  label: 'column.blocks',
  related: 'blocks { id, status, title, parent_id }',
  related_id: 'blocks',
  idSingular: 'block',
  parent_id: 'parent_id',
  parent_module: 'article',
  relationType: 'multiple',
  col: 'col-12',
  display: {
    edit: true,
  },
  props: {
    table: true,
    tableProps: {
      rankDrag: true,
      hideDefaultFooter: true,
      disablePagination: true,
      disableSort: true,
    },
    relatedFields: [
      {
        key: 'parent_id',
        type: 'number',
      },
      {
        key: 'parent_module',
        type: 'text',
      },
      {
        key: 'title',
        type: 'text',
        label: 'page.internal_title',
        international: true,
        display: {
          edit: true,
          add: true,
          table: true,
        },
      },
      {
        key: 'status',
        type: 'status',
        label: 'generic.state',
        display: {
          table: true,
          listing: true,
        },
      },
      {
        key: 'position',
        type: 'btngroup',
        label: 'block.position',
        display: {
          edit: true,
          add: true,
        },
        props: {
          defaultValue: 4,
          columns: 3,
          icons: [
            'north_west',
            'north',
            'north_east',
            'west',
            'center_focus_strong',
            'east',
            'south_west',
            'south',
            'south_east',
          ],
        },
      },
      {
        key: 'bk_color',
        type: 'colorpicker',
        label: 'block.bk_color',
        display: {
          edit: true,
          add: true,
        },
        props: {
          defaultValue: '#FFFFFFFF',
        },
      },
      {
        key: 'image',
        label: 'generic.image',
        type: 'media',
        groupkey: 'main',
        related: 'image { id, filename, file, type, dimensions, weight }',
        listing_attribute: 'file',
        listing_attributes: 'id,file',
        display: {
          edit: true,
          add: true,
        },
        international: true,
        props: {
          typeFilter: ['image/%']
        },
      },
      {
        key: 'video',
        label: 'generic.video',
        type: 'media',
        groupkey: 'main',
        related: 'video { id, filename, file, type, dimensions, weight }',
        listing_attribute: 'file',
        listing_attributes: 'id,file',
        display: {
          edit: true,
          add: true,
        },
        international: true,
        props: {
          typeFilter: ['video/%']
        },
      },
      {
        key: 'href',
        type: 'text',
        label: 'block.href',
        international: true,
        display: {
          edit: true,
          add: true,
        },
        props: {
          onFocusDefaultValue: 'http://',
          rules: [
            value => value === null || value === '' || (value && value.length <= 300) || 'errors.max_300',
            value => {
              const pattern = /^https?:\/\/[a-z0-9\.\-]*\.[a-z]{1,}([\/a-z\.\?=0-9&\-\_]*)?$/i;
              return value === null || value === '' || (value && pattern.test(value)) || 'errors.link_wrong_format';
            },
          ]
        },
      },
      {
        key: 'targetblank',
        type: 'boolean',
        label: 'block.targetblank',
        display: {
          edit: true,
          add: true,
        },
      },
      {
        key: 'fit_height_to_bk_image',
        type: 'boolean',
        label: 'block.fit_height_to_bk_image',
        display: {
          edit: true,
          add: true,
        },
      },
      { ...customclassRelation, idSingularParent: 'block'},
      {
        key: 'contentblocks',
        label: 'contentblock.contentblocks',
        related: 'contentblocks { id, status, content_type, content, title, block_id }',
        related_id: 'contentblocks',
        idSingular: 'contentblock',
        idSingularParent: 'block',
        related_fields: 'id, content_type, content, title, block_id',
        parent_id: 'block_id',
        type: 'relations',
        preselectValue: 'content_type',
        display: {
          edit: true,
        },
        col: 'col-12', // For all width of the page
        props: {
          table: true,
          tableProps: {
            rankDrag: true,
            hideDefaultFooter: true,
            disablePagination: true,
            disableSort: true,
          },
          relatedFields: [
            {
              key: 'id',
              type: 'number',
            },
            {
              key: 'block_id',
              type: 'number',
            },
            {
              key: 'status',
              type: 'status',
              label: 'generic.state',
              display: {
                table: true,
              },
            },
            {
              key: 'content_type',
              label: 'block.content_type',
              type: 'select',
              display: {
                edit: true,
                add: true,
                table: true,
              },
              required: true,
              items: [
                {
                  title: 'block.html',
                  id: 'html',
                },
                {
                  title: 'block.image',
                  id: 'image',
                },
                {
                  title: 'block.video',
                  id: 'video',
                },
                {
                  title: 'block.button',
                  id: 'button',
                },
              ],
            },
            {
              key: 'title',
              label: 'page.internal_title',
              type: 'text',
              required: true,
              international: true,
              display: {
                edit: ['image', 'video', 'html', 'button'],
                add: ['image', 'video', 'html', 'button'],
                table: true,
              }
            },
            {
              key: 'content',
              label: 'block.content',
              type: 'htmltexteditor',
              allowedHTMLTags: [
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'p',
                'ul',
                'ol',
                'li',
                'strong',
                'a',
                'em',
                'pre',
                'br',
                'audio',
                'source',
                'iframe'
              ],
              international: true,
              required: true,
              toolbar: // If the field is a WYSIWYG, we can override the default toolbar options
                `undo redo | formatselect | bold italic underline |
                bullist numlist | link | removeformat | code`, // Default toolbar values
              display: {
                edit: ['html'],
                add: ['html'],
                table: true,
              },
            },
            {
              key: 'content',
              label: 'block.content',
              type: 'text',
              international: true,
              required: true,
              display: {
                edit: ['button'],
                add: ['button'],
              },
            },
            {
              key: 'image',
              label: 'generic.image',
              type: 'media',
              groupkey: 'main',
              related: 'image { id, filename, file, type, dimensions, weight }',
              listing_attribute: 'file',
              listing_attributes: 'id,file',
              display: {
                edit: ['image'],
                add: ['image'],
              },
              props: {
                typeFilter: ['image/%']
              },
            },
            {
              key: 'video',
              label: 'generic.video',
              type: 'media',
              groupkey: 'main',
              related: 'video { id, filename, file, type, dimensions, weight }',
              listing_attribute: 'file',
              listing_attributes: 'id,file',
              display: {
                edit: ['video'],
                add: ['video'],
              },
              props: {
                typeFilter: ['video/%']
              },
            },
            {
              key: 'bk_color',
              type: 'colorpicker',
              label: 'block.bk_color',
              display: {
                edit: ['html'],
                add: ['html'],
              },
            },
            {
              key: 'bk_color',
              type: 'colorpicker',
              label: 'block.bk_color',
              display: {
                edit: ['button'],
                add: ['button'],
              },
              props: {
                defaultValue: '#D44C4FFF',
              },
            },
            {
              key: 'border_color',
              type: 'colorpicker',
              label: 'block.border_color',
              display: {
                edit: ['button'],
                add: ['button'],
              },
              props: {
                defaultValue: '#D44C4FFF',
              },
            },
            {
              key: 'content_color',
              type: 'colorpicker',
              label: 'block.text_color',
              display: {
                edit: ['button'],
                add: ['button'],
              },
              props: {
                defaultValue: '#FFFFFFFF',
              },
            },
            {
              key: 'content_color',
              type: 'colorpicker',
              label: 'block.text_color',
              display: {
                edit: ['html'],
                add: ['html'],
              },
              props: {
                defaultValue: '#000000FF',
              },
            },
            {
              key: 'content_align',
              type: 'btngroup',
              label: 'block.text_align',
              display: {
                edit: ['html', 'button'],
                add: ['html', 'button'],
              },
              props: {
                defaultValue: 0,
                columns: 3,
                icons: [
                  'format_align_left',
                  'format_align_justify',
                  'format_align_right',
                ],
              },
            },
            {
              key: 'youtube_id',
              label: 'contentblock.youtube_id',
              type: 'text',
              international: true,
              display: {
                edit: ['video'],
                add: ['video'],
              }
            },
            {
              key: 'href',
              type: 'text',
              label: 'block.href',
              international: true,
              display: {
                edit: ['button'],
                add: ['button'],
              },
              props: {
                onFocusDefaultValue: 'http://',
                rules: [
                  value => value === null || value === '' || (value && value.length <= 300) || 'errors.max_300',
                  value => {
                    const pattern = /^https?:\/\/[a-z0-9\.\-]*\.[a-z]{1,}([\/a-z\.\?=0-9&\-\_]*)?$/i;
                    return value === null || value === '' || (value && pattern.test(value)) || 'errors.link_wrong_format';
                  },
                ]
              },
            },
            {
              key: 'targetblank',
              type: 'boolean',
              label: 'block.targetblank',
              display: {
                edit: ['button'],
                add: ['button'],
              },
            },
            { ...customclassRelation, idSingularParent: 'contentblock'},
          ],
          actions: {
            editRows: true,
            deleteRows: true,
            addRows: true,
          },
        },
      },
    ],
    actions: {
      editRows: true,
      deleteRows: true,
      addRows: true,
    },
  },
};
