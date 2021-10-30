// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  DateField,
  ImageField,
  ImageInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  ReferenceField,
  SelectInput,
  ReferenceInput,
  FileInput,
  FileField,
  ArrayInput,
  SimpleFormIterator,
  ArrayField,
  useRecordContext,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import OrderItem from "./OrderItem";
import {
  Card,
  CardContent,
  Box,
  Grid,
  Typography,
  Link,
} from '@material-ui/core';
const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

const ReferenceFilter = (props) => (
  <Filter {...props}>
    <ReferenceInput
      label="Organization"
      source="user.id"
      reference="users"
      allowEmpty
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const PostList = (props) => (

  <List
    {...props}
    // filters={<ReferenceFilter />}
    // filter={{ updatedby: "test@example.com" }}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="ts" />
      <TextField source="price.total" />
      <TextField source="createdby" />
      <RichTextField source="body" />
      <ReferenceField label="User" source="uid" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const PostShow = (props) => {

console.log({props:props});
  /*const display = props.orders.map((order, index) => {
        console.log(order);
        return <OrderItem {...order} key={order.ts} />
     
});buildingNumber
"aaaaaaaaa"
(chaîne)
city
"aaaaaaaaaa"
country
"aaaaaaaaa"
pinCode
"aaaaaaa"
state
"aaaaaaaaaa"
streetName
"aaaaaaaaa"*/
const PurpleTextField = ({ source }) => {
  const record = useRecordContext();
  console.log(record)
  return (<Box>
    <Typography>
      {record[source].first_name} {record[source].last_name}
    </Typography>
    <Typography> Adresse : {record[source].buildingNumber}, {record[source].streetName} </Typography>
    <Typography>
      Code postal : {record[source].pinCode} <br />
      Ville : {record[source].city} {record[source].state} {record[source].country}
    </Typography>
  </Box>);
};
  return ( <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="ts" />
      <ReferenceField label="User" source="user_id" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="price.total" />
      <Box>
      <PurpleTextField source="address" />
      </Box>
      <ArrayField source="order">
    <Datagrid>
        <TextField source="name" />
        <TextField source="price" />
        <TextField source="quantity" />
    </Datagrid>
</ArrayField>
    </SimpleShowLayout>
     
  </Show>)
};

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <RichTextInput source="body" />
      <ReferenceInput
        label="User"
        source="user_id"
        reference="users"
        // filter={{ isAdmin: true }}
      >
        <SelectInput label="User" optionText="name" />
      </ReferenceInput>
      <FileInput source="files_multiple" multiple label="Files with (multiple)">
        <FileField source="src" title="title" />
      </FileInput>
      <ArrayInput source="files">
        <SimpleFormIterator>
          <FileInput source="file" label="Array Form Files">
            <FileField source="src" title="title" />
          </FileInput>
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="sections.mySection.items" label="Section items">
        <SimpleFormIterator>
          <TextInput source="name" label="Name" />
          <ImageInput source="image" label="Image" accept="image/*">
            <ImageField source="src" title="title" />
          </ImageInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <DateField source="createdate" />
      <DateField source="lastupdate" />
      <TextInput source="title" />
      <RichTextInput source="body" />
      <ReferenceInput
        label="User"
        source="user_id"
        reference="users"
        // filter={{ isAdmin: true }}
      >
        <SelectInput label="User" optionText="name" />
      </ReferenceInput>
      <FileInput source="files_multiple" multiple label="Files with (multiple)">
        <FileField source="src" title="title" />
      </FileInput>
      <ArrayInput source="files">
        <SimpleFormIterator>
          <FileInput source="file" label="Array Form Files">
            <FileField source="src" title="title" />
          </FileInput>
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="sections.mySection.items" label="Section items">
        <SimpleFormIterator>
          <TextInput source="name" label="Name" />
          <ImageInput source="image" label="Image" accept="image/*">
            <ImageField source="src" title="title" />
          </ImageInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
