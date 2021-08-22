import { Select } from 'antd';
import React from 'react';
import Button from '../../../components/Generic/Button';
import { Container, MainSearch, UL, LI, IconSearch } from './style';

const SearchBar = () => {
  const { Option }: any = Select;
  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }
  function onChange(value: any) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val: any) {
    console.log('search:', val);
  }
  return (
    <Container>
      <UL>
        <LI>Buy</LI>
        <LI>Rent</LI>
        <LI>Sold</LI>
      </UL>
      <MainSearch>
        <Select
          mode='multiple'
          allowClear
          style={{ width: '100%' }}
          placeholder='Please select'
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
        >
          {children}
        </Select>
        <Select
          defaultValue='a1'
          onChange={handleChange}
          style={{ width: 200 }}
        >
          {children}
        </Select>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder='Select a person'
          optionFilterProp='children'
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option: any) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value='jack'>Jack</Option>
          <Option value='lucy'>Lucy</Option>
          <Option value='tom'>Tom</Option>
        </Select>
        ,
        <Button width={130}>
          <IconSearch />
          SEARCH
        </Button>
      </MainSearch>
    </Container>
  );
};

export default SearchBar;
