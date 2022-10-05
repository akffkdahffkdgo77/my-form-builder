export const OPTIONS = [
    { value: 'text', label: 'Text' },
    { value: 'password', label: 'Password' },
    { value: 'email', label: 'Email' },
    { value: 'search', label: 'Search' },
    { value: 'number', label: 'Number' },
    { value: 'range', label: 'Range' },
    { value: 'date', label: 'Date' },
    { value: 'tel', label: 'Telephone' },
    { value: 'checkbox', label: 'Checkbox' }
];

export const DEFAULT_VALUES = {
    name: '',
    validations: { max: '', min: '', maxLength: '', pattern: '' },
    option: OPTIONS[0],
    html: ` <input type="text" name="Name" placeholder="Name" />\n  <input type="email" name="Email Address" placeholder="Email Address" />\n  <input type="tel" name="Mobile Number" placeholder="Mobile Number" />`
};
