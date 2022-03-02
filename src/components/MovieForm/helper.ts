export const showFormTitle = (type: string): string => {
  if (type === 'add') return 'Add Movie';
  if (type === 'edit') return 'Edit Movie';

  return 'Form Title';
};

export const formFields = {
  addAndEdit: [
    {
      label: 'Title',
      type: 'text',
      placeholder: 'Movie Title',
    },
    {
      label: 'Release Date',
      type: 'date',
      placeholder: 'Select Date',
    },
    {
      label: 'Movie Url',
      type: 'text',
      placeholder: 'https://',
    },
    {
      label: 'Rating',
      type: 'text',
      placeholder: '7.8',
    },
    {
      label: 'Genre',
      type: 'select',
      placeholder: 'Select Genre',
    },
    {
      label: 'Runtime',
      type: 'text',
      placeholder: 'minutes',
    },
    {
      label: 'Overview',
      type: 'textarea',
      placeholder: 'Movie Description',
    },
  ],
};
