export default {
  key: 'sections',
  type: 'relations',
  groupkey: 'builder',
  label: 'page.sections',
  related: `sections {
    id, status, title, parent_id, uniqueId, children: rows {
      id, status, title, section_id, uniqueId, children: columns {
        id, status, title, row_id, uniqueId, children: blocks {
          id, status, title, parent_id, uniqueId
        }
      }
    }
  }`,
  related_id: 'sections',
  idSingular: 'section',
  parent_id: 'parent_id',
  parent_module: 'page',
  col: 'col-12',
  display: {
    edit: true
  },
  props: {
    table: false,
    treeview: true,
    treeviewProps: {
      openAll: true,
      draggable: true,
      draggableMaxLevel: 4,
      draggableRules: [
        ({ itemDepth, targetDepth }) => itemDepth - 1 === targetDepth,
      ]
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
          treeview: true,
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
        key: 'position',
        type: 'btngroup',
        label: 'section.bk_position',
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
        key: 'fit_height_to_bk_image',
        type: 'boolean',
        label: 'section.fit_height_to_bk_image',
        display: {
          edit: true,
          add: true,
        },
      },
      {
        key: 'content_position',
        label: 'section.content_position',
        type: 'select',
        items: [
          {
            id: 'top',
            title: 'section.top',
          },
          {
            id: 'center',
            title: 'section.center',
          },
          {
            id: 'bottom',
            title: 'section.bottom',
          },
        ],
        display: {
          edit: true,
          add: true,
        },
      },
      // {
      //   key: 'padding',
      //   type: 'spacing',
      //   label: 'generic.padding',
      //   display: {
      //     edit: true,
      //     add: true,
      //   },
      // },
      // {
      //   key: 'margin',
      //   type: 'spacing',
      //   label: 'generic.margin',
      //   display: {
      //     edit: true,
      //     add: true,
      //   },
      // },
      {
        key: 'color',
        type: 'colorpicker',
        label: 'generic.color',
        display: {
          edit: true,
          add: true,
        },
        props: {
          defaultValue: '#FFFFFFFF'
        }
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
        key: 'status',
        type: 'status',
        label: 'section.status',
        display: {
          treeview: true,
        },
      },
      {
        key: 'rows',
        type: 'children',
        label: 'section.rows',
        related: 'rows { id, status, title, section_id }',
        related_id: 'rows',
        idSingular: 'row',
        parent_id: 'section_id',
        relatedFields: [
          {
            key: 'section_id',
            type: 'number',
          },
          {
            key: 'title',
            type: 'text',
            label: 'page.internal_title',
            international: true,
            display: {
              edit: true,
              add: true,
              treeview: true,
            },
          },
          {
            key: 'layout',
            type: 'select',
            label: 'row.layout',
            related_key: 'layouts',
            related_table: 'layouts',
            related_id: 'layout',
            related_fields: [
              'title',
              'id'
            ],
            required: true,
            display: {
              edit: true,
              add: true,
            },
            props: {
              limit: null,
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
          // {
          //   key: 'padding',
          //   type: 'spacing',
          //   label: 'generic.padding',
          //   display: {
          //     edit: true,
          //     add: true,
          //   },
          // },
          // {
          //   key: 'margin',
          //   type: 'spacing',
          //   label: 'generic.margin',
          //   display: {
          //     edit: true,
          //     add: true,
          //   },
          // },
          {
            key: 'color',
            type: 'colorpicker',
            label: 'generic.color',
            display: {
              edit: true,
              add: true,
            },
            props: {
              defaultValue: '#FFFFFFFF'
            }
          },
          {
            key: 'gutters',
            type: 'boolean',
            label: 'row.gutters',
            display: {
              edit: true,
              add: true,
            },
          },
          {
            key: 'contained',
            type: 'boolean',
            label: 'row.contained',
            display: {
              edit: true,
              add: true,
            },
          },
          {
            key: 'status',
            type: 'status',
            label: 'generic.state',
            display: {
              treeview: true,
              listing: true,
            },
          },
          {
            key: 'columns',
            type: 'children',
            label: 'row.columns',
            related: 'columns { id, status, title, row_id }',
            related_id: 'columns',
            idSingular: 'column',
            parent_id: 'row_id',
            relatedFields: [
              {
                key: 'row_id',
                type: 'number',
              },
              {
                key: 'title',
                type: 'text',
                label: 'page.internal_title',
                international: true,
                display: {
                  edit: true,
                  add: true,
                  treeview: true,
                },
              },
              {
                key: 'slide_per_view',
                type: 'number',
                label: 'column.slide_per_view',
                required: true,
                display: {
                  edit: true,
                  add: true,
                },
                props: {
                  defaultValue: 1,
                },
              },
              {
                key: 'slide_per_group',
                type: 'number',
                label: 'column.slide_per_group',
                required: true,
                display: {
                  edit: true,
                  add: true,
                },
                props: {
                  defaultValue: 1,
                },
              },
              {
                key: 'loop_circuit',
                type: 'boolean',
                label: 'column.loop_circuit',
                display: {
                  edit: true,
                  add: true,
                },
              },
              // {
              //   key: 'auto_height',
              //   type: 'boolean',
              //   label: 'column.auto_height',
              //   display: {
              //     edit: true,
              //     add: true,
              //   },
              // },
              {
                key: 'auto_play',
                type: 'boolean',
                label: 'column.auto_play',
                display: {
                  edit: true,
                  add: true,
                },
              },
              {
                key: 'status',
                type: 'status',
                label: 'generic.state',
                display: {
                  treeview: true,
                  listing: true,
                },
              },
              {
                key: 'blocks',
                type: 'children',
                label: 'column.blocks',
                related: 'blocks { id, status, title, parent_id }',
                related_id: 'blocks',
                idSingular: 'block',
                parent_id: 'parent_id',
                parent_module: 'column',
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
                      treeview: true,
                    },
                  },
                  {
                    key: 'status',
                    type: 'status',
                    label: 'generic.state',
                    display: {
                      treeview: true,
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
                  // {
                  //   key: 'text_align',
                  //   type: 'btngroup',
                  //   label: 'block.text_align',
                  //   display: {
                  //     edit: true,
                  //     add: true,
                  //   },
                  //   props: {
                  //     defaultValue: 0,
                  //     columns: 3,
                  //     icons: [
                  //       'format_align_left',
                  //       'format_align_justify',
                  //       'format_align_right',
                  //     ],
                  //   },
                  // },
                  // {
                  //   key: 'height',
                  //   type: 'number',
                  //   label: 'block.min_height',
                  //   display: {
                  //     edit: true,
                  //     add: true,
                  //   },
                  // },
                  // {
                  //   key: 'width',
                  //   type: 'number',
                  //   label: 'block.max_width',
                  //   display: {
                  //     edit: true,
                  //     add: true,
                  //   },
                  // },
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
                  // {
                  //   key: 'padding',
                  //   type: 'spacing',
                  //   label: 'generic.padding',
                  //   display: {
                  //     edit: true,
                  //     add: true,
                  //   },
                  // },
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
                      rules: [
                        value => value === null || value === '' || (value && value.length <= 300) || 'errors.max_300',
                        value => {
                          const patternLink = /^(https?:\/\/|\/)\w+\.[^\s]+$|^\/[^\s]*$/;
                          const patternEmail = /^mailto:.+\@.+\..+(\?.*)?$/;
                          return value === null || value === '' || (value && patternLink.test(value) || value && patternEmail.test(value)) || 'errors.link_wrong_format_abs_rel_email';
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
                          international: true,
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
                            edit: ['html'],
                            add: ['html'],
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
                          key: 'content_align',
                          type: 'btngroup',
                          label: 'block.align',
                          display: {
                            edit: ['button', 'image', 'video'],
                            add: ['button', 'image', 'video'],
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
                            rules: [
                              value => value === null || value === '' || (value && value.length <= 300) || 'errors.max_300',
                              value => {
                                const patternLink = /^(https?:\/\/|\/)\w+\.[^\s]+$|^\/[^\s]*$/;
                                const patternEmail = /^mailto:.+\@.+\..+(\?.*)?$/;
                                return value === null || value === '' || (value && patternLink.test(value) || value && patternEmail.test(value)) || 'errors.link_wrong_format_abs_rel_email';
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
                  addRows: false,
                }
              },
            ]
          },
        ],
      },
    ],
    actions: {
      addRows: true,
      editRows: true,
      deleteRows: true,
      duplicateRows: true,
    }
  }
};
