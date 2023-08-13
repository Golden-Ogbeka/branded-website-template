import Select from 'react-select';

function Dropdown({
  containerStyle = {},
  values,
  isMulti = false,
  formik,
  label,
  name,
  placeholder = 'Enter Value',
  className = '',
  ...props
}) {
  return (
    <div className={'w-full flex flex-col ' + className}>
      <label
        htmlFor={name}
        className={`${formik.touched[name] && formik.errors[name] ? 'errorText ' : ''}`}
      >
        <div className='text-xl flex items-start'>
          <span>{label}</span>
          {props.required && <div style={{ marginLeft: 3 }}>*</div>}
        </div>
      </label>

      <Select
        options={values.map((value) => ({
          label: value.label,
          value: value.value,
        }))}
        onChange={(e) => {
          formik.setFieldValue(name, e ? e.value : undefined);
        }}
        onBlur={() => {
          formik.setFieldTouched(name, true);
        }}
        id={name}
        styles={{
          container: (provided, state) => ({
            ...provided,
            width: '100%',
            color: '#000',
            marginTop: 7,
            marginBottom: formik.touched[name] && formik.errors[name] ? 7 : 0,
            ...containerStyle,
          }),
          control: (provided, state) => ({
            ...provided,
            paddingBlock: 10,
            border:
              formik.touched[name] && formik.errors[name]
                ? '1px solid #d9534f'
                : '1px solid #D9D9D9',
            '&:hover': { borderColor: '#8000D7' },
            boxShadow: 'none',
          }),
          placeholder: (provided) => ({
            ...provided,
            color: '#acadb4',
          }),
          valueContainer: (provided, state) => ({
            ...provided,
            height: '30px',
            padding: '0 6px',
          }),
          input: (provided, state) => ({
            ...provided,
            margin: '0px',
          }),
          indicatorSeparator: (state) => ({
            display: 'none',
          }),
          indicatorsContainer: (provided, state) => ({
            ...provided,
            height: '30px',
          }),
        }}
        isClearable
        placeholder={placeholder}
        escapeClearsValue
        backspaceRemovesValue
        noOptionsMessage={() => 'No option found at the moment'}
        isMulti={isMulti}
        {...props}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className='error'>{formik.errors[name]}</div>
      )}
    </div>
  );
}

export default Dropdown;
