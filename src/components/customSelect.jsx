import Select from 'react-select';


const defaultOptions = [
    { value: 'ascending', label: 'Ascending' },
    { value: 'descending', label: 'Descending'},
    { value: 'recent', label: 'Recent' },
    { value: 'percentage', label: 'Percentage'},
  ];

const CustomSelect = ({options, setSelectOption}) => {
    return (
        <Select
        className="default-select"
        classNamePrefix="select"
        isLoading={false}
        isClearable={false}
        isDisabled={false}
        isSearchable={false}
        defaultValue={options ? options[0] : defaultOptions[0]}
        options={options ? options : defaultOptions}
        onChange={(e)=> setSelectOption(e.value)}
      />
    );
}

export default CustomSelect;
